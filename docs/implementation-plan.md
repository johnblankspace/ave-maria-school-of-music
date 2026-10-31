# Implementation Plan — Ave Maria School of Music

**Document:** `docs/implementation-plan.md`  
**Status:** Proposed phased plan; adjust only after reviewing the current repository and confirming dependencies.

## 1. Goal

Build and verify the project in small stages, beginning with the public website and its single inquiry/free-trial form. Add lead management, authentication, admin tools, and the student portal only after the earlier phases are reviewed.

A feature being listed in this plan does not mean it is implemented.

## 2. Technology constraints

Use the existing JavaScript/JSX, React, Vite, Tailwind CSS v4, React Router DOM, React Hook Form, Zod, Supabase client, and Lucide React stack. Do not introduce TypeScript, switch frameworks, or replace the styling/backend approach without an approved decision. Inspect the repository and `package.json` before assuming a dependency or script is available.

## 2. Working rules

1. Work on one coherent feature or small group of related tasks at a time.
2. Read the requirements and relevant documentation before coding.
3. Check the current repository and preserve working code.
4. Implement only approved scope.
5. Test the change before moving to the next task.
6. Report files changed, checks run, results, and open issues.
7. Do not introduce unapproved business rules or dependencies.
8. Commit stable checkpoints using the repository's normal Git workflow.
9. Update documentation when a decision changes.
10. Do not store secrets or real student data in Git.

## 3. Phase overview

| Phase | Goal | Main deliverables | Gate to continue |
|---|---|---|---|
| 0. Documentation and repository baseline | Make project instructions consistent and understand current setup | Six Markdown docs; repository/config review | Owner reviews docs; no unresolved contradiction blocks the next phase |
| 1. Public site foundation | Establish working React app shell and visual foundation | App shell, global styles, shared header/footer, responsive navigation | App runs/builds; navigation and layout checked |
| 2. Public content pages/sections | Present the school's confirmed offerings and information | Hero, courses, About/video, process, approved testimonials, specialized previews, certification, FAQ | Content accuracy and responsive behaviour reviewed |
| 3. Shared inquiry journey | Complete the single form and contact path | One form before footer, validation, Contact/CTA anchors, WhatsApp link | Exactly one form; validation/accessibility checked; backend status is represented honestly |
| 4. Public-site quality and launch | Prepare public site for release | SEO metadata, accessibility/performance checks, approved content, deployment | Hosting/domain/DNS decisions approved; production checks pass |
| 5. Lead backend and admin lead management | Save and manage enquiries securely | Supabase integration, lead records, admin lead view/status | RLS, validation, spam handling, and admin authorization tested |
| 6. Authentication and admin foundation | Enable account invitation and role-protected access | Supabase Auth, activation/recovery, protected admin area | Invitation/recovery flows and permissions tested |
| 7. Student/class operations | Manage students, levels, schedules, attendance, and payments | Student records, class sessions, attendance, manual payment records | Access policies and representative workflows tested |
| 8. Student portal | Give students access to their own permitted information | Dashboard, class joining, materials, certificates, announcements | Student isolation and class-link authorization tested |
| 9. Operational improvements | Add only approved later capabilities | Potential family accounts, digital courses, additional content controls | Scope, business rules, and technical design approved |

## 4. Phase 0 — Documentation and repository baseline

Tasks:
- Replace the existing `docs/requirements.md` with the corrected working baseline.
- Update `AGENTS.md` so it contains no superseded form/enrollment rules.
- Create and cross-check `docs/architecture.md`, `docs/design-system.md`, `docs/implementation-plan.md`, and `docs/seo.md`.
- Inspect `package.json`, Vite/Tailwind configuration, routes, assets, environment files, and Git status.
- Confirm what already exists before creating duplicates.
- Identify any documentation claims that conflict with current code.

Acceptance criteria:
- All six documents agree on the one-form rule, class frequency/duration, enrollment workflow, age handling, class-link timing, certificate authority, stack, and phase boundaries.
- Existing code and assets are not removed or rewritten merely to match a proposed folder tree.
- Open questions are listed, not silently decided.

## 5. Phase 1 — Public site foundation

Tasks:
- Confirm the current app entry point and scripts.
- Establish global typography, palette tokens, layout primitives, and responsive behaviour.
- Build/review shared header, navigation, footer, and common button/link styles.
- Ensure route and anchor structure supports the approved content.
- Keep the initial phase free of incomplete student/admin backend features.

Acceptance criteria:
- App starts and builds using the repository's actual scripts.
- No horizontal overflow at 375, 425, 768, and 1024 px.
- Keyboard focus and mobile navigation work.
- Visual tokens come from `docs/design-system.md`.

## 6. Phase 2 — Public content

Implement in small batches:
1. Hero and primary/secondary CTAs.
2. Keyboard and Guitar course information.
3. Tutor/About section and video behaviour.
4. Our Process and genuine approved testimonials.
5. Specialized-course previews and accurate availability wording.
6. Certification information and FAQ.
7. Final content order and responsive polish.

Acceptance criteria:
- Claims, course availability, tutor credentials, statistics, and testimonials are verified and approved.
- Student Performances does not appear in the initial public navigation/homepage.
- Video has a fallback, muted inline autoplay request, looping, and sound control.
- No CTA points to a duplicate form or dead destination.

## 7. Phase 3 — Single inquiry/free-trial form

