# Ave Maria School of Music --- Security

**Document:** `docs/security.md`\
**Status:** Security requirements and recommended controls;
implementation must be verified\
**Backend:** Supabase Auth, PostgreSQL with Row Level Security (RLS),
Supabase Storage, and trusted server-side functions\
**Related documents:** `docs/requirements.md`, `docs/architecture.md`,
`docs/database-schema.md`, `docs/implementation-plan.md`

------------------------------------------------------------------------

## 1. Purpose and scope

This document defines how Ave Maria School of Music must protect user
accounts, student and guardian information, enquiries, class details,
payment records, learning materials, certificates, and administrative
functions.

Security requirements apply to the public website and the immediate
admin/student MVP, not only to a later portal phase.

The immediate MVP includes: - Public trial-enquiry submission. - Admin
authentication and protected lead management. - Admin-controlled student
account provisioning and student login. - Student-specific access to
assigned learning materials. - Student-specific class schedules and
secure, time-limited Zoom joining.

Attendance, in-app payment management, announcements, certificates,
guardian accounts, and advanced reporting are deferred unless separately
approved. Deferring a feature does not permit weakening the controls for
the features that are included.

The existence of a requirement in this document does not mean it has
been implemented. Implement and test controls in the relevant phase of
`docs/implementation-plan.md`.

The initial system has one teacher/administrator and approximately 50
students. Keep the first implementation manageable, but do not weaken
the core access controls.

## 2. Security principles

1.  **Least privilege:** each user receives only the access needed for
    their role.
2.  **Deny by default:** protected data is unavailable unless an
    explicit policy grants access.
3.  **Server/database enforcement:** React route guards and hidden
    buttons are usability controls, not security boundaries.
4.  **No public account creation:** student accounts are created through
    an administrator-controlled invitation process.
5.  **Private by default:** student records, payments, attendance, class
    links, certificates, and learning files are not public.
6.  **Minimise data:** collect and retain only information needed to
    operate the school.
7.  **Protect minors:** handle children's information and media
    carefully and obtain appropriate guardian consent where required.
8.  **Audit important actions:** preserve a record of sensitive
    administrative changes.
9.  **Secure configuration:** privileged secrets remain on trusted
    server infrastructure, never in browser code.
10. **Verify access:** test both allowed and denied actions using
    separate accounts.

## 3. Security architecture

The intended architecture is:

-   React frontend: public pages and authenticated user interface.
-   Supabase Auth: authentication and session management.
-   Supabase PostgreSQL: application data with RLS enabled on protected
    tables.
-   Supabase Storage: private learning materials and certificates.
-   Trusted server-side functions: privileged operations, invitation
    workflows, secure class-link retrieval, and any operation requiring
    secret credentials.

The browser may use the Supabase project URL and publishable/anon key.
These are not substitutes for access control; RLS must be correctly
configured.

**Never place a Supabase service-role key, Zoom secret, email-provider
secret, or other privileged credential in React source code, a `VITE_`
environment variable, or a public repository.** Vite variables prefixed
with `VITE_` are exposed to browser code.

## 4. Roles and account model

### 4.1 Initial roles

  ---------------------------------------------------------------------
  Role                               Description
  ---------------------------------- ----------------------------------
  Public visitor                     Unauthenticated visitor using
                                     public pages and submitting the
                                     trial enquiry form

  Student                            Authenticated student with access
                                     only to their authorised student
                                     information

  Admin                              Teacher/administrator managing
                                     school operations
  ---------------------------------------------------------------------

Guardian login is **not included in version 1**. Guardian contact
information may be collected where required, especially for minors, but
this does not grant account access. Future guardian accounts require a
separate, explicitly approved permission model.

### 4.2 Authentication identity and student record

A Supabase Auth user is an authentication identity. A student is a
school business record. They must not be treated as the same thing.

A student may have a record before their portal account is activated.
When an account is invited, the backend must link the authenticated
identity to the intended student record using a trusted process.

Do not grant student access merely because someone signs in or supplies
a matching name or phone number.

### 4.3 Role assignment

-   Public users must not be able to register themselves as students.
-   A user must never be able to change their own role or account
    status.
-   The admin role must be assigned only through a trusted
    administrative process.
-   Do not trust role values supplied by the browser.
-   Validate roles in database policies and trusted server-side
    operations.
-   Do not create an admin account through a public signup flow.

## 5. Authentication and invitation workflow

### 5.1 Supported sign-in methods

The intended options are:

-   Google sign-in.
-   Email and password sign-in.
-   Password recovery for email/password accounts.

