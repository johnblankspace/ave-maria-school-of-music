# Architecture — Ave Maria School of Music

**Document:** `docs/architecture.md`  
**Status:** Working architecture baseline; implementation details must be verified against the repository before use.

## 1. Purpose

This document describes the intended technical structure of the Ave Maria School of Music website and its later student/admin application. It translates confirmed requirements into architectural guidance; it does not claim that planned services or features are already implemented.

For business rules, see `docs/requirements.md`. For visual rules, see `docs/design-system.md`. For sequencing, see `docs/implementation-plan.md`.

## 2. Architecture principles

1. Deliver the public website first; introduce authenticated features in later phases.
2. Keep the initial solution understandable and maintainable for one teacher managing approximately 50 students.
3. Use the existing JavaScript/JSX stack and avoid unnecessary dependencies.
4. Separate public content and enquiry capture from protected student and administrator operations.
5. Enforce authorization at the backend/database boundary, not just in React.
6. Keep secrets out of client-side code.
7. Make future family/guardian relationships possible without implementing family accounts in the first release.
8. Document open decisions instead of inventing technical or business rules.

## 3. Intended technology stack

| Concern | Intended technology | Status / note |
|---|---|---|
| UI | React + JavaScript/JSX | Current project stack |
| Development/build | Vite | Current project stack |
| Styling | Tailwind CSS v4 | Current project stack; use existing configuration |
| Routing | React Router DOM | Installed/intended |
| Form state | React Hook Form | Installed/intended |
| Validation | Zod | Installed/intended |
| Icons | Lucide React | Installed/intended |
| Auth/database/storage | Supabase | Planned backend |
| Online lessons | Zoom | School's planned class platform |
| Contact | WhatsApp | Confirmed contact channel |
| Hosting | Not decided | Hostinger is the domain provider; it is not a confirmed application host |

Do not switch to TypeScript, Firebase, Next.js, or a different styling system without an explicit approved decision.

## 4. High-level system boundaries

### 4.1 Public website

Publicly accessible content should include the approved homepage sections and course/about/process/FAQ/certification information, plus the single shared inquiry/free-trial form.

The public site may display only content approved for publication. It must not expose student records, private learning materials, Zoom credentials, administrative data, or secrets.

### 4.2 Enquiry processing

The public site has exactly one shared inquiry/free-trial form immediately before the homepage footer; Contact navigation and every trial CTA point to this same form. The public form captures an enquiry. In the initial static/public phase, do not pretend that a form is securely stored if no backend has been connected. When connected, submission must be validated and stored through a trusted service with appropriate spam protection and error handling.

The planned admin workflow is to review a lead, contact the student/parent over WhatsApp, arrange a trial, and update lead status. The exact WhatsApp notification mechanism and final lead statuses remain open.

### 4.3 Authentication and protected application

Supabase Auth is the planned authentication provider. Student account creation is initiated by the admin after the student chooses to continue and one month's tuition is collected in advance. The student/parent receives an activation link by email and creates a password. An expired link requires contacting the admin for a replacement; the link expiry duration is not yet decided.

Google sign-in is proposed/optional, not a confirmed requirement.

### 4.4 Student portal

Later student-facing capabilities may include upcoming class details, secure class joining, attendance, payment history, assigned learning materials, issued certificates, and announcements.

Students must be restricted to their own authorised records. The parent/guardian submitting an enquiry is not automatically a separate authenticated role.

### 4.5 Admin application

The later admin dashboard is intended to manage leads, students, courses/levels, class schedules, attendance, manual payment records, materials, announcements, and certificate issuance. Do not add extra staff roles or complex permissions until requirements are approved.

## 5. Suggested frontend structure

Adapt this structure to the repository rather than moving or rewriting existing files without inspection.

```text
src/
  app/
    App.jsx
    router.jsx
  assets/
  components/
    layout/
    navigation/
    ui/
    forms/
  features/
    home/
    courses/
    about/
    process/
    testimonials/
    faq/
    inquiry/
    auth/              # later phase
    student/           # later phase
    admin/             # later phase
  hooks/
  lib/
    supabaseClient.js  # only if/when configured
  styles/
    index.css
  utils/
  main.jsx
```

Guidelines:
- Keep components cohesive and avoid creating abstractions before repeated use justifies them.
- Separate reusable layout/UI components from page-specific sections.
- Keep form schema and validation logic easy to locate.
- Avoid placing secret-dependent operations in browser code.
- Keep the single inquiry form as one source of truth; CTA links should target it rather than create duplicate forms.

## 6. Routing principles

Use React Router DOM if consistent with the existing app. Exact public URL slugs must be checked against the approved sitemap and implementation before finalising.

