# Implementation Plan --- Ave Maria School of Music

**Document:** `docs/implementation-plan.md`\
**Status:** Proposed delivery plan; confirm the current repository state
and dependencies before each task.

## 1. Goal

Deliver the Ave Maria School of Music public website and essential
operational system as one secure, usable MVP. Build in small, testable
increments, following the dependency order below. The public website
already exists as a starting foundation; further marketing-page
beautification must not block the operational workflows.

The immediate MVP must support:

-   Public trial/enquiry submission and secure lead storage.
-   Admin authentication and protected lead management.
-   Admin-controlled student records and account provisioning.
-   Student authentication without public self-registration.
-   Course and enrolment records required for access control.
-   Private learning-material upload, assignment, and student access.
-   Admin class scheduling and student-specific upcoming-class views.
-   Secure, server-authorized Zoom joining.
-   Security, functional, responsive, accessibility, and deployment
    verification.

This plan does not claim any feature is already implemented. Inspect the
repository and verify actual status before assigning a task.

## 2. Authoritative documents and technology constraints

Read these documents before relevant work:

-   `docs/requirements.md` --- approved business behaviour,
    requirements, acceptance criteria, and unresolved decisions.
-   `docs/database-schema.md` --- tables, relationships, constraints,
    and implementation priority.
-   `docs/security.md` --- authentication, authorization, RLS, Storage,
    trusted operations, and security tests.
-   `docs/architecture.md` --- system boundaries and technical
    organisation.
-   `docs/design-system.md` --- brand, tokens, responsive behaviour, and
    component guidance.
-   `docs/seo.md` --- public-page SEO.
-   `AGENTS.md` --- AI-agent workflow and project constraints.
-   `README.md` --- setup and project commands.

Intended stack:

-   React + JavaScript/JSX
-   Vite
-   Tailwind CSS v4
-   React Router DOM
-   React Hook Form
-   Zod
-   Supabase (Auth, PostgreSQL, Storage, and trusted server-side
    functions)
-   Lucide React
-   Zoom for online lessons
-   WhatsApp as the contact channel

Do not introduce TypeScript, Firebase, Next.js, a payment gateway,
another styling system, or a new infrastructure provider without
explicit approval. Inspect `package.json` and existing configuration
rather than assuming dependencies or scripts exist.

## 3. Execution rules

1.  Work on one task at a time.
2.  Before editing, inspect relevant files and identify the acceptance
    criteria and dependencies.
3.  State the proposed task scope and files expected to change.
4.  Make the smallest coherent change; reuse existing components and
    patterns.
5.  Do not rewrite working pages or restructure folders without a
    demonstrated need and approval.
6.  Do not implement deferred features as hidden dependencies.
7.  Test the changed behaviour and relevant nearby behaviour.
8.  Report changed files, commands actually run, results, and
    limitations.
9.  Stop and wait for explicit owner approval before starting the next
    task.
10. If a reference document conflict or unresolved business decision
    blocks the task, stop and ask rather than inventing a rule.

A task is not complete merely because the UI looks correct. Backend
persistence, authorization, error handling, and relevant tests must work
for the feature being delivered.

## 4. Phase overview

  -----------------------------------------------------------------------
  Phase                   Outcome                 MVP status
  ----------------------- ----------------------- -----------------------
  0\. Documentation and   Confirmed               Required
  repository baseline     documentation, clean    
                          baseline, verified      
                          project structure       

  1\. Lead submission and Enquiries persist and   Required
  admin lead management   are securely manageable 
                          by admin                

  2\. Student management  Admin provisions        Required
  and authentication      students; students      
                          securely access their   
                          own account             

  3\. Learning materials  Admin uploads/assigns   Required
                          private materials;      
                          students access only    
                          assigned materials      

  4\. Class scheduling    Admin schedules         Required
  and secure Zoom access  sessions; students see  
                          and securely join their 
                          own classes             

  5\. MVP verification    Security, functional,   Required
  and launch              responsive,             
                          accessibility, and      
                          deployment checks pass  

  6\. Deferred            Attendance, payment     Later
  improvements            records, announcements, 
                          certificates, exams,    
                          guardian accounts,      
                          reports, etc.           
  -----------------------------------------------------------------------

## 5. Phase 0 --- Documentation and repository baseline

### Task 0.1 --- Verify project documentation

-   Check that requirements, schema, security, architecture,
    implementation plan, design system, SEO, AGENTS, and README agree on
    the immediate MVP.
-   Preserve unresolved decisions explicitly.
-   Do not treat a proposed decision as approved.