Tasks:
- Implement exactly one shared form immediately before the homepage footer.
- Make Contact navigation and every trial CTA lead to this same form.
- Use React Hook Form and Zod if compatible with the installed setup.
- Validate date of birth as valid and not in the future; do not apply a blanket over-18 rule.
- Include appropriate student and parent/guardian information.
- Add clear submitting, success, and error states.
- Connect submission to a backend only when the lead backend phase is approved and configured. Until then, do not claim durable submission.
- Add the confirmed WhatsApp contact `+91 83010 62755`.

Acceptance criteria:
- Exactly one inquiry/free-trial form exists.
- Contact and all trial CTAs resolve to it.
- Keyboard and screen-reader interaction is usable.
- No false success message is shown when submission fails.
- The minimum age is not published on the website.

## 8. Phase 4 — Public-site launch readiness

Tasks:
- Implement page-specific titles/descriptions, canonical URL strategy once the final domain/route map is approved, and relevant indexability rules.
- Review images, video loading, font loading, layout shift, and mobile performance.
- Check links, form state, accessibility, browser console, and production build.
- Confirm official social/profile URLs and approved content.
- Decide frontend host, DNS, SSL, environment variables, and deployment process before launch.

Acceptance criteria:
- Production build succeeds.
- Public pages have appropriate metadata and no accidental private information.
- Hosting/DNS decisions are explicitly approved and documented.
- Final production URL and canonical URL use the same approved host format.

## 9. Phase 5 — Lead management

Prerequisites:
- Public form behaviour and data fields are approved.
- Supabase environment and schema are reviewed.
- Admin access model and privacy needs are agreed.

Tasks:
- Create the lead schema and safe submission path.
- Validate submitted data on the trusted backend as well as the client.
- Add spam/abuse protection.
- Add protected admin lead review and status updates.
- Confirm final lead statuses and the WhatsApp notification mechanism.

Acceptance criteria:
- Valid leads persist only after backend confirmation.
- Invalid/abusive submissions are handled safely.
- Only authorised admins can read/update leads.
- RLS and backend authorization are tested.

## 10. Phase 6 — Authentication and admin foundation

Tasks:
- Configure Supabase Auth securely.
- Admin creates/invites a student account after the student chooses to continue and one month's tuition has been collected in advance.
- Send activation link by email; student/parent sets a password.
- If activation expires, the user contacts admin for a replacement link. Do not invent the expiry duration.
- Implement password recovery and protected admin access.
- Treat Google login as optional until approved.
- Ensure no permanent passwords are sent via WhatsApp.

Acceptance criteria:
- Invitation, activation, expired-link recovery path, and password recovery are verified.
- Unauthorized users cannot access protected admin data through direct requests.
- Roles are enforced in backend/database policies, not just React routes.

## 11. Phase 7 — Student and class operations

Tasks:
- Admin manages student records and levels; Beginner is the default unless admin changes it.
- Admin defines stage/level labels and updates student level/status.
- Manage schedules and class sessions.
- Support four classes per student per month, each 30–45 minutes.
- Record attendance and manual payment records.
- Record makeup arrangements agreed directly between tutor and student/parent.
- Keep student level, enrollment status, exam results, and certificate issuance separate.

Acceptance criteria:
- Admin operations are protected and validated.
- Students can access only their own authorised records.
- No automated payment gateway is assumed.
- Makeup/cancellation rules are not invented.

## 12. Phase 8 — Student portal

Tasks:
- Display relevant upcoming class information.
- Add Join Class button that activates five minutes before the scheduled start.
- Retrieve class link only after server-side authorization of user, session, and allowed time.
- Add attendance, payment history, assigned materials, issued certificates, and announcements as requirements are implemented.
- Restrict files and certificates to authorised users.
- Allow the admin to issue certificates based on approved criteria/decision.

Acceptance criteria:
- Unauthorized students cannot retrieve another student's class link or records.
- Link is not exposed in public bundles or public storage.
- Exact access cutoff after scheduled start is decided before implementation.
- Certificate claims do not imply official accreditation without verification.

## 13. Phase 9 — Later enhancements

Possible candidates include family accounts, paid digital courses, additional admin content controls, and public student performances. These are not part of the first release and require explicit prioritisation and requirements before implementation.

## 14. Cross-phase verification checklist

For each relevant release:
- Build/test/lint commands are discovered from actual `package.json` scripts and run.
- No console errors or broken routes.
- Responsive widths 375, 425, 768, 1024 px are checked.
- Keyboard navigation, visible focus, form labels/errors, contrast, and reduced motion are checked.
- Public claims and testimonials are approved.
- No secrets or student personal information are committed or exposed.
- Protected data is checked with both authorised and unauthorised test users.
- Documentation reflects the actual implementation and known limitations.

## 15. Decisions that can block specific phases

These do not all block public UI development. Resolve them when their phase needs them:
- Exact form required/optional fields and consent wording.
- Final lead statuses and allowed transitions.
- WhatsApp notification mechanism.
- Frontend hosting, DNS, SSL, deployment, and canonical domain format.
- Final Supabase schema and administrative role model.
- Activation-link expiry duration.
- Google login decision.
- Class-link access cutoff after the scheduled start.
- Certificate stage names, templates, and eligibility criteria.
- Data retention/deletion and account offboarding policy.
- Prerendering/static rendering decision for SEO.
