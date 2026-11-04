# Architecture --- Ave Maria School of Music

**Document:** `docs/architecture.md`\
**Status:** Working architecture baseline; implementation details must
be verified against the repository before use.

## 1. Purpose

This document describes the intended technical structure of the Ave
Maria School of Music public website and the operational MVP: secure
lead management, admin-controlled student accounts, student access,
learning materials, class scheduling, and secure Zoom joining. It
translates confirmed requirements into architectural guidance; it does
not claim that planned services or features are already implemented.

For business rules, see `docs/requirements.md`. For visual rules, see
`docs/design-system.md`. For sequencing, see
`docs/implementation-plan.md`.

## 2. Architecture principles

1.  Deliver the public website and the essential operational system as
    one MVP, in dependency-ordered phases.
2.  Keep the initial solution understandable and maintainable for one
    teacher managing approximately 50 students.
3.  Use the existing JavaScript/JSX stack and avoid unnecessary
    dependencies.
4.  Separate public content and enquiry capture from protected student
    and administrator operations, while treating both public enquiry
    handling and the core admin/student workflows as immediate MVP
    scope.
5.  Enforce authorization at the backend/database boundary, not just in
    React.
6.  Keep secrets out of client-side code.
7.  Make future family/guardian relationships possible without
    implementing family accounts in the first release.
8.  Document open decisions instead of inventing technical or business
    rules.
9.  Make the smallest coherent change necessary to satisfy the
    acceptance criteria of the current implementation task.
10. Avoid unrelated refactoring, dependency changes, file moves, and
    redesigns unless they are necessary for the current task and
    explicitly approved.
11. Implement one defined task at a time. After completing it, verify
    the changes, report the results, and wait for the project owner's
    approval before proceeding.

## 3. Intended technology stack

  -----------------------------------------------------------------------
  Concern                 Intended technology     Status / note
  ----------------------- ----------------------- -----------------------
  UI                      React + JavaScript/JSX  Current project stack

  Development/build       Vite                    Current project stack

  Styling                 Tailwind CSS v4         Current project stack;
                                                  use existing
                                                  configuration

  Routing                 React Router DOM        Installed/intended

  Form state              React Hook Form         Installed/intended

  Validation              Zod                     Installed/intended

  Icons                   Lucide React            Installed/intended

  Auth/database/storage   Supabase                Planned backend

  Online lessons          Zoom                    School's planned class
                                                  platform

  Contact                 WhatsApp                Confirmed contact
                                                  channel

  Hosting                 Not decided             Hostinger is the domain
                                                  provider; it is not a
                                                  confirmed application
                                                  host
  -----------------------------------------------------------------------

Do not switch to TypeScript, Firebase, Next.js, or a different styling
system without an explicit approved decision.

## 4. High-level system boundaries

### 4.1 Public website

Publicly accessible content should include the approved homepage
sections and course/about/process/FAQ/certification information, plus
the single shared inquiry/free-trial form.

The public site may display only content approved for publication. It
must not expose student records, private learning materials, Zoom
credentials, administrative data, or secrets.

### 4.2 Enquiry processing

The public site has exactly one shared inquiry/free-trial form
immediately before the homepage footer; Contact navigation and every
trial CTA point to this same form. The public form captures an enquiry.
In the initial static/public phase, do not pretend that a form is
securely stored if no backend has been connected. When connected,
submission must be validated and stored through a trusted service with
appropriate spam protection and error handling.

The planned admin workflow is to review a lead, contact the
student/parent over WhatsApp, arrange a trial, and update lead status.
The exact WhatsApp notification mechanism and final lead statuses remain
open.

### 4.3 Authentication and protected application

Supabase Auth is the planned authentication provider for the MVP. Public
student self-registration is prohibited. Admin access is provisioned
through a controlled administrative process; never create an
unrestricted public admin-signup route.