**Acceptance criteria** - Document paths and links are valid. - MVP and
deferred scope are consistent. - Known conflicts are reported and
resolved or clearly marked as blockers.

### Task 0.2 --- Inspect repository and environment

-   Inspect project structure, `package.json`, Vite, Tailwind CSS v4,
    routing, existing pages/components, and Supabase setup.
-   Identify what is already implemented and reusable.
-   Check `.gitignore` and ensure environment files/secrets are not
    committed.
-   Do not modify files during an inspection-only task.

**Acceptance criteria** - A factual implementation inventory exists. -
Missing setup and technical risks are identified. - No unnecessary
rewrite is proposed.

### Task 0.3 --- Establish a Git checkpoint

-   Review `git status`.
-   Commit only reviewed, intended documentation/configuration changes.
-   Do not stage secrets, generated build output, or unrelated files.

**Acceptance criteria** - A recoverable commit exists before substantial
feature work.

## 6. Phase 1 --- Lead submission and admin lead management

**Phase outcome:** A prospective student/parent can submit the one
shared enquiry form, the lead is stored, and an authenticated admin can
review/manage it.

### Task 1.1 --- Supabase environment and client setup

-   Verify the Supabase project and environment configuration.
-   Use only public client configuration in the browser.
-   Keep service-role keys and other secrets out of frontend variables
    and source control.
-   Add clear configuration validation without printing secret values.

**Acceptance criteria** - The application connects using the intended
public client credentials. - Missing configuration produces a safe,
understandable error. - No privileged key is bundled into the frontend.

### Task 1.2 --- Lead database migration and policies

-   Implement the `leads` table according to `docs/database-schema.md`.
-   Add only the indexes, constraints, and fields specified by the
    approved schema.
-   Apply RLS and the approved public-submission/admin-read/admin-update
    model from `docs/security.md`.
-   Use migrations or the repository's established database-change
    workflow.

**Acceptance criteria** - Schema matches the reference document. -
Anonymous users cannot read or enumerate leads. - Admin access is
limited to authorized identities. - Negative authorization tests are
included.

### Task 1.3 --- Public enquiry form integration

-   Reuse the existing single form immediately before the homepage
    footer.
-   Ensure Contact navigation and every trial CTA point to the same
    form.
-   Preserve approved field labels and validation requirements.
-   Submit through the approved secure backend route/function.
-   Prevent duplicate submissions where appropriate without inventing
    business rules.

**Acceptance criteria** - Valid submissions create a lead record. -
Invalid submissions are rejected with field-level feedback. - The UI
reports success only after confirmed persistence. - Backend failure
leaves the form in a recoverable state and does not falsely report
success. - The form remains responsive and accessible.

### Task 1.4 --- Admin authentication and protected admin entry

-   Implement admin sign-in using the approved Supabase Auth approach.
-   Do not expose public admin signup.
-   Use route protection for user experience and backend authorization
    for actual security.
-   Provide sign-out and safe session handling.

**Acceptance criteria** - Authorized admin can sign in and sign out. -
Unauthenticated users cannot access admin data. - A normal authenticated
student cannot perform admin operations. - Direct API/database access is
also denied where not authorized.

### Task 1.5 --- Admin lead list and detail

-   Build a responsive lead list/detail interface using existing design
    tokens.
-   Display only approved lead fields.
-   Add search/filter/status actions only where defined by
    requirements/schema.
-   Do not invent lead statuses or transitions; resolve OQ-04 before
    implementing unspecified transitions.

**Acceptance criteria** - Admin can retrieve and review permitted lead
records. - Unauthorized users cannot retrieve them. - Loading, empty,
error, and success states are present. - Data is not exposed in public
routes or logs.

### Task 1.6 --- Phase 1 verification

Test:

-   Valid and invalid enquiry submissions.
-   Duplicate/abuse handling supported by the chosen implementation.
-   Admin authentication and session expiry behaviour.
-   Anonymous and student attempts to read/update leads.
-   RLS policies and direct data access.
-   Mobile form and admin layout.
-   Production build and available lint/tests.

**Phase gate:** Do not begin Phase 2 until lead submission and admin
lead management pass their acceptance checks and the owner approves.

## 7. Phase 2 --- Student management and authentication

**Phase outcome:** Admin can create and provision a continuing student's
account, manage the required course/enrolment record, and the student
can activate and access only their own permitted data.

### Task 2.1 --- Student and profile data

-   Implement the required `profiles` and `students` structures
    according to the schema.
-   Preserve the distinction between Auth identity, user profile, and
    student business record.
-   Do not treat a parent contact as automatic account authorization.
-   Support children and adults; DOB must be valid and not in the
    future, with no blanket over-18 restriction.

