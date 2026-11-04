# Ave Maria School of Music --- Database Schema

**Document:** `docs/database-schema.md`\
**Status:** Proposed database design; requires review before
implementation\
**Database:** Supabase PostgreSQL\
**Related documents:** `docs/requirements.md`, `docs/architecture.md`,
`docs/security.md`, `docs/implementation-plan.md`

------------------------------------------------------------------------

## 1. Purpose

This document defines the proposed relational data model for Ave Maria
School of Music. It describes the tables, their responsibilities,
relationships, important fields, constraints, and data-integrity rules
needed to support the public enquiry workflow and the first usable admin
and student portal release.

The immediate MVP is not just a lead-capture website. It must support:
secure lead collection and admin lead management, admin-controlled
student account provisioning, student login, assigned learning
materials, class scheduling, and secure Zoom joining. Attendance,
payment management, announcements, certificates, guardian accounts, and
advanced reporting remain later enhancements unless separately approved.

This is a design specification, not an executable migration. Do not
create every table at once. Implement only the tables required by the
current phase in `docs/implementation-plan.md`, after the project owner
reviews the design.

The initial operating model is one teacher managing approximately 50
students. The schema should remain straightforward at this scale while
avoiding decisions that would make reasonable future expansion
difficult.

## 2. Design principles

1.  Use PostgreSQL relational tables with UUID primary keys for
    application entities.
2.  Use foreign keys and database constraints to preserve referential
    integrity.
3.  Keep authentication identities separate from student business
    records.
4.  Store timestamps as `TIMESTAMPTZ` and store each student's IANA
    time-zone identifier where local scheduling is needed.
5.  Keep money in an exact numeric representation, never floating-point.
6.  Use explicit status values and validate them with constraints or
    controlled lookup data.
7.  Preserve important payment, attendance, and administrative history.
    Avoid destructive updates where an auditable correction is required.
8.  Keep files in Supabase Storage; store file metadata and access
    relationships in PostgreSQL.
9.  Enforce access through Supabase Row Level Security (RLS), as defined
    in `docs/security.md`.
10. Introduce tables incrementally and manage schema changes through
    version-controlled migrations.

## 3. Core entities

The following is the proposed logical table set. Some tables are
required for the planned portal; others are optional or deferred.
Finalise individual columns and constraints during the relevant
implementation phase.

  ----------------------------------------------------------------------
  Table                    Purpose                Priority
  ------------------------ ---------------------- ----------------------
  `profiles`               Application identity,  Required for portal
                           role, and basic        
                           account status linked  
                           to Supabase Auth       

  `students`               Student-specific       Required for portal
                           personal and learning  
                           information            

  `guardians`              Guardian contact       Future-ready /
                           records, without       optional
                           guardian login in      
                           version 1              

  `student_guardians`      Links one or more      Future-ready /
                           guardians to one or    optional
                           more students          

  `leads`                  Public trial-class     Required for lead
                           enquiries and          phase
                           lead-management status 

  `courses`                Keyboard, Guitar, and  Required for enrolment
                           any approved course    
                           catalogue entries      

  `course_levels`          Admin-managed learning Required for student
                           levels such as         operations
                           Beginner               

  `enrollments`            A student's enrolment  Required for student
                           in a course            operations

  `class_sessions`         Actual scheduled       Required for
                           lessons, including     scheduling
                           rescheduled or makeup  
                           sessions               

  `attendance_records`     Attendance outcome for Required for
                           a student in a session attendance

  `payment_records`        Manual payment records Required for payments
                           and their covered      
                           periods                

  `learning_materials`     Metadata for files     Required for materials
                           stored in private      
                           Supabase Storage       

  `material_assignments`   Links materials to     Required for assigned
                           students or enrolments materials

  `announcements`          Admin-created notices  Required for portal
                           for students           

  `certificates`           Records of             Required when
                           certificates issued by certificates launch
                           the school             

  `exam_results`           Optional records of    Deferred unless
                           examination results    approved

  `audit_logs`             Important              Strongly recommended
                           administrative actions 
                           and changes            
  ----------------------------------------------------------------------

Do not create a separate table merely because it appears in this list.
Confirm that the relevant feature is in scope and that the proposed
entity is needed.

## 3.1 Immediate MVP table priorities