Student account creation is initiated by the admin after the student
chooses to continue and one month's tuition is collected in advance. The
student/parent receives an activation link by email and creates a
password. An expired link requires contacting the admin for a
replacement; the link expiry duration is not yet decided.

Google sign-in is proposed/optional, not a confirmed requirement. Do not
implement it as an approved requirement without owner confirmation.

Frontend route guards improve navigation but are not security
boundaries. Enforce roles, ownership, and access at Supabase Auth,
PostgreSQL RLS, Storage policies, and trusted server-side operations as
specified in `security.md`.

### 4.4 Student portal

The immediate MVP student area includes: - Authenticated student access
with no public self-registration. - Student-specific upcoming class
information. - Access to learning materials explicitly assigned to that
student (or the approved enrolment relationship defined by the
schema). - A Join Class action that retrieves the private Zoom link only
through the trusted server-side operation and only after authentication,
ownership, and timing checks.

Students must be restricted to their own authorised records. The
parent/guardian submitting an enquiry is not automatically a separate
authenticated role.

Attendance, payment history, announcements, certificates, exam results,
guardian accounts, and advanced reporting are deferred unless separately
approved. Do not build them as MVP dependencies.

### 4.5 Admin application

The immediate MVP admin dashboard manages: - Leads and their approved
status fields/actions. - Student records and admin-controlled account
provisioning. - Courses, course levels, and enrolments needed to control
access. - Private learning-material uploads and assignments. -
Class-session scheduling and the information needed for student-specific
upcoming-class views. - Secure Zoom link configuration/retrieval through
trusted server-side operations.

Attendance, payment records, announcements, certificates, exam results,
guardian accounts, and advanced reporting are deferred. Do not add extra
staff roles or complex permissions until requirements are approved.

## 4.6 MVP workflow and trust boundaries

The MVP is delivered as connected vertical workflows, not as isolated
static screens:

1.  **Lead workflow:** public form -\> trusted submission -\> `leads`
    record -\> authenticated admin review.
2.  **Student workflow:** admin verifies continuation/payment -\>
    creates student record and provisions Auth account -\> student
    activates account -\> student accesses only permitted records.
3.  **Learning-material workflow:** admin uploads to a private Storage
    bucket -\> creates metadata/assignment records -\> student retrieves
    only assigned material through authorised access.
4.  **Class workflow:** admin creates a class session -\> student sees
    their own upcoming session -\> student requests to join -\> trusted
    server-side operation checks identity, enrolment/session ownership,
    and allowed time window before returning the Zoom link.

Keep browser responsibilities separate from trusted responsibilities: -
Browser: rendering, input collection, client-side validation,
navigation, and displaying server-confirmed results. - Supabase
database/RLS: row-level data authorization and integrity constraints. -
Private Storage policies: object-level authorization for uploads and
downloads. - Trusted server-side functions: privileged provisioning,
secret-bearing integrations, and Zoom link authorization. - Never ship
service-role credentials, Zoom API secrets, or privileged tokens to the
browser.

The authoritative table names, relationships, buckets, policies, and
function requirements are in `docs/database-schema.md` and
`docs/security.md`. Do not create a competing schema in this
architecture document.

## 5. Suggested frontend structure

Adapt this structure to the repository rather than moving or rewriting
existing files without inspection.

### 5.1 Frontend organisation principles

Organise the frontend so that page composition, individual homepage
sections, shared UI components, layout components, and content data have
clear responsibilities.

-   **Pages:** Represent complete routes or page-level views and compose
    the components required by those views.
-   **Homepage sections:** Keep substantial homepage sections in
    separate components when doing so improves readability,
    maintainability, or independent implementation and testing.
-   **Shared layout components:** Place site-wide structural elements,
    such as the header, navigation, and footer, in the appropriate
    shared layout or navigation folders.
-   **Reusable UI components:** Keep genuinely reusable elements, such
    as buttons, badges, cards, and form controls, in the shared UI area
    when their reuse justifies it.
-   **Feature-specific components:** Keep components that serve only one
    feature or section within that feature's folder unless there is a
    clear reason to share them.