Both methods must follow the same admin-approved account model. Google
authentication proves identity; it does not automatically grant student
access.

### 5.2 Invite-only account creation

Public registration must be disabled in Supabase Auth. The
admin-controlled workflow is:

1.  The student chooses to continue after the trial/enquiry process.
2.  The admin confirms that the required one month's tuition has been
    collected in advance, as specified by the business requirements.
3.  The admin creates or invites the intended student account using the
    student's registered email.
4.  The system sends an account activation/invitation email.
5.  The student activates the account and establishes the permitted
    sign-in method.
6.  A trusted backend process verifies the authenticated identity and
    links it to the pre-authorised student record.
7.  The student can access only the records permitted for that linked
    student.

The invitation process must not allow an outsider to create an
authorised student profile by signing in with Google. If an unknown
Google account authenticates successfully, it must receive no student
data or student role.

Test the actual Supabase configuration for invited-user Google OAuth and
email identity matching before enabling both methods in production. Do
not assume that provider sign-in automatically links accounts safely.

### 5.3 Invitation expiry and resend

**Project decision:** invitation links should have a 24-hour validity
period, subject to the configured Supabase Auth email-link expiry
behaviour.

If the invitation expires:

-   The student contacts the school/admin.
-   The admin verifies the request and resends a new invitation.
-   The replacement link must be newly generated.
-   Do not extend validity by creating a custom long-lived token unless
    a reviewed security design requires it.

The exact Supabase Auth setting must be checked in the deployed project.
Do not claim a 24-hour expiry until it has been configured and tested.
Never send permanent passwords through WhatsApp or email.

### 5.4 Password recovery and sessions

-   Provide the Supabase-supported password recovery flow for
    email/password accounts.
-   Recovery links must be handled securely and must not reveal whether
    an unrelated email has an account.
-   Users should be able to sign out.
-   Do not log passwords, access tokens, refresh tokens, or recovery
    tokens.
-   Apply appropriate session handling and account revocation when an
    account is suspended.
-   Confirm the required session lifetime and recovery redirect URLs
    before production.

## 6. Access-control matrix

The following is the intended baseline. Exact policies must be
implemented per table and tested.

  -------------------------------------------------------------------------
  Resource/action       Public visitor   Student          Admin
  --------------------- ---------------- ---------------- -----------------
  Public website        Read             Read             Read/manage only
  content                                                 where approved

  Submit trial enquiry  Create through   Not applicable   Create/manage
                        protected                         
                        submission path                   

  Read lead records     No               No               Yes

  Student profile       No               Read own         Read/manage
                                         permitted        
                                         profile          

  Other students'       No               No               Yes
  profiles                                                

  Course catalogue      Read approved    Read relevant    Manage
                        public data      data             

  Enrolments            No               Read own         Manage

  Class sessions        No               Read own         Manage
                                         authorised       
                                         sessions         

  Zoom class link       No               Retrieve own     Manage/retrieve
                                         link only        for operational
                                         through          use
                                         authorised       
                                         server operation 
                                         and valid time   
                                         window           

  Attendance            No               Read own         Create/manage

  Payment history       No               Read own         Create/manage

  Payment               No               No               Yes
  verification/status                                     

  Learning-material     No private       Read assigned    Upload/manage
  metadata/files        access           materials only   

  Announcements         Read public      Read             Create/manage
                        announcements    announcements    
                        only, if any     targeted to them 

  Certificates          No private       Read own issued  Issue/manage
                        access           certificates     

  Security/audit logs   No               No               Restricted admin
                                                          access
  -------------------------------------------------------------------------

Do not expose a resource merely because the frontend does not show a
link to it.

## 7. Row Level Security (RLS)

RLS is mandatory for tables exposed through the Supabase client.

### 7.1 General requirements

-   Enable RLS on every table exposed through the Supabase API.
-   Start with no access and add explicit policies.
-   Use the authenticated user identity (`auth.uid()`) and trusted
    relationships to determine ownership.
-   Verify the user's profile and role through a protected database
    relationship or another trusted mechanism.
-   Ensure admin policies cannot be satisfied by a role value a user can
    edit.
-   Restrict `SELECT`, `INSERT`, `UPDATE`, and `DELETE` separately where
    necessary.
-   Do not assume that a policy for reading also safely permits writes.
-   Review views, RPC functions, triggers, and storage policies for
    unintended privilege paths.
-   Test policies using real authenticated test accounts, not only the
    SQL editor or service-role context.

### 7.2 Student isolation

A student must only be able to access records linked to their own
authorised student record.

This applies to:

-   Student profile.
-   Enrolments.
-   Class sessions and class details.
-   Attendance records.
-   Payment records.
-   Assigned learning materials.
-   Announcements targeted to that student.
-   Certificates.

Student A must not be able to retrieve Student B's records by changing
an ID in a URL, request body, or API call.

### 7.3 Student write restrictions

Students must not be able to:

-   Change their role or account status.
-   Link their account to another student's record.
-   Change official attendance.
-   Create, edit, delete, verify, or mark official payments as paid.
-   Upload or replace official certificates.
-   Change class ownership or retrieve another student's Zoom link.
-   Read or modify admin notes and audit logs.

If profile self-editing is allowed, explicitly list the permitted fields
and validate changes server-side/database-side. Do not permit broad
updates to the entire student row.

### 7.4 Admin access

Admin policies must verify the authenticated user has an admin role
assigned through a trusted process. Do not rely on a client-supplied
`role` value or a freely editable user metadata field.

Use the minimum necessary admin privileges. If additional staff roles
are introduced later, define their permissions separately rather than
giving every staff account full access.

## 8. Trusted server-side operations

Use trusted server-side functions for operations that require privileged
credentials or must perform multiple checks atomically, including:

-   Admin invitation and account provisioning.
-   Linking an authenticated user to an existing student record.
-   Secure Zoom class-link retrieval.
-   Public lead submission if privileged access is needed.
-   Other operations that must bypass ordinary client permissions.

For each operation:

1.  Authenticate the caller where applicable.
2.  Verify role and resource ownership.
3.  Validate all input on the server.
4.  Check business rules and allowed state transitions.
5.  Perform only the necessary operation.
6.  Return the minimum data required.
7.  Log important administrative actions without recording secrets.

Never use the service-role key in the frontend. A server-side function
using a service-role key must perform its own authorisation checks
because that key can bypass RLS.

## 9. Secure Zoom class joining

The student dashboard must not contain a publicly readable Zoom meeting
URL or passcode.

**Project decision for the initial join window:**

-   Joining is disabled before five minutes prior to the scheduled
    start.
-   Joining is enabled from five minutes before the scheduled start.
-   Joining remains enabled until 15 minutes after the scheduled end.
-   Joining is disabled outside that window.

This is the approved proposed operating rule for the initial design and
must be implemented using server-side time checks. Reconfirm it with the
project owner before production if operational needs change.

Before returning a meeting link, the trusted backend must verify:

1.  The requester is authenticated.
2.  The account is active and linked to the intended student.
3.  The student is enrolled in the course/session.
4.  The session is valid and not cancelled.
5.  The current server time is inside the allowed join window.

Return only the link needed for that session. Do not put Zoom
credentials in public database rows, frontend bundles, logs, or
unrestricted API responses. Protect any stored meeting credentials and
restrict access to them.

## 10. Supabase Storage security

Learning materials and certificates must be stored in private buckets.

Requirements:

-   Do not use public buckets for private student materials or
    certificates.
-   Only admins may upload, replace, or delete official learning files.
-   Students may read only materials assigned to their
    student/enrolment.
-   Students may read only their own certificates.
-   Use short-lived signed URLs or an authenticated download path after
    checking permissions.
-   Validate file type, file size, and file name on the trusted upload
    path.
-   Generate storage paths rather than trusting arbitrary
    client-supplied paths.
-   Prevent one student from guessing another student's file path and
    retrieving it.
-   Restrict deletion and replacement to authorised admin operations.
-   Keep file metadata in PostgreSQL and file bytes in Storage.

**Initial project policy proposal:** start with a maximum upload size of
25 MB per file. This is a school policy suggestion, not a Supabase
platform limit. Review it against actual audio/PDF needs and the
selected Supabase plan before enforcing it. Define allowed MIME types
and retention rules before launch.

## 11. Public trial enquiry form security

The public website has one shared enquiry/free-trial form. Contact
navigation and all trial CTAs must lead to this same form.

Protect the form submission path:

-   Validate all fields on the server, even if React Hook Form and Zod
    validate them in the browser.
-   Enforce sensible field-length limits and accepted values.
-   Validate dates and reject future dates of birth.
-   Do not impose a blanket over-18 rule; the audience includes
    children.
-   Collect guardian information where appropriate for minors.
-   Add rate limiting and appropriate spam/abuse protection.
-   Avoid unrestricted public `SELECT`, `UPDATE`, or `DELETE` access to
    the `leads` table.
-   Do not expose internal lead notes or status information.
-   Return a safe success/error response without leaking database
    details.
-   Store only the consent evidence and personal data required by the
    approved form and privacy policy.

A public form must not be treated as a trusted source of admin or
student account creation.