Use this priority guide when deciding what to implement for the first
usable release.

  ------------------------------------------------------------------------
  Priority                Tables                   MVP purpose
  ----------------------- ------------------------ -----------------------
  Required first          `leads`                  Save public trial
                                                   enquiries and let the
                                                   admin review and update
                                                   their status.

  Required first          `profiles`, `students`   Support admin and
                                                   student identities,
                                                   account status, and the
                                                   link between an Auth
                                                   user and a student
                                                   record.

  Required first          `courses`,               Record which course a
                          `course_levels`,         student is authorised
                          `enrollments`            to access. Keep the
                                                   initial implementation
                                                   minimal; do not build a
                                                   complex course
                                                   catalogue.

  Required first          `learning_materials`,    Store private material
                          `material_assignments`   metadata and assign
                                                   files to the correct
                                                   student or enrolment.

  Required first          `class_sessions`         Schedule classes and
                                                   associate each session
                                                   with the relevant
                                                   enrolment. Store only a
                                                   protected meeting
                                                   reference, not a
                                                   publicly readable Zoom
                                                   URL or passcode.

  Recommended             `audit_logs`             Record sensitive admin
                                                   actions such as account
                                                   provisioning, material
                                                   assignment, and class
                                                   changes. If deferred,
                                                   document the
                                                   compensating
                                                   operational controls.

  Deferred                `attendance_records`,    Add when the
                          `payment_records`,       corresponding feature
                          `announcements`,         is approved for a later
                          `certificates`,          phase.
                          `exam_results`,          
                          `guardians`,             
                          `student_guardians`      
  ------------------------------------------------------------------------

**Important:** `class_sessions` is required for the MVP class schedule
and secure joining workflow. `attendance_records` is not required just
to schedule a class or allow an authorised student to join it. Payment
records are also not required if payments continue to be verified and
tracked outside the application during the initial release.

The exact material-assignment model (per student or per enrolment), file
types and limits, course-level rules, and session scheduling rules still
require project-owner confirmation. Do not invent these business rules
during implementation.

## 4. Authentication and profile model

### 4.1 `profiles`

One application profile is associated with a Supabase Auth user. The
authentication user remains the source of truth for sign-in credentials
and verified email identity.

Proposed fields:

  -----------------------------------------------------------------------
  Field                   Suggested type          Rules / purpose
  ----------------------- ----------------------- -----------------------
  `id`                    `UUID`                  Primary key; references
                                                  `auth.users.id` with
                                                  appropriate deletion
                                                  behaviour

  `role`                  `TEXT` or controlled    Initially `admin` or
                          enum                    `student`; never
                                                  user-editable

  `account_status`        `TEXT`                  For example `invited`,
                                                  `active`, `suspended`;
                                                  define exact
                                                  transitions

  `display_name`          `TEXT`                  Optional display name

  `created_at`            `TIMESTAMPTZ`           Not null; default
                                                  current timestamp

  `updated_at`            `TIMESTAMPTZ`           Not null; maintained by
                                                  trusted database logic
  -----------------------------------------------------------------------

Email should normally be read from the authenticated Supabase Auth
identity rather than copied into multiple tables. If an email snapshot
is required for business history, document why and define how changes
are synchronised.

**Important:** Creating a Supabase Auth user does not automatically
authorise that user as a student. The admin invitation/enrolment
workflow must establish the profile and student association. Do not
allow a client to assign its own role.

### 4.2 Student identity is not the login identity

A student record must not be treated as interchangeable with an Auth
user. A student may exist before a portal account is activated. A future
family model may also allow one guardian account to be associated with
multiple students.

The first release does not include guardian login. Do not grant a
guardian access merely because their email or phone number appears on a
student's record.

## 5. Student and guardian records

### 5.1 `students`

Proposed fields:

  -----------------------------------------------------------------------
  Field                  Suggested type         Rules / purpose
  ---------------------- ---------------------- -------------------------
  `id`                   `UUID`                 Primary key

  `profile_id`           `UUID`                 Nullable FK to
                                                `profiles.id`; unique
                                                when present

  `full_name`            `TEXT`                 Required

  `date_of_birth`        `DATE`                 Optional until collection
                                                and retention rules are
                                                confirmed

  `phone`                `TEXT`                 Optional; store with
                                                country code where
                                                possible

  `country`              `TEXT`                 Optional

  `timezone`             `TEXT`                 IANA time-zone
                                                identifier,
                                                e.g. `Australia/Sydney`

  `current_level_id`     `UUID`                 FK to `course_levels.id`,
                                                nullable until assigned

  `student_status`       `TEXT`                 Controlled status such as
                                                `active`, `paused`,
                                                `completed`, `inactive`

  `notes`                `TEXT`                 Admin-only notes; do not
                                                store unnecessary
                                                sensitive details

  `created_at`           `TIMESTAMPTZ`          Not null

  `updated_at`           `TIMESTAMPTZ`          Not null
  -----------------------------------------------------------------------