-   **Content data:** Separate repeated or structured content, such as
    course lists, FAQs, and testimonials, from rendering logic when it
    makes the implementation easier to maintain.
-   **Styles and assets:** Follow the existing styling conventions and
    asset organisation. Avoid creating duplicate styles, moving assets
    unnecessarily, or introducing another styling system.

Adapt these principles to the repository's actual structure. Inspect
existing files before creating new ones, and do not reorganise the
project solely to match this example.

src/ ├── app/ │ ├── App.jsx │ ├── router.jsx │ └── providers/ │ └──
AppProviders.jsx │ ├── assets/ │ ├── images/ │ ├── icons/ │ └── fonts/ │
├── components/ │ ├── layout/ │ │ ├── SiteHeader.jsx │ │ ├──
SiteFooter.jsx │ │ └── MainLayout.jsx │ │ │ ├── navigation/ │ │ └──
NavigationMenu.jsx │ │ │ ├── ui/ │ │ ├── Button.jsx │ │ ├──
Container.jsx │ │ ├── SectionHeading.jsx │ │ ├── Input.jsx │ │ ├──
Select.jsx │ │ ├── Textarea.jsx │ │ ├── Modal.jsx │ │ └── Spinner.jsx │
│ │ ├── forms/ │ │ └── FormField.jsx │ │ │ └── feedback/ │ ├──
ErrorMessage.jsx │ ├── SuccessMessage.jsx │ └── EmptyState.jsx │ ├──
features/ │ ├── home/ │ │ ├── pages/ │ │ │ └── HomePage.jsx │ │ ├──
components/ │ │ │ ├── HeroSection.jsx │ │ │ ├── TrustSection.jsx │ │ │
├── CoursesSection.jsx │ │ │ ├── AboutSection.jsx │ │ │ ├──
ProcessSection.jsx │ │ │ ├── TestimonialsSection.jsx │ │ │ ├──
SpecializedCoursesSection.jsx │ │ │ ├── CertificationSection.jsx │ │ │
└── FAQSection.jsx │ │ └── data/ │ │ └── homeContent.js │ │ │ ├──
courses/ │ │ ├── pages/ │ │ │ ├── CoursesPage.jsx │ │ │ ├──
KeyboardPage.jsx │ │ │ └── GuitarPage.jsx │ │ ├── components/ │ │ │ ├──
CourseCard.jsx │ │ │ └── CourseDetails.jsx │ │ └── data/ │ │ └──
courses.js │ │ │ ├── about/ │ │ ├── pages/ │ │ │ └── AboutPage.jsx │ │
└── components/ │ │ └── TutorProfile.jsx │ │ │ ├── process/ │ │ ├──
pages/ │ │ │ └── ProcessPage.jsx │ │ └── components/ │ │ │ ├──
testimonials/ │ │ ├── components/ │ │ └── data/ │ │ └── testimonials.js
│ │ │ ├── faq/ │ │ ├── pages/ │ │ │ └── FAQPage.jsx │ │ └── data/ │ │
└── faqs.js │ │ │ ├── inquiry/ │ │ ├── components/ │ │ │ └──
InquiryForm.jsx │ │ ├── schemas/ │ │ │ └── inquirySchema.js │ │ └──
services/ │ │ └── inquiryService.js │ │ │ ├── auth/ \# Later phase │ │
├── pages/ │ │ ├── components/ │ │ ├── schemas/ │ │ └── services/ │ │ │
├── student/ \# Later phase │ │ ├── pages/ │ │ ├── components/ │ │ └──
services/ │ │ │ └── admin/ \# Later phase │ ├── pages/ │ ├── components/
│ └── services/ │ ├── hooks/ │ ├── lib/ │ └── supabase/ │ └── client.js
\# Only if/when configured │ ├── config/ │ ├── site.js │ └──
navigation.js │ ├── constants/ │ ├── routes.js │ └── appConstants.js │
├── styles/ │ └── index.css │ ├── utils/ │ └── main.jsx