## 12. Privacy and protection of minors

The school serves children and adults. Apply additional care to
information about minors.

-   Collect only information required to respond to an enquiry and
    provide lessons.
-   Restrict guardian contact details to authorised admin workflows.
-   Do not create guardian portal access automatically.
-   Do not disclose student contact details, payment information,
    attendance, or personal notes to other students.
-   Obtain appropriate parent/guardian permission before publishing a
    child's photograph, video, performance, or testimonial.
-   Explain data collection and use in a clear privacy notice.
-   Define retention, deletion, correction, and access-request processes
    before production.
-   Confirm applicable privacy and child-protection legal requirements
    with an appropriately qualified adviser; this document is not legal
    advice.

## 13. Admin account protection

-   No public admin signup.
-   Create the initial admin account through a trusted setup process.
-   Use a strong, unique password.
-   Enable multi-factor authentication (MFA) where supported and tested.
-   Protect password recovery and admin email access.
-   Review active sessions and revoke access when necessary.
-   Do not share one admin password among multiple people.
-   Restrict sensitive actions such as payment changes, attendance
    corrections, account suspension, and certificate issuance.
-   Record important admin actions in `audit_logs`.
-   If additional staff are introduced, give each person an individual
    account and least-privilege role.

## 14. Environment variables and secrets

  -----------------------------------------------------------------------
  Value                   Frontend allowed?       Handling
  ----------------------- ----------------------- -----------------------
  Supabase project URL    Yes                     Public project
                                                  configuration

  Supabase                Yes                     Safe to expose only
  publishable/anon key                            with correct RLS and
                                                  policies

  Supabase service-role   **No**                  Trusted server
  key                                             environment only

  Zoom API                **No**                  Trusted server
  credentials/secrets                             environment only

  Email provider secret   **No**                  Trusted server
                                                  environment only

  Other privileged API    **No**                  Trusted server
  keys                                            environment only
  -----------------------------------------------------------------------

Additional rules:

-   Never commit `.env`, `.env.local`, or real secrets.
-   Keep a safe `.env.example` containing placeholder values only.
-   Check `.gitignore` before adding environment files.
-   Use separate development and production credentials.
-   Rotate any credential that may have been exposed.
-   Do not paste secrets into issue trackers, chat logs, screenshots, or
    application logs.

## 15. Input validation, errors, and logging

-   Validate all untrusted input at the trusted boundary.
-   Use parameterised database operations; do not build SQL by
    concatenating user input.
-   Apply length, type, range, and allowed-value checks.
-   Escape or safely render user-provided text to prevent cross-site
    scripting.
-   Do not expose stack traces, SQL errors, internal identifiers, or
    secrets to end users.
-   Use generic authentication/recovery messages where appropriate to
    reduce account enumeration.
-   Do not log passwords, tokens, private file URLs, Zoom credentials,
    or unnecessary personal information.
-   Keep operational logs and audit logs access-controlled.
-   Record sensitive administrative changes with actor, action, affected
    record, and timestamp.

## 16. Backup, recovery, and data lifecycle

Student, attendance, and payment information is important business data.

Before production:

-   Confirm the backup and point-in-time recovery features available on
    the selected Supabase plan.
-   Document backup frequency and retention.
-   Define who is responsible for recovery.
-   Test restoration in a safe environment.
-   Keep database migrations in version control.
-   Define how student accounts are suspended or closed.
-   Define retention and deletion rules for enquiries, student records,
    payment history, uploaded files, and audit logs.
-   Do not delete financial or audit history without an approved
    retention and compliance policy.

Do not claim that backups are configured until the selected plan and
project settings have been checked.

## 16.1 Immediate MVP security release gates

The MVP must not be launched as a working student portal until all of
the following controls have been implemented and tested:

1.  **Admin access:** the admin area requires authentication. Public
    visitors cannot read or manage leads, students, sessions, or
    materials.
2.  **Lead privacy:** the public form can submit a validated enquiry,
    but the public client cannot list, read, update, or delete lead
    records.
3.  **Invite-only students:** public student signup is disabled. Only
    the trusted admin workflow can provision a student account and link
    it to the intended student record.
4.  **Student isolation:** a student can access only their own profile,
    active enrolments, permitted session details, and assigned
    materials. Changing an ID in a URL or API request must not expose
    another student's information.
5.  **Private materials:** files are held in private Storage. Downloads
    require a server/database-authorised check that the material is
    assigned to the requesting student or their enrolment.
6.  **Secure Zoom joining:** the browser does not receive stored meeting
    credentials through ordinary database reads. A trusted server-side
    operation verifies identity, active account, student/session
    relationship, session status, and the configured join time window
    before returning the link.
