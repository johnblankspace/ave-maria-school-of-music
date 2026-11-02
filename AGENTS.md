# AGENTS.md — Ave Maria School of Music

## 1. Purpose and project context

Ave Maria School of Music offers one-to-one online Keyboard and Guitar lessons for children and adults. The project starts with a public marketing and lead-generation website and expands in later phases into a secure student portal and administrator dashboard.

The project is being developed incrementally in Google Antigravity. Work in small, reviewable steps. Do not build every planned feature at once.

## 2. Documentation hierarchy and source of truth

Before a task, read the relevant documents:

- `docs/requirements.md` — business requirements, scope, confirmed decisions, open questions, and acceptance criteria.
- `docs/architecture.md` — technical boundaries, application structure, data/security principles, and integration conventions.
- `docs/design-system.md` — brand tokens, typography, visual and responsive rules, and component conventions.
- `docs/implementation-plan.md` — delivery sequence, dependencies, and phase gates.
- `docs/seo.md` — public search-engine optimisation requirements.
- `README.md` — setup and project-specific run commands, when present.

Apply these rules in order:

1. Follow the latest explicit project-owner decision recorded in `docs/requirements.md`.
2. Treat a requirement marked Proposed or Unresolved as unapproved until the owner confirms it.
3. If documents conflict, do not silently choose one. Identify the conflict, explain the impact, and ask for a decision when it affects implementation.
4. Do not restore superseded wording from an older draft or source PDF.
5. Preserve existing requirement identifiers (`FR-001`–`FR-109`, `NFR-001`–`NFR-031`) when referring to the source baseline. Never reuse an identifier for a different requirement.
6. Documentation of a feature does not mean that feature is implemented.
7. When a requirement changes, identify every affected document and code area and propose the necessary updates.
8. If the exact implementation state is unknown, inspect the repository before making claims or changing files.

### Confirmed cross-document decisions

- The public homepage has exactly one shared inquiry/free-trial form, immediately before the footer. Contact navigation and all trial CTAs lead to the same form.
- Current core offerings are online Keyboard and Guitar lessons.
- The audience includes children and adults. Do not apply a blanket `age > 18` rule to student date of birth.
- Four classes per student per month; each class lasts 30–45 minutes.
- Makeup lessons are agreed directly between the tutor and student/parent, and the arrangement is updated in the dashboard. Do not invent cancellation or credit policies.
- If a student chooses to continue after the trial, the admin collects one month's tuition in advance, then creates/invites the student's account using the provided email.
- The student/parent activates the account using an email link and creates a password. If the link expires, they contact the admin for a replacement. The expiry duration is undecided.
- The “Join Class” button becomes active five minutes before the scheduled start. Protected class-link access must be enforced server-side.
- Beginner is the default student level; the admin controls level definitions and changes.
- Certificate issuance is controlled by the admin. Do not imply official Trinity College London certification, accreditation, or endorsement without verification.
- Student Performances is excluded from the initial public site.
- Use the approved tutor photograph in the About section for the first public release. Tutor video integration is deferred until a later phase is explicitly approved.
- The student portal and admin dashboard are later phases, not prerequisites for completing the first public release.
- The school WhatsApp number is `+91 83010 62755`.
- Domain registration is through Hostinger, but frontend hosting, DNS, and deployment are not yet decided.

## 3. Prompt, screenshot, and visual-reference interpretation

Before implementing a task, distinguish between the implementation instructions, visual references, and approved project requirements.

### Prompt interpretation

- Treat the latest user prompt as the primary definition of the current task's scope.
- Implement only the sections, components, features, or changes explicitly requested in that task.
- Do not interpret a request to implement one section as permission to rebuild the entire page or website.
- If the requested scope is unclear and could lead to a significant rewrite or architectural change, ask for clarification before proceeding.
- Do not assume that content visible in a reference screenshot is approved website content. Use `docs/requirements.md` and the latest explicit owner decisions to determine what content is permitted.

### Screenshot interpretation

- Treat supplied website screenshots as visual references unless the user explicitly states otherwise.
- A screenshot of an entire website provides overall design context, section order, visual hierarchy, colour relationships, typography, spacing, and layout references. It is not, by itself, an instruction to implement every visible section.
- A screenshot of a specific section should guide the implementation of that section when the task identifies it as the target.
- Do not automatically copy every visible heading, statistic, testimonial, image, button, section, or feature from a screenshot into the application.
- Do not treat a screenshot as proof that its content, business claims, or features are approved or factually accurate.
- Preserve the established design system while implementing the requested section. Do not redesign unrelated sections merely to match a reference screenshot.
- If a screenshot conflicts with confirmed requirements, the approved content, or the documented architecture, follow the project documentation and owner decisions. Report the conflict when it affects the result.
- If the intended target section or the relationship between the screenshot and the task is genuinely ambiguous, ask a concise clarification rather than guessing.

### Implementation boundaries

- Before editing, identify the requested outcome, target components, existing dependencies, and relevant acceptance criteria.
- Inspect existing code before creating new components. Reuse suitable components and preserve completed work.
- Do not recreate components, duplicate sections, introduce alternative folder structures, or replace existing implementations without a demonstrated need.
- Do not implement future-phase features merely because they appear in a screenshot or project reference.
- After implementation, report which requested sections were changed and identify any relevant visual details or content intentionally left unchanged.

### Incremental page implementation

- Treat the homepage's complete section order as a page-level specification, not as a single implementation task.
- Implement each homepage section as a separate, reviewable task, following `docs/implementation-plan.md`.
- Preserve previously completed and approved sections when implementing a new section.
- Do not implement multiple remaining homepage sections in one task unless the project owner explicitly approves that scope.
- Perform a final homepage integration review only after the individual sections have been implemented and reviewed.