public/ ├── images/ │ ├── branding/ │ ├── home/ │ ├── courses/ │ └──
tutor/ ├── icons/ └── favicon.svg

supabase/ \# Add when backend development begins ├── migrations/ └──
functions/

tests/ \# Add when testing is introduced

### 5.2 Homepage composition

`HomePage.jsx` should assemble the homepage by importing and arranging
the required section components in the approved order.

It should not contain the complete implementation details of every
homepage section.

Responsibilities:

-   `HomePage.jsx` is responsible for the overall composition and order
    of homepage sections.
-   Each substantial homepage section should have its own component when
    separation improves maintainability or allows the section to be
    implemented and tested independently.
-   Shared elements, such as the header, navigation, and footer, should
    use the appropriate existing shared components.
-   Repeated content should use data-driven rendering where it improves
    clarity and avoids unnecessary duplication.
-   Section-specific content, interactions, and styling should remain
    with the relevant section or feature unless they genuinely belong in
    a shared component.

Do not create every possible component in advance. Build only the
components required for the current task and its approved dependencies.

When implementing a single homepage section, modify `HomePage.jsx` only
if necessary to integrate that section. Do not implement the remaining
sections as part of the same task.

Guidelines: - Keep components cohesive and avoid creating abstractions
before repeated use justifies them. - Separate reusable layout/UI
components from page-specific sections. - Keep form schema and
validation logic easy to locate. - Avoid placing secret-dependent
operations in browser code. - Keep the single inquiry form as one source
of truth; CTA links should target it rather than create duplicate forms.

### 5.3 Component creation and reuse

Create a separate component when it has a clear responsibility and
separation provides a practical benefit, such as easier maintenance,
independent testing, reuse, or a smaller parent component.

Use these guidelines:

-   **Section-specific components:** Keep components that are used only
    by one homepage section within that section's feature area when
    practical.
-   **Shared components:** Promote a component to the shared UI or
    layout area when it is genuinely reused or has a clear
    application-wide responsibility.
-   **Repeated UI patterns:** Consider extracting repeated markup into a
    reusable component when doing so reduces duplication without making
    the implementation harder to understand.
-   **Small elements:** Keep simple markup local to its parent component
    when extracting it would add unnecessary complexity.
-   **Component size:** Split components when they have too many
    unrelated responsibilities or become difficult to read, test, or
    maintain. Do not use an arbitrary line-count limit as the only
    reason to split a component.
-   **Existing components:** Reuse appropriate components before
    creating duplicates. If a shared component must change, check its
    existing usage and potential impact on other sections.
-   **Component scope:** Do not refactor unrelated components or
    introduce a new abstraction as part of a section task unless it is
    necessary to meet that task's acceptance criteria.

The objective is a clear, maintainable component structure---not the
maximum possible number of components.

## 6. Routing principles

Use React Router DOM if consistent with the existing app. Exact public
URL slugs must be checked against the approved sitemap and
implementation before finalising.

### Homepage section work and route stability

Implementing or modifying an individual homepage section must not
trigger unnecessary changes to the application's routing.

-   Preserve the existing routes, route configuration, navigation
    behaviour, and URL structure unless the current task explicitly
    requires an approved routing change.
-   Do not create a separate route for a homepage section merely because
    that section has its own React component.
-   Keep homepage sections within the homepage route unless the approved
    sitemap and requirements specify a separate page.
-   Do not modify `App.jsx`, `router.jsx`, or other routing files when
    the requested section can be implemented without changing them.
-   If routing changes are necessary, explain why they are required and
    identify the affected routes before making changes.
-   Verify existing navigation and relevant routes after any approved
    routing change.

A component is not automatically a page. Component organisation and
route organisation serve different purposes.

Likely public information areas include Home, Courses, About, Our
Process, Certification, FAQ, and the shared inquiry anchor. These names
describe information architecture, not a mandate to create every route
as a separate page. The source requirements include a Courses dropdown
and a single homepage contact form.