7.  **Secrets:** service-role keys, Zoom credentials, and other
    privileged secrets are never included in React code, `VITE_`
    variables, browser responses beyond the specifically authorised
    session link, or public repositories.
8.  **Negative tests:** test unauthenticated access, wrong-student
    access, expired/suspended accounts, unassigned materials, cancelled
    sessions, and requests outside the Zoom join window.

Do not treat a hidden button, protected React route, or successful
manual test as proof of backend security. Verify the relevant RLS,
Storage policies, and trusted server-side checks directly.

## 17. Security testing checklist

Test both permitted and prohibited access. At minimum:

### Authentication and account provisioning

-   [ ] The admin area cannot be accessed without an authenticated admin
    account.
-   [ ] Public users cannot create student accounts through open signup.
-   [ ] An invited student can activate their account.
-   [ ] An expired invitation is rejected and can be resent by an
    authorised admin.
-   [ ] Unknown Google accounts cannot obtain student access.
-   [ ] Google sign-in and email/password sign-in both follow the
    invite-only rule.
-   [ ] A student cannot assign themselves the admin role.
-   [ ] Password recovery works without exposing whether arbitrary
    emails are registered.

### Database and RLS

-   [ ] Unauthenticated users cannot read protected student data.
-   [ ] Student A cannot read or modify Student B's profile.
-   [ ] Students cannot read other students' payments or attendance.
-   [ ] Students cannot modify official payment or attendance records.
-   [ ] Students cannot read admin notes or audit logs.
-   [ ] Only authorised admins can manage leads and student records.
-   [ ] Direct API requests are denied even if the UI route is bypassed.

### Storage and class links

-   [ ] A student can see only their own authorised upcoming class
    sessions.
-   [ ] A student cannot retrieve another student's session details by
    changing an identifier.
-   [ ] Public users cannot download private learning materials.
-   [ ] Student A cannot retrieve materials assigned only to Student B.
-   [ ] Students cannot upload or replace official certificates.
-   [ ] A student cannot retrieve another student's Zoom link.
-   [ ] A student cannot join before the permitted five-minute window.
-   [ ] A student cannot retrieve a link after the permitted cutoff.
-   [ ] Cancelled or unrelated sessions do not return a meeting link.

### Public form and operations

-   [ ] The public form successfully creates a lead without granting
    public read access to lead data.
-   [ ] The admin can securely view and update submitted leads.
-   [ ] Invalid and oversized form inputs are rejected server-side.
-   [ ] Spam/rate controls work.
-   [ ] Public users cannot read or alter submitted lead records.
-   [ ] Important admin actions are logged without exposing secrets.
-   [ ] Backup restoration has been tested before production.

Do not mark a security feature complete merely because the corresponding
frontend screen works. Verify the underlying database policy or trusted
server operation.

## 18. Decisions and settings to verify before production

The following need explicit confirmation or environment-specific
verification:

-   Exact Supabase Auth settings for disabled public signup,
    invitations, Google OAuth, and email-link expiry.
-   Whether invited-user Google sign-in links to the intended Auth
    identity as expected; test duplicate/uninvited email cases.
-   Whether MFA is enabled and enforced for the admin account.
-   Exact recovery redirect URLs and session lifetime.
-   Student self-editable profile fields.
-   Guardian contact and consent workflow.
-   Privacy notice, consent wording, retention, deletion, and applicable
    legal review.
-   Allowed file types, upload limit, and storage retention.
-   Teacher time zone and class scheduling rules.
-   Zoom provider configuration, secret storage, and join-window
    behaviour.
-   Announcement visibility and certificate access rules.
-   Backup plan, retention, and recovery procedure.
-   Admin account recovery and offboarding process.

## 19. Relationship to the database schema

`docs/database-schema.md` defines the tables, columns, and
relationships. This document defines the access rules and protection
requirements for those records.

For the immediate MVP, apply this review first to `leads`, `profiles`,
`students`, `courses`, `course_levels`, `enrollments`,
`learning_materials`, `material_assignments`, and `class_sessions`. Do
not expose deferred tables or buckets before their feature is approved
and their access rules are defined.

Before exposing any new table or Storage bucket to the application:

1.  Identify its data sensitivity.
2.  Define public, student, and admin permissions.
3.  Enable and test the appropriate RLS or Storage policies.
4.  Verify that unauthorised users cannot access it through direct API
    calls.
5.  Document any trusted server-side operation that uses privileged
    credentials.

Security is part of the data model and backend design, not a final
UI-only step.