The exact student profile fields, required/optional status, and
retention period must be confirmed before implementation. Do not collect
a date of birth or other personal information unless there is a clear
operational need.

### 5.2 `guardians` and `student_guardians` --- future-ready

Guardian login is not part of version 1. If guardian contact information
is needed for a minor, it may initially be recorded in the approved
student/enquiry workflow. Avoid duplicating the same guardian details
across many student rows if that creates update inconsistencies.

For future family support, use:

-   `guardians`: one row per guardian contact identity.
-   `student_guardians`: junction table connecting guardians and
    students.

Suggested `guardians` fields: `id`, `full_name`, `email`, `phone`,
`created_at`, `updated_at`.

Suggested `student_guardians` fields: `id`, `student_id`, `guardian_id`,
`relationship`, `is_primary_contact`, `created_at`.

Add a unique constraint on `(student_id, guardian_id)`. Decide later
whether a guardian can sign in, what each guardian may view, and how
consent and authority are verified. The relationship alone must not
grant portal access.

## 6. Public enquiries and lead management

### 6.1 `leads`

This table stores submissions from the single public inquiry/free-trial
form. The public website must not receive unrestricted read access to
this table.

Proposed fields:

  -----------------------------------------------------------------------
  Field                     Suggested type         Rules / purpose
  ------------------------- ---------------------- ----------------------
  `id`                      `UUID`                 Primary key

  `student_name`            `TEXT`                 Required

  `student_date_of_birth`   `DATE`                 Optional; only if
                                                   approved and needed

  `guardian_name`           `TEXT`                 Conditional for
                                                   minors, according to
                                                   approved form rules

  `guardian_phone`          `TEXT`                 Conditional / optional

  `email`                   `TEXT`                 Required or optional
                                                   according to final
                                                   form specification

  `country`                 `TEXT`                 As submitted

  `timezone`                `TEXT`                 IANA identifier where
                                                   available

  `preferred_time`          `TEXT`                 Submitted preference;
                                                   do not treat as a
                                                   confirmed booking

  `instrument`              `TEXT` or FK           Keyboard/Guitar or
                                                   approved course

  `current_level`           `TEXT`                 Submitted level;
                                                   validate allowed
                                                   values

  `message`                 `TEXT`                 Optional

  `consent_at`              `TIMESTAMPTZ`          Record consent where
                                                   applicable

  `status`                  `TEXT`                 Proposed: `new`,
                                                   `contacted`,
                                                   `trial_scheduled`,
                                                   `trial_completed`,
                                                   `converted`,
                                                   `not_interested`

  `admin_notes`             `TEXT`                 Admin-only

  `created_at`              `TIMESTAMPTZ`          Not null

  `updated_at`              `TIMESTAMPTZ`          Not null
  -----------------------------------------------------------------------

The exact required fields, consent wording, lead status transitions,
notification mechanism, and data-retention period remain subject to
approval. A preferred time submitted in the form is an enquiry
preference, not a confirmed class booking.

Use a trusted server-side submission path with validation and abuse
protection. Do not expose service-role credentials in the browser.

## 7. Courses, levels, and enrolments

### 7.1 `courses`

Stores the courses offered by the school.

Proposed fields: `id`, `name`, `slug`, `description`, `is_active`,
`created_at`, `updated_at`.

Initial expected courses include Keyboard and Guitar. Do not store
unconfirmed prices or promise course outcomes in this table.

### 7.2 `course_levels`

Stores admin-managed levels such as Beginner and any later approved
stages.

Proposed fields: `id`, `course_id` (FK), `name`, `description`,
`sort_order`, `is_active`, `created_at`, `updated_at`.

The requirements specify Beginner as the default level unless the admin
changes it. Confirm whether levels are shared across instruments or
specific to each course before finalising the constraints.

### 7.3 `enrollments`

A student may enrol in Keyboard, Guitar, or both. Enrolment is separate
from the student's overall account status and current learning level.