Likely public information areas include Home, Courses, About, Our Process, Certification, FAQ, and the shared inquiry anchor. These names describe information architecture, not a mandate to create every route as a separate page. The source requirements include a Courses dropdown and a single homepage contact form.

The Login entry point may lead to the login interface when that phase is ready. Do not build nonfunctional or misleading login controls in the public release; agree on the interim behaviour if authentication is not yet available.

Private student/admin routes must require authentication and server/database authorisation. Hiding a route or redirecting in React is not a security boundary.

## 7. Supabase data and access design

The final schema is not approved yet. Before implementation, map the requirements to a reviewed schema. Potential conceptual entities include:

- `profiles` or equivalent user profile records
- `students`
- `guardians`/contact relationships if needed
- `leads`
- `courses` and admin-managed levels/stages
- `class_sessions`
- `attendance_records`
- `payment_records`
- `learning_materials` and student/material assignments
- `announcements`
- `certificates`
- `exam_results`, if exam recording is implemented

These are design candidates, not a final table list. Avoid duplicating authentication data unnecessarily. Keep student identity separate from the account used to sign in so future family accounts remain feasible.

### 7.1 Security requirements

- Enable and test Row Level Security for tables containing private information.
- Define access rules by verified user identity and role/relationship.
- Students may read only their own authorised attendance, payments, class details, assigned materials, announcements, and issued certificates.
- Admin writes and privileged operations must require verified administrative authorization.
- Never ship a Supabase service-role key to the browser.
- Use signed/temporary URLs or equivalent controlled access for private files when appropriate.
- Do not store public Zoom meeting links or credentials in public page bundles.
- Protect the lead endpoint from spam and abusive submissions.
- Minimise access to data about minors.

### 7.2 Server-side operations

Any operation requiring privileged credentials, protected class-link release, role changes, invitation management, or privileged data updates must run in a trusted backend context (for example, an appropriately secured Supabase Edge Function or another approved server-side service). Select the specific implementation after checking requirements, platform constraints, and deployment.

The Join Class button activates five minutes before the scheduled start. The backend must independently verify the authenticated user, student/session relationship, and permitted time window before returning a private link. The cutoff after the scheduled start has not been specified; do not invent it.

## 8. Domain, hosting, and environments

- Domain: `avemariaschoolofmusic.com`
- Domain registrar/account provider: Hostinger.
- Frontend hosting provider: unresolved.
- DNS, SSL, production build/deployment pipeline, and environment setup: unresolved.
- Supabase project/environment details: verify actual setup before configuration.

Keep local development, preview/staging, and production settings distinct where available. Store public client configuration in environment variables as appropriate, but never treat a public client key as a substitute for database security. Keep service credentials in the trusted backend only.

Do not commit secrets or real student data. Confirm the repository's `.gitignore` and environment-file conventions.

## 9. External integrations

| Integration | Purpose | Architectural note |
|---|---|---|
| WhatsApp | Direct contact and admin follow-up | Floating link is confirmed; automated admin notification mechanism is unresolved |
| Zoom | Online classes | Private class link must be protected |
| Supabase | Planned auth, database, storage, backend operations | Apply least privilege and RLS |
| YouTube/video hosting | Tutor performance video or public channel | Exact source/file and performance strategy must be verified |
| Facebook | Public social presence | Use approved official profile URL |
| Payment gateway | None specified | Do not build an automated gateway by assumption |

## 10. Error handling and observability

- Give users understandable form submission, loading, empty, success, and error states.
- Do not show raw stack traces, database errors, secrets, or private identifiers to users.
- Log operational errors only where a logging mechanism exists and avoid recording unnecessary personal data.
- Do not report a successful write until the backend confirms it.
- Ensure failures retrieving private class links fail closed: do not reveal the link when authorization or timing checks fail.

## 11. Testing and verification

At minimum, verify:
- Public routes, navigation, and all CTAs.
- Exactly one inquiry form and correct anchor navigation.
- Responsive layouts at 375, 425, 768, 1024, and 1440 px.
- Form validation, server-confirmed submission state, and failure handling.
- RLS and authorization with both allowed and disallowed test users before protected features go live.
- Class-link access before and after the allowed window, once the full window policy is approved.
- Private storage and certificate access restrictions.
- Build and lint/test commands that actually exist in `package.json`.

Do not use real student personal information in test fixtures.

## 12. Open architecture decisions

Keep these unresolved until explicitly decided:
- Frontend hosting provider and deployment workflow.
- Final public route/slug map.
- Final Supabase schema and role model.
- Admin notification mechanism for new leads.
- Whether Google login is required.
- Activation-link expiry duration.
- Exact class-link cutoff after scheduled start.
- Private-file access strategy and storage organisation.
- Whether static rendering/prerendering is needed for SEO.
- Backup, retention, deletion, and offboarding policy.