## 4. Technology constraints

The current intended stack is:

- JavaScript and JSX (not TypeScript)
- React
- Vite
- Tailwind CSS v4
- React Router DOM
- React Hook Form
- Zod
- Supabase JavaScript client for planned authentication, database, storage, and secured backend operations
- Lucide React icons

Rules:

- Inspect `package.json` and existing configuration before assuming a dependency or script exists.
- Use JavaScript/JSX. Do not introduce TypeScript or migrate files to TypeScript without explicit approval.
- Keep the existing stack unless a concrete limitation is found and the owner approves a change.
- Follow the installed Tailwind CSS v4 configuration; do not copy v3-only setup instructions without verifying compatibility.
- Reuse installed packages where suitable. Do not add dependencies casually.
- Do not expose Supabase service-role keys, private credentials, Zoom secrets, or other secrets in client-side code or public environment variables.
- Never treat frontend routing, a hidden button, or client-side role checks as sufficient authorization.

## 5. Development workflow

For each task:

1. Read the relevant documentation and inspect the current implementation.
2. State the task's scope and identify dependencies or unresolved decisions.
3. Make the smallest coherent change that meets the approved requirement.
4. Follow existing naming, formatting, accessibility, and component patterns unless they are clearly defective.
5. Test the changed behaviour and relevant nearby behaviour.
6. Report changed files, checks performed, results, and known limitations.
7. Do not claim a test passed unless it was actually run and passed.

### Task completion and approval gate

- Implement only the current task. Do not start the next planned task automatically.
- After implementation, verify the result and report the changed files, checks performed, test results, and any known limitations.
- Stop after completing the current task and wait for the project owner's explicit approval before proceeding.
- Approval of one task does not automatically authorize implementation of the remaining homepage sections or the next phase.
- If the task cannot be completed as specified because of a conflict, missing information, or a technical limitation, explain the issue and ask for guidance rather than expanding the scope.

Do not combine unrelated features into a single large change. Do not remove existing assets, content, routes, or configuration without checking their purpose. Avoid unnecessary rewrites.

## 6. Scope and phase discipline

Follow `docs/implementation-plan.md`. The first release is the public website and its enquiry journey. Do not implement the entire student/admin platform while building the public pages.

Before implementing a later-phase feature, confirm that the preceding phase has met its acceptance criteria or explicitly record why work is proceeding out of sequence.

Do not create a payment gateway integration by assumption. The initial payment process is manual bank transfer with records managed by the admin, unless the owner approves a change.

Do not assume specialized/free courses are currently available. Clearly distinguish confirmed live lessons from future or availability-by-enquiry offerings.

## 7. Form and enrollment rules

- There must be one shared public inquiry/free-trial form, positioned immediately before the homepage footer.
- Contact navigation and all free-trial CTAs must navigate to that same form.
- Validate date of birth as a real, non-future date. Do not reject a student simply for being under 18.
- Do not invent minimum-age criteria, required-field rules, fees, or cancellation policies.
- Do not display a minimum age on the public website; the admin explains the school's criteria after enquiry.
- Do not claim an enquiry was saved or delivered unless the relevant service confirms success.
- Avoid fabricating testimonials, qualifications, student counts, country counts, or results.

## 8. Security and privacy

For authenticated functionality:

- Enforce permissions in the trusted backend and database policies.
- Apply and test Supabase Row Level Security (RLS) for private records.
- Students may access only their own permitted records and class links.
- Administrators may perform administrative operations only after verified authorization.
- Keep secrets on trusted server-side infrastructure.
- Minimise collection and exposure of personal data, particularly information about minors.
- Do not send permanent passwords through WhatsApp; use an invitation or password-setup link.
- Do not expose Zoom meeting credentials or private learning materials publicly.
- Treat parent/guardian contact and student identity as distinct concepts. A parent contact on a profile does not automatically grant access to a student account.
- Do not implement destructive data deletion or retention rules without an approved policy.

## 9. UI and accessibility

- Use the approved Poppins font and palette from `docs/design-system.md`.
- Preserve the supplied brand spelling and approved content.
- Support the documented responsive widths: 375 px, 425 px, 768 px, 1024 px, and 1440 px, plus sensible intermediate/wide layouts.
- Ensure keyboard navigation, visible focus, semantic HTML, form labels, meaningful button names, and sufficient contrast.
- Respect reduced-motion preferences. Do not make animated content the only way to understand information.
- Use the approved tutor photograph in the About section for the first public release. Defer tutor video integration until a later phase is explicitly approved. Do not add video-specific implementation or controls to the first release.
- Floating controls must not obscure form fields, navigation, or essential content.
- Follow `docs/design-system.md` rather than inventing new visual tokens for each page.

## 10. SEO and public content

- Follow `docs/seo.md` for public routes, titles, descriptions, canonical URLs, indexing, structured data, and technical checks.
- Do not expose private student/admin routes or records to search engines.
- Do not add fake reviews, fabricated structured data, unsupported qualifications, or unverified certification claims.
- The final public URL and hosting provider remain undecided until approved.

## 11. Definition of done

A task is complete only when:

- The change satisfies the relevant confirmed requirement.
- The implementation follows the architecture and design-system documents.
- Relevant responsive and accessibility behaviours have been checked.
- Appropriate tests/build/lint checks have been run where available.
- No known secrets or private data are exposed.
- Documentation is updated if the change affects requirements, architecture, design, SEO, or delivery sequencing.
- The final report honestly states what was and was not verified.