Proposed fields:

  Field          Suggested type   Purpose
  -------------- ---------------- --------------------------------
  `id`           `UUID`           Primary key
  `student_id`   `UUID`           FK to `students.id`
  `course_id`    `UUID`           FK to `courses.id`
  `status`       `TEXT`           Controlled enrolment status
  `start_date`   `DATE`           Enrolment start
  `end_date`     `DATE`           Nullable; only when applicable
  `created_at`   `TIMESTAMPTZ`    Creation time
  `updated_at`   `TIMESTAMPTZ`    Last update

Prevent duplicate active enrolments for the same student/course through
an appropriate unique or partial unique constraint. Define the exact
status values and re-enrolment behaviour before migration.

## 8. Class scheduling and makeup lessons

### 8.1 `class_sessions`

Represent each actual lesson as a session. Do not confuse a recurring
availability pattern with an actual scheduled class. If recurring
schedules are needed later, introduce a separate scheduling rule only
after the workflow is defined.

Proposed fields:

  -----------------------------------------------------------------------
  Field                   Suggested type          Purpose
  ----------------------- ----------------------- -----------------------
  `id`                    `UUID`                  Primary key

  `enrollment_id`         `UUID`                  FK to `enrollments.id`

  `starts_at`             `TIMESTAMPTZ`           Scheduled start instant

  `ends_at`               `TIMESTAMPTZ`           Scheduled end instant

  `status`                `TEXT`                  For example
                                                  `scheduled`,
                                                  `completed`,
                                                  `cancelled`,
                                                  `rescheduled`

  `session_type`          `TEXT`                  For example `regular`
                                                  or `makeup`

  `replaces_session_id`   `UUID`                  Optional self-reference
                                                  for a
                                                  makeup/rescheduled
                                                  session

  `meeting_reference`     `TEXT` or secure        Do not expose raw
                          reference               meeting credentials to
                                                  public clients

  `admin_notes`           `TEXT`                  Admin-only

  `created_at`            `TIMESTAMPTZ`           Creation time

  `updated_at`            `TIMESTAMPTZ`           Last update
  -----------------------------------------------------------------------

The business model expects four classes per student per month, each
30--45 minutes. Store actual start and end times; validate that the end
is after the start and that duration is within the approved range for
regular lessons.

The tutor and student/parent arrange makeup lessons directly. Record the
agreed replacement session and its relationship to the original session.
Do not invent cancellation, expiry, or rescheduling rules.

Prevent overlapping tutor sessions. Because a simple row-level check may
not safely prevent concurrent conflicting inserts, use an appropriate
database exclusion constraint or trusted transactional scheduling
operation after the scheduling model is finalised.

### 8.2 Time zones

Store session instants as `TIMESTAMPTZ`. Store each student's IANA
time-zone identifier (for example `Europe/London`) for display and
communication. Do not store a fixed UTC offset as a substitute for a
time-zone identifier because daylight-saving rules change.

The teacher's scheduling time zone must also be configured. The
authoritative time zone for creating and displaying schedules must be
explicitly documented during implementation.

## 9. Attendance

### 9.1 `attendance_records`

Proposed fields: `id`, `class_session_id`, `student_id`,
`attendance_status`, `recorded_by_profile_id`, `recorded_at`, `notes`,
`created_at`, `updated_at`.

Use a unique constraint on `(class_session_id, student_id)` to prevent
duplicate attendance records for the same student/session.

Only authorised admin operations should create or change official
attendance records. Students may read their own attendance history but
must not alter it.

Attendance status values must be finalised before implementation (for
example, `present`, `absent`, `late`, or `excused`). Do not treat an
unrecorded session as automatically absent.

## 10. Payments

### 10.1 `payment_records`

The initial payment method is manual bank transfer. Fees are collected
in advance; the admin collects one month's tuition before regular
lessons begin.

Proposed fields:

  ------------------------------------------------------------------------
  Field                      Suggested type         Purpose
  -------------------------- ---------------------- ----------------------
  `id`                       `UUID`                 Primary key

  `student_id`               `UUID`                 FK to `students.id`

  `enrollment_id`            `UUID`                 Optional FK to
                                                    `enrollments.id`

  `amount`                   `NUMERIC(12,2)`        Exact amount; never
                                                    floating-point

  `currency`                 `CHAR(3)`              ISO 4217 currency code

  `payment_method`           `TEXT`                 Initially
                                                    `bank_transfer`

  `payment_status`           `TEXT`                 Controlled status,
                                                    e.g. `pending`,
                                                    `paid`, `rejected`,
                                                    `refunded`

  `payment_date`             `DATE`                 Date funds were
                                                    received/recognised

  `period_start`             `DATE`                 Period covered

  `period_end`               `DATE`                 Period covered

  `transaction_reference`    `TEXT`                 Optional bank
                                                    reference

  `recorded_by_profile_id`   `UUID`                 FK to admin profile

  `admin_notes`              `TEXT`                 Admin-only

  `created_at`               `TIMESTAMPTZ`          Creation time

  `updated_at`               `TIMESTAMPTZ`          Last update
  ------------------------------------------------------------------------