The Login entry point may lead to the login interface when that phase is
ready. Do not build nonfunctional or misleading login controls in the
public release; agree on the interim behaviour if authentication is not
yet available.

Private student/admin routes must require authentication and
server/database authorisation. Hiding a route or redirecting in React is
not a security boundary.

## 7. Supabase data and access design

The final schema is not approved yet. Before implementation, map the
requirements to a reviewed schema. Potential conceptual entities
include:

-   `profiles` or equivalent user profile records
-   `students`
-   `guardians`/contact relationships if needed
-   `leads`
-   `courses` and admin-managed levels/stages
-   `class_sessions`
-   `attendance_records`
-   `payment_records`
-   `learning_materials` and student/material assignments
-   `announcements`
-   `certificates`
-   `exam_results`, if exam recording is implemented

These are design candidates, not a final table list. Avoid duplicating
authentication data unnecessarily. Keep student identity separate from
the account used to sign in so future family accounts remain feasible.

### 7.1 Security requirements

-   Enable and test Row Level Security for tables containing private
    information.
-   Define access rules by verified user identity and role/relationship.
-   Students may read only their own authorised attendance, payments,
    class details, assigned materials, announcements, and issued
    certificates.
-   Admin writes and privileged operations must require verified
    administrative authorization.
-   Never ship a Supabase service-role key to the browser.
-   Use signed/temporary URLs or equivalent controlled access for
    private files when appropriate.
-   Do not store public Zoom meeting links or credentials in public page
    bundles.
-   Protect the lead endpoint from spam and abusive submissions.
-   Minimise access to data about minors.

### 7.2 Server-side operations

Any operation requiring privileged credentials, protected class-link
release, role changes, invitation management, or privileged data updates
must run in a trusted backend context (for example, an appropriately
secured Supabase Edge Function or another approved server-side service).
Select the specific implementation after checking requirements, platform
constraints, and deployment.

The Join Class button activates five minutes before the scheduled start.
The backend must independently verify the authenticated user,
student/session relationship, and permitted time window before returning
a private link. The cutoff after the scheduled start has not been
specified; do not invent it.

## 8. Domain, hosting, and environments

-   Domain: `avemariaschoolofmusic.com`
-   Domain registrar/account provider: Hostinger.
-   Frontend hosting provider: unresolved.
-   DNS, SSL, production build/deployment pipeline, and environment
    setup: unresolved.
-   Supabase project/environment details: verify actual setup before
    configuration.

Keep local development, preview/staging, and production settings
distinct where available. Store public client configuration in
environment variables as appropriate, but never treat a public client
key as a substitute for database security. Keep service credentials in
the trusted backend only.

Do not commit secrets or real student data. Confirm the repository's
`.gitignore` and environment-file conventions.

## 9. External integrations

  -----------------------------------------------------------------------
  Integration             Purpose                 Architectural note
  ----------------------- ----------------------- -----------------------
  WhatsApp                Direct contact and      Floating link is
                          admin follow-up         confirmed; automated
                                                  admin notification
                                                  mechanism is unresolved

  Zoom                    Online classes          Private class link must
                                                  be protected

  Supabase                Planned auth, database, Apply least privilege
                          storage, backend        and RLS
                          operations              

  YouTube/video hosting   Potential future tutor  Performance video is
                          performance video or    deferred from the first
                          public channel          release; reconsider
                                                  only after explicit
                                                  project-owner approval

  Facebook                Public social presence  Use approved official
                                                  profile URL

  Payment gateway         None specified          Do not build an
                                                  automated gateway by
                                                  assumption
  -----------------------------------------------------------------------

## 10. Error handling and observability

-   Give users understandable form submission, loading, empty, success,
    and error states.
-   Do not show raw stack traces, database errors, secrets, or private
    identifiers to users.
-   Log operational errors only where a logging mechanism exists and
    avoid recording unnecessary personal data.