### Task 2.2 --- Admin-controlled student provisioning

-   Build the admin student creation workflow.
-   Follow the approved payment-before-account rule: if a student
    continues after trial, one month's tuition is collected in advance
    before account setup.
-   Provision/invite the account through the trusted workflow described
    in `security.md`.
-   Never expose service-role credentials in the browser.
-   Do not send permanent passwords through WhatsApp.
-   Invitation expiry duration remains unresolved; expired-link recovery
    is by contacting the admin for a replacement.

### Task 2.3 --- Courses, levels, and enrolments

-   Implement only the approved `courses`, `course_levels`, and
    `enrollments` structures.
-   Beginner is the default level.
-   Admin controls level definitions and changes.
-   Keep enrolment state and student level distinct.
-   Use enrolment records for authorization only as specified by the
    schema and security rules.

### Task 2.4 --- Student sign-in and protected dashboard shell

-   Implement student login, logout, and approved account
    activation/recovery.
-   Do not add public student self-registration.
-   Build a minimal student dashboard shell and profile summary.
-   Enforce ownership through RLS and trusted operations, not just React
    route checks.

**Acceptance criteria** - Admin can provision a student through the
approved flow. - Student can activate and authenticate. - Student can
access only their own allowed records. - Public users cannot create
student accounts. - Students cannot elevate their role or read another
student's data.

**Phase gate:** Verify role isolation, invitation flow, RLS, and admin
provisioning before Phase 3.

## 8. Phase 3 --- Learning materials

**Phase outcome:** Admin can upload private learning materials, assign
them according to the approved data model, and students can access only
their assigned resources.

### Task 3.1 --- Private Storage configuration

-   Create/configure the approved private Storage bucket and policies.
-   Follow `docs/database-schema.md` and `docs/security.md`.
-   Validate allowed file types and size according to confirmed
    settings; if limits are unresolved, ask before enforcing arbitrary
    business limits.
-   Use safe object paths and metadata; do not expose public object URLs
    for private resources.

### Task 3.2 --- Admin material upload and metadata

-   Implement upload UI with progress, success, failure, and retry
    states.
-   Store metadata in `learning_materials`.
-   Do not claim an upload succeeded until Storage and metadata
    operations have both succeeded or the UI clearly reports partial
    failure and recovery.

### Task 3.3 --- Material assignment

-   Implement `material_assignments` according to the approved schema.
-   The exact assignment target (student versus enrolment) must follow
    the current schema; if the schema still marks it unresolved, stop
    and ask before implementing.
-   Admin can review and manage assignments within authorized scope.

### Task 3.4 --- Student material access

-   Show only materials assigned to the authenticated student.
-   Use authorized downloads or short-lived signed access as specified
    by security design.
-   Test attempts to guess object paths or access another student's
    material.

**Acceptance criteria** - Private objects are not publicly readable. -
Admin upload and assignment work. - Students can access only assigned
materials. - Unauthorized download attempts fail. - Upload/download
errors are handled clearly.

**Phase gate:** Verify Storage policies and cross-student isolation
before Phase 4.

## 9. Phase 4 --- Class scheduling and secure Zoom access

**Phase outcome:** Admin can schedule classes, students can see their
own upcoming sessions, and a student receives a private Zoom link only
after trusted authorization.

### Task 4.1 --- Class-session data

-   Implement `class_sessions` according to `docs/database-schema.md`.
-   Preserve the four-classes-per-month and 30--45-minute class
    expectations.
-   Do not invent cancellation, expiry, makeup-credit, or automatic
    rescheduling rules.
-   Makeup lessons are agreed directly between tutor and student/parent
    and the resulting schedule is updated.

### Task 4.2 --- Admin scheduling interface

-   Create/edit class sessions for the appropriate student/enrolment.
-   Validate date/time and required relationships.
-   Use the agreed timezone strategy; if it is not specified, identify
    and resolve it before implementation.
-   Do not expose Zoom secrets or private meeting URLs through public
    data.

### Task 4.3 --- Student upcoming-class view

-   Show only the authenticated student's permitted sessions.
-   Display date/time clearly in the agreed timezone.
-   Handle no-upcoming-class and loading/error states.

### Task 4.4 --- Secure Join Class operation

-   The button activates five minutes before scheduled start.
-   The student must be authenticated and authorized for that session.
-   The Zoom link is returned only by a trusted server-side operation
    after identity, enrolment/session ownership, and timing checks.
-   Do not put private Zoom links in public frontend bundles or
    unrestricted database responses.
