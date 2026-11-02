# Implementation Plan — Ave Maria School of Music

**Document:** `docs/implementation-plan.md`  
**Status:** Proposed phased plan; adjust only after reviewing the current repository and confirming dependencies.

## 1. Goal

Build and verify the project in small stages, beginning with the public website and its single inquiry/free-trial form. Add lead management, authentication, admin tools, and the student portal only after the earlier phases are reviewed.

A feature being listed in this plan does not mean it is implemented.

### Task execution and approval boundaries

This plan defines the implementation sequence for the complete project. It does not authorise the implementation of every task in a phase at once.

Work on only one explicitly defined implementation task at a time. Each task must identify its scope, relevant requirements, dependencies, acceptance criteria, and exclusions.

After completing a task:

1. Verify the implemented changes against that task's acceptance criteria.
2. Run the relevant available project checks.
3. Report the files changed, checks performed, results, and unresolved issues.
4. Stop and wait for the project owner's review and approval.

Do not automatically proceed to the next task or implement additional sections, features, or phases without approval.

A phase may contain multiple tasks and can remain incomplete while individual tasks are reviewed and approved.

## 2. Technology constraints

Use the existing JavaScript/JSX, React, Vite, Tailwind CSS v4, React Router DOM, React Hook Form, Zod, Supabase client, and Lucide React stack. Do not introduce TypeScript, switch frameworks, or replace the styling/backend approach without an approved decision. Inspect the repository and `package.json` before assuming a dependency or script is available.

## 3. Working rules

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
11. Define each implementation task narrowly enough that its changes and acceptance criteria can be reviewed independently.
12. Make the smallest coherent change necessary to satisfy the current task; avoid unrelated refactoring, redesigns, file moves, and dependency changes.
13. Before coding, identify the specific section or component in scope and the files likely to be affected. Inspect the repository before assuming those files or components exist.
14. Do not interpret a phase heading, complete section list, or future requirement as permission to implement all listed features in one task.
15. After completing and verifying the current task, stop and wait for the project owner's explicit approval before starting another task.

## 4. Phase overview

| Phase | Goal | Main deliverables | Gate to continue |
|---|---|---|---|
| 0. Documentation and repository baseline | Make project instructions consistent and understand current setup | Six Markdown docs; repository/config review | Owner reviews docs; no unresolved contradiction blocks the next phase |
| 1. Public site foundation | Establish working React app shell and visual foundation | App shell and global styles, followed by separately scoped tasks for shared header, footer, and responsive navigation | App runs/builds; navigation and layout checked |
| 2. Public content pages/sections | Present the school's confirmed offerings and information | Individually implemented and reviewed homepage sections: hero, courses, About using the approved tutor photograph, process, approved testimonials, specialized previews, certification, and FAQ | Content accuracy and responsive behaviour reviewed |
| 3. Shared inquiry journey | Complete the single form and contact path | One form before footer, validation, Contact/CTA anchors, WhatsApp link | Exactly one form; validation/accessibility checked; backend status is represented honestly |
| 4. Public-site quality and launch | Prepare public site for release | SEO metadata, accessibility/performance checks, approved content, deployment | Hosting/domain/DNS decisions approved; production checks pass |
| 5. Lead backend and admin lead management | Save and manage enquiries securely | Supabase integration, lead records, admin lead view/status | RLS, validation, spam handling, and admin authorization tested |
| 6. Authentication and admin foundation | Enable account invitation and role-protected access | Supabase Auth, activation/recovery, protected admin area | Invitation/recovery flows and permissions tested |
| 7. Student/class operations | Manage students, levels, schedules, attendance, and payments | Student records, class sessions, attendance, manual payment records | Access policies and representative workflows tested |
| 8. Student portal | Give students access to their own permitted information | Dashboard, class joining, materials, certificates, announcements | Student isolation and class-link authorization tested |
| 9. Operational improvements | Add only approved later capabilities | Potential family accounts, digital courses, additional content controls | Scope, business rules, and technical design approved |

## 5. Phase 0 — Documentation and repository baseline

Tasks:
- Reconcile and maintain `docs/requirements.md` as the working baseline pending final owner approval.
- Maintain `AGENTS.md` so it contains no superseded form/enrollment rules.
- Cross-check and maintain `docs/architecture.md`, `docs/design-system.md`, `docs/implementation-plan.md`, and `docs/seo.md`.
- Inspect `package.json`, Vite/Tailwind configuration, routes, assets, environment files, and Git status.
- Confirm what already exists before creating duplicates.
- Identify any documentation claims that conflict with current code.

Acceptance criteria:
- All six documents agree on the one-form rule, class frequency/duration, enrollment workflow, age handling, class-link timing, certificate authority, stack, and phase boundaries.
- Existing code and assets are not removed or rewritten merely to match a proposed folder tree.
- Open questions are listed, not silently decided.

## 6. Phase 1 — Public site foundation

Tasks must be executed individually, in order, with review and approval between tasks.

1. Inspect the existing app entry point, `package.json`, scripts, routing setup, and current project structure. Report the findings without making unrelated code changes.
2. Establish or verify the global typography, palette tokens, and base styles using the existing project configuration.
3. Establish or verify the shared layout primitives needed by the public website.
4. Implement or review the shared header and navigation as a separate task.
5. Implement or review the shared footer as a separate task.
6. Verify the responsive behaviour of the shared layout and navigation.
7. Confirm that the existing route and anchor structure supports the approved homepage and the single inquiry/free-trial form.