Currency, exact fee amounts, payment status transitions, refund
handling, and the meaning of the covered period must be confirmed. Do
not assume all overseas students pay in the same currency.

Students may view their own payment history. Students must not create,
edit, delete, verify, or mark official payment records as paid.

For financial corrections, prefer an adjustment, reversal, or documented
correction record rather than silently overwriting historical facts. The
final accounting approach should be approved before implementation.

## 11. Learning materials and file assignments

### 11.1 `learning_materials`

Store the file itself in a private Supabase Storage bucket. Store only
metadata in PostgreSQL.

Proposed fields: `id`, `title`, `description`, `storage_bucket`,
`storage_path`, `file_name`, `mime_type`, `file_size_bytes`,
`uploaded_by_profile_id`, `is_active`, `created_at`, `updated_at`.

Do not store public file URLs as permanent access grants. Use authorised
access and temporary signed URLs.

### 11.2 `material_assignments`

Proposed fields: `id`, `learning_material_id`, `student_id` (or
`enrollment_id` if assignment is course-specific),
`assigned_by_profile_id`, `assigned_at`.

Choose student-level versus enrolment-level assignment based on the
actual teaching workflow. Avoid allowing both forms without a clear
rule.

## 12. Announcements

### 12.1 `announcements`

Proposed fields: `id`, `title`, `body`, `status` (for example `draft`,
`published`, `archived`), `published_at`, `created_by_profile_id`,
`created_at`, `updated_at`.

If announcements must target selected students or courses, introduce a
separate junction table such as `announcement_recipients`. Do not assume
every announcement is visible to every student unless that is the
intended rule.

## 13. Certificates and examination results

### 13.1 `certificates`

Proposed fields: `id`, `student_id`, `course_id` (optional FK), `title`,
`certificate_number` (if used), `storage_bucket`, `storage_path`,
`issued_at`, `issued_by_profile_id`, `status`, `created_at`.

Only an authorised admin may issue or revoke a school certificate.
Certificate eligibility criteria and templates remain unresolved. Do not
describe a school-issued certificate as an official Trinity College
London certificate or imply external accreditation unless verified and
approved.

### 13.2 `exam_results` --- optional/deferred

Create this table only if the school confirms that examination results
need to be stored.

Possible fields: `id`, `student_id`, `course_id`, `exam_body`,
`exam_name`, `grade_or_result`, `exam_date`, `verified_at`,
`created_at`.

Do not conflate a student's level, an examination result, an enrolment
status, and a certificate. They represent different facts.

## 14. Administrative audit history

### 14.1 `audit_logs`

Strongly recommended for important administrative actions.

Possible fields: `id`, `actor_profile_id`, `action`, `entity_type`,
`entity_id`, `old_values` (JSONB, carefully filtered), `new_values`
(JSONB, carefully filtered), `created_at`, `request_id`.

Record meaningful actions such as payment changes, attendance changes,
account suspension, enrolment changes, and certificate issuance.

Do not store passwords, authentication tokens, service-role keys, full
payment credentials, or unnecessary personal information in audit logs.
Restrict access to logs. The exact events and retention period must be
defined.

## 15. Relationships overview

-   `auth.users` → `profiles`: one-to-one.
-   `profiles` → `students`: zero-or-one student profile in the initial
    model; keep the relationship flexible if future family accounts
    require a different model.
-   `students` ↔ `guardians`: many-to-many through `student_guardians`,
    reserved for future use.
-   `students` → `enrollments`: one-to-many.
-   `courses` → `enrollments`: one-to-many.
-   `courses` → `course_levels`: one-to-many if levels are
    course-specific.
-   `enrollments` → `class_sessions`: one-to-many.
-   `class_sessions` → `attendance_records`: one-to-many, with one
    record per student/session.