-   The post-end joining cutoff is unresolved. Do not implement the
    proposed 15-minute-after-end rule until the owner confirms it and
    `requirements.md` and `security.md` are reconciled.

**Acceptance criteria** - Admin can create and manage the approved class
schedule. - Student sees only their own upcoming classes. - Join is
unavailable before the confirmed activation window. - Unauthorized users
and students cannot retrieve other students' Zoom links. - The server
rejects invalid, out-of-window, or unauthorized requests. - No post-end
cutoff is assumed before the owner resolves it.

**Phase gate:** Security-test the trusted Zoom operation before Phase 5.

## 10. Phase 5 --- MVP verification and launch

### Task 5.1 --- End-to-end workflow tests

Verify:

-   Visitor submits enquiry -\> lead is stored -\> admin reviews lead.
-   Admin provisions student -\> student activates and signs in.
-   Admin uploads/assigns material -\> student accesses assigned
    material.
-   Admin schedules class -\> student sees session -\> authorized
    student joins securely.

### Task 5.2 --- Security verification

Verify:

-   Supabase RLS for every MVP table.
-   Private Storage object policies.
-   No public signup or privilege escalation.
-   Admin/student role separation.
-   Cross-student data isolation.
-   Trusted server-side Zoom authorization.
-   No secrets in source, logs, frontend bundles, or public environment
    variables.
-   Safe handling of minors' personal information.

### Task 5.3 --- Quality verification

-   Responsive checks at 375px, 425px, 768px, 1024px, and 1440px, plus
    intermediate widths.
-   Keyboard navigation, visible focus, labels, validation messages, and
    contrast.
-   Loading, empty, success, and error states.
-   Browser console and network checks.
-   `npm run build` and configured lint/test scripts; report only
    commands actually available and run.

### Task 5.4 --- Production and launch

-   Confirm frontend host, Supabase production configuration, DNS,
    canonical domain, HTTPS, and environment variables.
-   Configure production secrets only in trusted hosting/function
    settings.
-   Apply database migrations and Storage policies to production.
-   Verify auth redirects, email delivery, domain configuration, and
    production workflows.
-   Complete essential public SEO checks without allowing SEO polish to
    delay security or operational MVP completion.

Do not assume Hostinger is the frontend host merely because the domain
was registered there. Hosting choice remains a separate approved
decision.

**MVP launch gate:** All critical workflows and security checks must
pass. Record any accepted limitation explicitly.

## 11. Phase 6 --- Deferred improvements

These are future features and are not MVP prerequisites:

-   Attendance management.
-   In-app payment records (manual payment collection continues outside
    the application unless separately approved).
-   Announcements.
-   Certificates and exam results.
-   Guardian accounts/family access.
-   Advanced analytics and reports.
-   Paid digital-course purchases and expanded learning-management
    features.
-   Tutor performance video integration.
-   Additional public marketing pages or major visual redesigns.

Each deferred feature requires its own requirements review,
schema/security impact assessment, task plan, and owner approval before
implementation.

## 12. Cross-phase release rules

-   Do not skip security work until the end; implement and test
    authorization with each backend feature.
-   Do not create tables, fields, buckets, functions, or roles outside
    the approved schema/security design without approval.
-   Do not claim features are implemented based on documentation alone.
-   Keep requirements IDs intact when linking tasks and tests.
-   Keep public pages separate from authenticated application routes.
-   Ensure all trial CTAs and Contact navigation use the one shared
    enquiry form.
-   Use the approved tutor photograph; performance video remains
    deferred.
-   Preserve the existing working UI and avoid unrelated refactors.
-   Every phase ends with a verification report and explicit approval
    gate.

## 13. Open decisions that may block specific tasks

  -----------------------------------------------------------------------
  Decision                            Blocks
  ----------------------------------- -----------------------------------
  Final lead statuses/transitions     Lead status workflow beyond basic
  (OQ-04)                             review

  Exact trial booking/confirmation    Automated appointment confirmation
  process (OQ-05)                     

  Meaning of a class section (OQ-06)  Detailed billing/section logic

  Zoom post-end cutoff (OQ-08)        Final join-window implementation

  Google login approval (OQ-09)       Google authentication

  Material file                       Final upload validation and
  limits/formats/retention (OQ-10)    retention

  Timezone policy                     Class scheduling and display

  Material assignment target if       Material assignment implementation
  schema unresolved                   

  Hosting/deployment decision         Production release
  (OQ-13/OQ-17)                       

  Legal/privacy page approval         Public launch
  -----------------------------------------------------------------------

Resolve a decision only when its dependent task is reached. Do not block
unrelated tasks unnecessarily.