Do not combine these tasks into one large implementation unless the project owner explicitly approves a change to the task scope.

Before each task, inspect the relevant existing files and identify the files expected to change. Preserve working code and avoid duplicating existing components.

Keep the initial phase free of incomplete student/admin backend features.

Acceptance criteria:
- App starts and builds using the repository's actual scripts.
- No horizontal overflow at 375, 425, 768, 1024, and 1440 px.
- Keyboard focus and mobile navigation work.
- Visual tokens come from `docs/design-system.md`.
- Each foundation task is verified and approved independently before the next task begins.

## 7. Phase 2 — Public content

Implement the following tasks in order. Each numbered item is a separate implementation task, not a batch of tasks to execute together.

### Task 2.1 — Hero section

Implement only the hero section and its approved content, layout, and CTA behaviour.

### Task 2.2 — Trust statistics

Implement the trust-statistics section using only verified and approved statistics. If the content is not approved or verified, do not invent replacements.

### Task 2.3 — Keyboard and Guitar courses

Implement the course section and its approved Keyboard and Guitar information.

### Task 2.4 — Tutor/About section

Implement the About section using the approved tutor photograph and verified tutor information. Do not implement the deferred performance video.

### Task 2.5 — Our Process section

Implement the section explaining the approved teaching process.

### Task 2.6 — Testimonials

Implement the testimonials section using genuine, approved testimonials or reviews. Do not fabricate testimonials.

### Task 2.7 — Specialized-course previews

Implement the specialized-course previews using accurate, approved availability wording.

### Task 2.8 — Certification information

Implement the certification information using approved content and accurate wording.

### Task 2.9 — FAQ section

Implement the FAQ section using approved questions and answers.

### Task 2.10 — Homepage integration review

Review the order and integration of the completed sections against `docs/requirements.md`. Make only the integration changes necessary to preserve the approved order and layout. Do not use this task as an opportunity to redesign or rewrite completed sections.

### Task execution rules

- Complete only the current task.
- Read the relevant requirements and design-system guidance before implementation.
- Inspect existing components, styles, and assets before creating or replacing files.
- Reuse appropriate existing components and design tokens.
- Do not implement the next task automatically.
- Verify the current section against its acceptance criteria and relevant responsive requirements.
- Check for regressions in affected shared components.
- Report the files changed, checks performed, results, and unresolved issues.
- Stop and wait for the project owner's approval before beginning the next task.

If a task depends on an unfinished shared component or an unresolved decision, identify the dependency and request clarification when necessary. Do not silently expand the task to include unrelated work.

Acceptance criteria:

- Each section satisfies its own approved content, layout, interaction, and accessibility requirements.
- Claims, course availability, tutor credentials, statistics, and testimonials are verified and approved.
- Student Performances does not appear in the initial public navigation or homepage.
- The About section uses the approved tutor photograph; the performance video is deferred from the first release.
- The homepage sections are integrated in the approved order.
- No CTA points to a duplicate form or dead destination.
- The current section is tested at the relevant supported viewport widths before its task is considered complete.
- Changes to shared components are checked for regressions in affected sections.
- Each task is reviewed and approved before the next task begins.
- Phase 2 is not considered complete until all its applicable acceptance criteria are satisfied.

## 8. Phase 3 — Single inquiry/free-trial form

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

## 9. Phase 4 — Public-site launch readiness

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

## 10. Phase 5 — Lead management

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

## 11. Phase 6 — Authentication and admin foundation

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

## 12. Phase 7 — Student and class operations

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

## 13. Phase 8 — Student portal

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

## 14. Phase 9 — Later enhancements

Possible candidates include family accounts, paid digital courses, additional admin content controls, and public student performances. These are not part of the first release and require explicit prioritisation and requirements before implementation.

## 15. Cross-phase verification checklist

For each relevant release:
- Build/test/lint commands are discovered from actual `package.json` scripts and run.
- No console errors or broken routes.
- Responsive widths 375, 425, 768, 1024, and 1440 px are checked.
- Keyboard navigation, visible focus, form labels/errors, contrast, and reduced motion are checked.
- Public claims and testimonials are approved.
- No secrets or student personal information are committed or exposed.
- Protected data is checked with both authorised and unauthorised test users.
- Documentation reflects the actual implementation and known limitations.

### Individual task verification

Before marking an implementation task complete, verify the following as applicable to its scope:

- The requested feature or section satisfies its own acceptance criteria.
- Only the approved scope has been implemented.
- Existing functionality and working code have been preserved.
- Responsive behaviour has been checked at the relevant supported viewport widths.
- Accessibility has been checked for the changed elements.
- Shared components and global styles have been regression-tested when affected.
- Existing routes, navigation, CTAs, and form behaviour remain intact unless an approved change was required.
- Available build, lint, and test commands relevant to the change have been run.
- Any failed checks, untested behaviour, and unresolved issues are clearly reported.
- The actual implementation and any changed decisions are reflected in the relevant documentation.

Do not require unfinished sections to be implemented merely to verify the current task.

A task may be complete even when the overall phase remains unfinished, provided that the task's acceptance criteria have been satisfied.

After reporting the result, stop and wait for the project owner's approval before starting another task.

## 16. Decisions that can block specific phases

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