-   Do not report a successful write until the backend confirms it.
-   Ensure failures retrieving private class links fail closed: do not
    reveal the link when authorization or timing checks fail.

## 11. Testing and verification

At minimum, verify: - Public routes, navigation, and all CTAs. - Exactly
one inquiry form and correct anchor navigation. - Responsive layouts at
375, 425, 768, 1024, and 1440 px. - Form validation, server-confirmed
submission state, and failure handling. - RLS and authorization with
both allowed and disallowed test users before protected features go
live. - Class-link access before and after the allowed window, once the
full window policy is approved. - Private storage and certificate access
restrictions. - Build and lint/test commands that actually exist in
`package.json`.

### Task-level verification and regression checks

Verification must be appropriate to the scope of the current
implementation task. Do not require the entire application to be
complete before an individual task can be verified.

For each homepage section task:

1.  **Verify the requested section:** Check its required content,
    layout, interactions, and acceptance criteria against
    `docs/requirements.md` and the task definition.
2.  **Check responsive behaviour:** Test the relevant supported viewport
    widths, particularly those affected by the change.
3.  **Check accessibility:** Verify relevant semantic HTML, keyboard
    interaction, accessible names, alternative text, and focus
    behaviour.
4.  **Check shared dependencies:** If a shared component, global
    stylesheet, or common utility was changed, verify the affected
    existing sections and components that depend on it.
5.  **Check regression risk:** Confirm that unrelated homepage sections,
    navigation, routes, forms, and shared functionality have not been
    unintentionally changed.
6.  **Run appropriate project checks:** Use the build, lint, and test
    commands that actually exist in `package.json`. Report commands that
    cannot be run and explain why.
7.  **Report the result:** Summarise the implemented changes, files
    modified, checks performed, failures, and unresolved issues.

Do not claim that a test passed unless it was actually run and passed.

If the task changes only an isolated section and does not affect shared
functionality, do not expand the scope into unnecessary testing or
refactoring of unrelated features.

If a change to a shared component causes a regression, fix the
regression within the approved scope or report the issue and request
approval if a broader change is needed.

After verification, stop and wait for the project owner's review and
approval before starting the next implementation task.

Do not use real student personal information in test fixtures.

## 12. Open architecture decisions

Keep these unresolved until explicitly decided: - Frontend hosting
provider and deployment workflow. - Final public route/slug map. - Final
Supabase schema and role model. - Admin notification mechanism for new
leads. - Whether Google login is required. - Activation-link expiry
duration. - Exact class-link cutoff after scheduled start. -
Private-file access strategy and storage organisation. - Whether static
rendering/prerendering is needed for SEO. - Backup, retention, deletion,
and offboarding policy.

## 13. MVP delivery boundary and deferred capabilities

The immediate MVP includes the public website and enquiry workflow,
protected admin lead management, admin-controlled student
records/account provisioning, required course/enrolment records, private
learning materials, class scheduling, student upcoming-class visibility,
and secure Zoom joining.

The following are not MVP blockers and remain deferred: attendance,
in-app payment records, announcements, certificates, exam results,
guardian accounts, advanced analytics/reports, and future paid
digital-course functionality.

The implementation order is defined only in
`docs/implementation-plan.md`. The requirements are defined only in
`docs/requirements.md`; database structure only in
`docs/database-schema.md`; security controls only in `docs/security.md`.

**Unresolved Zoom timing:** the five-minute-before-start activation is
confirmed. The permitted post-end cutoff is not confirmed. `security.md`
currently contains a 15-minute-after-end proposal that conflicts with
the unresolved requirement in `requirements.md`. Do not implement a
post-end cutoff until the owner resolves this conflict and the
authoritative documents are reconciled.

## 14. Document maintenance

When the approved scope changes, update this architecture only where the
system boundaries or technical responsibilities change. Do not duplicate
full business requirements, schema definitions, security policies, or
phase checklists here. Keep links and terminology aligned with the
authoritative documents.