-   `students` → `payment_records`: one-to-many.
-   `learning_materials` → `material_assignments`: one-to-many.
-   `students` → `material_assignments`: one-to-many.
-   `students` → `certificates`: one-to-many.
-   `profiles` → administrative records: referenced through the relevant
    `created_by`, `recorded_by`, or `issued_by` fields.

## 16. Constraints, indexes, and data integrity

At minimum, review and implement the following where applicable:

-   Primary keys on all application tables.
-   Foreign keys for all relationships.
-   `NOT NULL` on required fields.
-   `CHECK` constraints for valid date ranges, positive amounts, valid
    session durations, and controlled values where appropriate.
-   Unique constraint on
    `attendance_records(class_session_id, student_id)`.
-   Unique constraint on `student_guardians(student_id, guardian_id)`.
-   Appropriate uniqueness for profile-to-student association and course
    enrolment.
-   Index foreign-key columns and fields commonly used in filters,
    joins, and admin searches.
-   Index session start times, student IDs, enrolment IDs, payment
    dates/statuses, and lead creation/status fields where query patterns
    justify them.
-   Avoid redundant indexes and unnecessary denormalised copies.
-   Use pagination for admin lists.
-   Use transactions for multi-step operations that must succeed or fail
    together.

Use database constraints as the final integrity boundary; frontend
validation alone is insufficient.

## 17. Migrations, environments, and backups

-   Store schema changes in version-controlled Supabase migrations.
-   Apply migrations to development/staging before production.
-   Do not edit production schema manually without recording the
    corresponding migration.
-   Review destructive changes carefully and plan data migration before
    dropping or renaming columns/tables.
-   Keep development and production credentials separate.
-   Confirm Supabase plan backup capabilities, retention, and recovery
    process before production.
-   Test restoration rather than assuming a backup is usable.

## 18. Implementation order

Follow `docs/implementation-plan.md`. For the immediate MVP, use this
delivery order:

1.  **Public lead submission:** validate and securely save trial
    enquiries.
2.  **Admin authentication and lead management:** establish the
    protected admin account and allow the admin to review and update
    leads.
3.  **Student records and account provisioning:** create student
    records, invite students through a trusted admin-only process, and
    link each authenticated identity to the correct student.
4.  **Course enrolment:** record the student's active course/enrolment
    so access to materials and class sessions can be checked.
5.  **Learning materials:** allow the admin to upload private materials,
    assign them to the intended student/enrolment, and allow that
    student to access only their assigned files.
6.  **Class scheduling and secure Zoom joining:** allow the admin to
    schedule sessions and allow an authorised student to retrieve the
    meeting link only through the protected server-side join operation
    and only inside the approved join window.
7.  **End-to-end security testing and deployment:** verify the public
    form, admin permissions, student isolation, private file access,
    class schedule visibility, and Zoom join restrictions before launch.

After the MVP is stable, add the deferred features in separately
approved phases: attendance, in-app payment records, announcements,
certificates/exam results, guardian accounts, and advanced reporting.

This is a dependency guide, not permission to implement multiple phases
together. Each implementation task must remain limited to its approved
scope and must be reviewed before proceeding.

## 19. Decisions still requiring confirmation

Resolve these when the corresponding feature is designed:

-   Exact student profile fields and which are mandatory.
-   Whether date of birth is required and the data-retention policy.
-   Whether guardian contact details are stored directly at first or
    through guardian tables.
-   Whether course levels are shared or course-specific.
-   Exact meaning of "four classes per section/month" and how monthly
    lesson entitlement is represented.
-   Whether class sessions are always one-to-one and how recurring
    schedules are represented.
-   Teacher time zone and exact scheduling workflow.
-   Attendance status values and correction process.
-   Exact fees, currency rules, payment-period definitions, and
    refund/correction process.
-   Whether materials are assigned per student or per enrolment; file
    types, limits, and retention.
-   Whether announcements are global or targeted.
-   Certificate criteria, templates, numbering, and revocation process.
-   Whether examination results need a table.
-   Audit-log events and retention.
-   Data retention, deletion, export, and account offboarding rules.

Do not silently resolve these questions in code. Record the approved
decision in the relevant documentation before implementation.

## 20. Relationship to security

This document defines what data exists and how records relate.
`docs/security.md` defines who may read, create, update, or delete that
data and how access is enforced.

Every table containing student, guardian, lead, payment, attendance,
certificate, or private material information must have an explicit RLS
and backend-access plan before it is exposed to the application. A table
is not secure merely because its name or route is hidden.
