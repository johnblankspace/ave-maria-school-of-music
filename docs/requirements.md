# Ave Maria School of Music — Requirements Specification

**Document:** `docs/requirements.md`  
**Project:** Ave Maria School of Music  
**Status:** Updated working baseline pending final owner approval — aligned to the immediate operational MVP and latest confirmed decisions  
**Primary objective:** Deliver a public music-school website together with an operational MVP for secure lead management, admin-controlled student onboarding, private learning materials, class scheduling, and secure Zoom joining.

---

## 1. Purpose

This document defines the business goals, users, functional requirements, non-functional requirements, scope, exclusions, acceptance criteria, assumptions, and unresolved decisions for the Ave Maria School of Music website and application.

It is the requirements reference for development. Implementation details belong in `docs/architecture.md`, visual rules belong in `docs/design-system.md`, and delivery sequencing belongs in `docs/implementation-plan.md`.

### Implementation scope and task boundaries

This document defines the complete intended product, including confirmed requirements, future phases, exclusions, and unresolved decisions. Documenting a feature does not authorize its immediate implementation.

For each development task, use `docs/implementation-plan.md` to determine the current task, its scope, and its acceptance criteria. Implement only the features and changes assigned to that task.

Do not implement the entire homepage, all application features, or multiple future phases simply because they are described in this document. Complete the current task, verify it, report the results, and wait for approval before proceeding to the next task.

If the implementation plan conflicts with a confirmed business requirement, do not silently discard either instruction. Identify the conflict and request clarification before making a decision that changes the intended product.

### Requirement status definitions

| Status | Meaning |
|---|---|
| Confirmed | Established by the project owner or supported by an explicit project decision. |
| Proposed | A recommended approach that still requires approval where applicable. |
| Unresolved | Additional information or a decision is needed. |
| Deferred | Intentionally excluded from the current release and reserved for a later phase. |

A requirement being documented does not mean it has been implemented.

### Requirement ID preservation and audit status

The source requirements document defines functional requirements `FR-001` through `FR-109` and non-functional requirements `NFR-001` through `NFR-031`. This revised document was checked against that source and the latest decisions made by the project owner.

**Important:** this document consolidates requirements by feature area; it does not reproduce every original requirement as a separate numbered row. Keep the original IDs and their meanings when creating implementation tickets or tests. Do not assign an existing ID to a different requirement or silently renumber the baseline. Where this document explicitly resolves a conflict, the project owner's latest decision takes precedence over stale wording in the source document.

The main resolved conflict is `FR-055` versus the older, contradictory wording under `FR-058`: there must be **one shared inquiry/free-trial form**, placed immediately before the footer. Contact navigation and every trial CTA must lead to that same form. `FR-058` is retained as an identifier for the form/submission requirement, but its former implication that a separate second form is needed is superseded. The release-boundary conflict has also been resolved: the immediate MVP includes the operational capabilities listed in Section 4.1; it is not a public-website-only release.

This is a working baseline pending final owner approval, not evidence that any feature has been implemented. Open items are listed in Section 12.

---

## 2. Project Overview

Ave Maria School of Music provides online one-to-one keyboard and guitar lessons for children and adults.

The website and planned application serve three broad business purposes:

1. **Marketing and lead generation:** Introduce the school, explain its courses, establish trust, and attract prospective students.
2. **School administration:** Help the teacher manage enquiries, student profiles, classes, attendance, payments, and learning materials.
3. **Future expansion:** Support educational resources and potentially paid digital courses as the business grows.

The initial business model is based on live online music lessons, with flexible scheduling for students in India and overseas.

### 2.1 Business goals

The project must:

- Establish a credible online presence for Ave Maria School of Music.
- Present keyboard and guitar lessons clearly.
- Explain the teaching approach and relevant tutor experience using verified information.
- Attract prospective students, including families living overseas.
- Make it easy to request a free trial class.
- Provide a convenient WhatsApp contact option.
- Provide a secure operational system for managing leads, students, enrolments, learning materials, and scheduled classes.
- Keep the initial system practical for one teacher managing approximately 50 students, while allowing reasonable future growth.
- Avoid unnecessary complexity and keep deferred features outside the immediate MVP.

### 2.2 Target audience

The primary audience includes:

- Parents or guardians seeking music lessons for their children.
- Adults interested in learning keyboard or guitar.
- Students living in India.
- Overseas Indian families, particularly in Australia, the United Kingdom, and Gulf countries.
- Prospective students who prefer instruction in English or Malayalam.

The website must communicate the available lessons, learning approach, and enquiry process clearly to this audience.

### 2.3 Business model

The confirmed business model includes:

- One-to-one online keyboard and guitar lessons.
- Four classes per student per month (the source document calls this “four classes per section/month”).
- Each class lasts 30–45 minutes.
- Fees are collected in advance; before regular lessons begin, the admin collects one month's tuition.
- Flexible scheduling for overseas students.
- Makeup lessons are arranged directly between the tutor and student/parent. They agree on a suitable date, and the arrangement is updated in the student dashboard. No unapproved cancellation, expiry, or rescheduling policy may be invented.
- Manual bank transfers as the initial payment method.
- Students providing their own musical instrument.

The exact operational meaning of a lesson *section*, exact fee amounts, and internal payment-recording procedures remain to be confirmed where not already agreed.

### 2.4 Verified content requirement

Do not publish unverified claims about:

- Tutor qualifications or professional history.
- Specific schools where the tutor has taught.
- Student numbers or examination results.
- Testimonials or endorsements.
- Official recognition of certificates.
- Guaranteed learning outcomes.

The homepage may use the currently planned trust-statistic claims—15+ years of experience, 5+ countries, and 100+ students—only after the underlying figures have been verified and approved for publication.

---

## 3. Users and Access

| User | Primary needs | Intended access |
|---|---|---|
| Prospective student | Understand lessons and request a trial class. | Public website and trial form. |
| Parent or guardian | Explore lessons for a child and contact the teacher. | Public website and enquiry form; future student information only where appropriately authorised. |
| Adult student | Explore lessons and request a trial. | Public website; personal student area after enrolment and account setup. |
| Enrolled student | View upcoming classes and assigned learning materials; join authorised classes. | Authenticated student area in the immediate MVP. |
| Teacher/administrator | Manage enquiries, student records, enrolments, learning materials, and class schedules. | Protected admin area in the immediate MVP. |
| Future digital-course customer | Access purchased digital courses if this business model is introduced. | Deferred account and course functionality. |

### 3.1 Student and guardian distinction

The person submitting an enquiry may be a parent or guardian rather than the student.

The enquiry workflow must distinguish the student from the person responsible for contacting the teacher when the student is a minor.

A parent's contact details on a student profile must not automatically grant that parent permission to access the student's account.

A separate parent account or family-account system is deferred and is not required for the immediate MVP.

### 3.2 Administrative scale

The initial administrative model is one teacher managing up to approximately 50 students.

This is an initial operational scale, not a hard technical limit.

The system should avoid unnecessary complexity while allowing reasonable future growth.

---

## 4. Scope and Release Boundaries

### 4.1 Immediate MVP: Public website and operational application

#### Release scope and implementation boundaries

The immediate MVP includes the public website and the essential operational system needed to receive enquiries and manage active students and classes. It is not a public-website-only release.

The MVP must include:

**Public website and lead capture**
- Existing public website foundation, including the approved homepage content and course information.
- One shared trial-class/enquiry form, positioned immediately before the footer.
- Secure lead submission and storage.
- Validation and clear submission success/failure feedback.
- WhatsApp contact integration.

**Admin access and lead management**
- Secure admin authentication.
- Protected admin routes and data access.
- Admin lead list and lead-detail access.
- Admin ability to manage lead status and relevant lead records according to the approved workflow.

**Student onboarding and enrolment**
- Admin-controlled student records and account provisioning.
- Student authentication and account activation.
- No public student self-registration.
- Course and enrolment records required to associate students with their courses and authorize access.
- Payment is collected manually in advance outside the application; the admin confirms the required advance payment before provisioning a continuing student's account. In-app payment records are deferred.

**Learning materials**
- Admin upload of learning materials.
- Private storage for non-public materials.
- Assignment of materials to the appropriate student or enrolment.
- Authenticated student access to assigned materials only.

**Class scheduling and joining**
- Admin class scheduling and association of sessions with the correct enrolled student.
- Student dashboard showing the student's upcoming classes.
- Secure server-side authorization before returning a private Zoom link.
- The Join Class button becomes available five minutes before the scheduled start.
- The post-start/post-end access cutoff remains unresolved; do not invent it.

**Quality and release readiness**
- Functional, authorization, database-policy, and private-storage testing.
- Responsive and accessibility checks for the public website and application interfaces.
- Production configuration, deployment, and smoke testing after the hosting approach is approved.

The existing public website is the starting foundation. Additional marketing-page expansion, visual beautification, or optional content must not delay the operational MVP. Essential public form, responsive, accessibility, SEO, and production checks remain in scope.

#### MVP implementation boundaries

The immediate MVP does not automatically include every feature described elsewhere in this document. Implement according to `docs/implementation-plan.md`, one approved task at a time.

Do not include the following deferred capabilities in the MVP unless the project owner approves a scope change:
- Attendance recording and attendance history.
- In-app payment records and payment-history screens.
- Announcements.
- Digital certificate generation and issuance.
- Exam-result management.
- Guardian/family accounts and guardian-to-student account access.
- Advanced analytics and reporting.
- Paid digital-course purchases or a complete learning management system.
- Tutor performance video on the public website.

The MVP may retain manual business processes outside the application where explicitly stated, such as bank-transfer collection and direct tutor/parent coordination of makeup lessons.

Before starting a task, identify its release, scope, dependencies, and acceptance criteria. Do not add unrelated pages, integrations, or future-phase functionality without approval.

### 4.2 Deferred phase: Additional school administration

The following administrative capabilities are deferred beyond the immediate MVP:
- Attendance records and attendance corrections.
- In-app payment records and payment-history management.
- Announcements.
- Certificate management and issuance.
- Exam-result records.
- Advanced analytics and reports.
- Selected website content/settings management beyond what is essential to operate the MVP.

Do not implement these as MVP requirements merely because they are described in this specification.

### 4.3 Deferred student functionality

The immediate MVP student area includes:
- Secure login and password recovery.
- Student dashboard.
- Upcoming class information.
- Authorised class joining.
- Assigned learning materials and permitted downloads.

The following student-facing capabilities are deferred:
- Attendance history.
- Payment history.
- Certificates.
- Announcements.
- Guardian/family account features.
- Advanced progress reporting.

These features are planned, not implemented, and must not be treated as MVP acceptance requirements.

### 4.4 Future enhancements

The following are not part of the initial public-website release unless explicitly approved:

- Paid digital-course purchases.
- A complete online learning management system.
- Parent accounts linked to multiple students.
- Additional teachers and multiple administrator roles.
- Advanced student awards or badge systems.
- Complex automated payment processing.
- Additional functionality beyond the agreed requirements.

Free educational resources may be presented on the public website where their content and availability have been confirmed. A full resource-management system is a separate concern.

---

## 5. Public Website Requirements

### 5.1 Navigation

The public website must provide clear navigation to the agreed sections and pages.

The planned primary navigation is:

- Home.
- Courses, with a dropdown containing Keyboard, Guitar, Specialized Courses, and Certification.
- About.
- Our Process.
- Contact.
- Login.
- A prominent free trial-class call to action.

Certification is a single item in the Courses dropdown and does not require a nested submenu.

The public navigation must not include a Student Performances section.

The Login destination may lead to the authentication area when implemented. The presence of a login link does not mean the student portal is available in the first release.

**Acceptance criteria**

- Each implemented navigation item leads to its intended destination.
- Dropdown menus work with appropriate pointer and keyboard interaction.
- Navigation remains usable on mobile screens.
- The Contact item leads to the single trial-class booking form.
- Trial-booking calls to action use the same destination.
- Unimplemented routes are not presented as fully functional pages.

### 5.2 Homepage section order

The agreed homepage sequence is:

1. Header and navigation.
2. Hero section.
3. Trust statistics.
4. Courses.
5. Specialized-course previews.
6. Tutor/About section using the approved tutor photograph; the performance video is deferred.
7. Our Process.
8. Testimonials.
9.  FAQs
10. Single Free Trial Class Booking Form.
11. Footer.

#### Homepage implementation boundaries

The sequence above defines the complete intended homepage order. It does not require all sections to be implemented in one task.

Implement the homepage incrementally according to `docs/implementation-plan.md`. Each task must identify the specific section or component being implemented, its dependencies, and its acceptance criteria.

During an individual section task:

- Implement only the section and the supporting changes required for that task.
- Reuse existing shared components and design-system rules where appropriate.
- Do not implement the remaining homepage sections simply because they appear in the sequence above.
- Do not redesign or rewrite completed sections unless the current task requires it and the change is approved.
- Preserve the intended section order when assembling the completed homepage.
- Do not add the deferred tutor performance video to the first release. Use the approved tutor photograph instead.

The completed homepage must eventually contain all approved sections in the order listed above, subject to the release boundaries and confirmed project decisions.

The page must use consistent spacing, typography, colours, and component styles.

**Acceptance criteria**

- The sections appear in the agreed order.
- The trial form appears immediately before the footer.
- The homepage remains usable across the agreed responsive viewport widths.
- Content and controls do not overlap or create unintended horizontal scrolling.

#### Homepage section requirements and task definition

Each homepage section must have a clearly defined purpose, required content, interactions where applicable, and acceptance criteria.

The existing subsections in Section 5 define the requirements for the individual sections. Use those requirements when preparing the corresponding implementation task; do not copy the entire homepage specification into every task.

Before implementing a section, the task definition must identify:

1. **Task ID and section:** The specific section or component to implement.
2. **Purpose:** What the section must communicate or help the visitor accomplish.
3. **Required content:** The approved text, images, data, and other content that must be included.
4. **Interactions:** The required buttons, links, animations, forms, or other behaviour, if applicable.
5. **Dependencies:** Existing components, styles, assets, or functionality that the task relies on.
6. **Acceptance criteria:** The conditions that must be satisfied before the task is considered complete.
7. **Out of scope:** Sections, features, and files that must not be changed as part of the task, except where a necessary supporting change is approved.

The task definition must use the relevant requirements and acceptance criteria already documented in this file. Do not invent business content or create new requirements to fill gaps.

If required content, a dependency, or a business decision is unresolved, identify it before implementation. Ask for clarification when the unresolved item would materially affect the result.

A task may modify a shared component when necessary, but it must identify the reason and assess the impact on other sections that use that component.

Completing one section does not authorize implementation of the next section. Wait for the project owner's review and approval before proceeding.

### 5.3 Hero section

The hero section must introduce the school's online keyboard and guitar lessons and encourage visitors to request a free trial.

Confirmed content and behaviour:

- Banner text: **Live Keyboard & Guitar classes**.
- Main headline: **Learn Music from [rotating phrase]**.
- Rotating phrases: **Ave Maria**, **Arun Antony**, and **Anywhere**.
- Supporting text:

  > One-to-one online music lessons for children and adults, with flexible scheduling, English and Malayalam instruction, and guidance aligned with the Trinity College London syllabus.

- Primary CTA: **Book a Free Trial Class**.
- Secondary CTA: WhatsApp contact.

The rotating phrase uses a vertical slide/fade transition:

- The outgoing phrase moves upward and fades out.
- The incoming phrase enters from below and moves upward while fading in.
- Transition duration: 0.5 seconds.
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`.
- Hold duration: 2.5 seconds.

**Acceptance criteria**

- All three approved phrases appear in the rotation.
- The transition follows the specified direction and timing.
- The hero CTAs lead to their intended destinations.
- The animation does not prevent users from reading or using the page.
- Reduced-motion preferences are respected.

### 5.4 Trust statistics

The proposed trust-statistic content is:

- 15+ years of experience.
- 5+ countries.
- 100+ students.

These figures must be verified before publication.

**Acceptance criteria**

- Only approved, supportable figures are published.
- Statistics remain legible on mobile and desktop.
- The design does not imply unsupported guarantees or official endorsements.

### 5.5 Courses

The public website must present separate information for:

- Online Keyboard Classes.
- Online Guitar Classes.

The content should explain the relevant learning opportunities without inventing prices, guaranteed outcomes, or unconfirmed course details.

The website must also communicate that students are expected to have their own instrument. If students request help choosing an instrument, the teacher can provide details directly.

**Acceptance criteria**

- Keyboard and guitar information is distinguishable.
- Visitors can navigate to the relevant course information.
- The course content does not publish unconfirmed prices.
- The instrument requirement is communicated accurately where appropriate.

### 5.6 Tutor/About section

The About section must introduce tutor Arun Antony and communicate verified information about his teaching experience and background.

The first release must use the existing approved tutor photograph. The photograph must be displayed appropriately within the section and optimised for web delivery.

Remove any requirement specifying the "Trinity College London" badge/text below the tutor photograph in the hero section and the about section.

Do not invent tutor qualifications, employment history, achievements, or other professional claims. Publish only information that has been verified and approved.

#### Deferred performance video

The tutor's performance video is deferred and is not part of the first public-website release.

Do not implement video playback, autoplay, looping, custom video controls, or video-specific loading behaviour as part of the first release.

The video may be reconsidered in a future task after the project owner explicitly approves its inclusion. At that time, its playback behaviour, accessibility, fallback, performance, and production delivery requirements must be reviewed before implementation.

#### Acceptance criteria

- The About section introduces the tutor using approved content.
- The existing approved tutor photograph is used in the first release.
- The photograph has appropriate alternative text when it conveys meaningful information.
- The photograph is optimised and displayed correctly across supported viewport widths.
- Tutor qualifications and employment history are published only when verified.
- The deferred performance video is not implemented as part of the first release.

### 5.7 What We Offer and Our Process

The homepage must include the agreed What We Offer and Our Process sections.

These sections must explain the school's offerings and the general learning journey using confirmed information.

Do not invent lesson guarantees, operational procedures, or policies to fill content gaps.

**Acceptance criteria**

- Both sections are present.
- Their content matches confirmed school practices.
- The sections remain readable and usable across supported viewport widths.

### 5.8 Testimonials

The planned testimonial content includes these draft entries:

**Testimonial 1 — Great for Adult Beginners**

Attribution: Adult Piano Student; name not provided.

> I always wanted to learn piano, and I am glad I started here. The lessons are well structured, and the teacher is patient and encouraging. It is never too late to begin learning music!

**Testimonial 2 — Structured Music Education**

Attribution: Parent; name not provided.

> What I appreciate most is the systematic approach to teaching. Following the Trinity College London syllabus gives students a clear learning path, with opportunities to prepare for graded examinations and develop performance skills.

**Testimonial 3 — A Wonderful Place to Learn Music**

Attribution: Student; a possible name, “Nisha priyers,” was mentioned, but the spelling and attribution are unconfirmed.

> Ave Maria School of Music provides a positive and encouraging learning environment. I appreciate the teacher's dedication, regular guidance and commitment to helping students grow in their musical journey.

These are draft contents, not automatically verified endorsements.

**Acceptance criteria**

- No testimonial is presented as an authentic endorsement without confirmation and permission to publish it.
- Names and attributions are accurate and approved.
- The website does not invent ratings, review counts, or third-party endorsements.
- If permission or authenticity cannot be confirmed, the affected testimonial is withheld until resolved.

### 5.9 Specialized courses

The homepage must include previews of the planned specialized courses.

The previews must not display a "Coming Soon" badge.

When a visitor opens a specialized-course detail page that is not yet available, the page must clearly explain the availability status.

The final list of specialized courses remains to be confirmed.

**Acceptance criteria**

- The homepage contains the approved specialized-course previews.
- The previews do not use the prohibited "Coming Soon" badge.
- Unavailable detail pages do not mislead visitors into believing that enrolment is open.
- Course names and content are based on confirmed information.

### 5.10 Free courses and resources

Free educational resources are part of the broader project plan. Malayalam Holy Mass songs have been identified as a planned resource category.

The complete free-course list and launch content remain to be confirmed.

A complete resource-management or course-delivery system is not required for the first public-website release unless explicitly added to its approved scope.

**Acceptance criteria**

- Only resources that are approved and available are presented as accessible.
- Unavailable content is not represented as downloadable or playable.
- The website does not invent a complete course catalogue.

### 5.11 FAQs

The public website must provide an FAQ section using confirmed information.

Relevant confirmed points include:

- Lessons are online.
- Students must have their own instrument.
- The teacher can provide instrument-buying information directly when requested.
- Flexible time slots are offered for overseas students.

Published fees, unapproved cancellation/rescheduling policies, minimum student age, and other unresolved details must not be invented in FAQ answers.

**Acceptance criteria**

- Published answers reflect confirmed school policies.
- FAQ interactions are keyboard-accessible.
- Answers do not make unsupported promises.
- Unresolved questions are withheld or answered only after approval.

### 5.12 Footer

The footer must provide the agreed business identity and appropriate navigation and contact links.

Confirmed social/contact details include:

- WhatsApp: `+91 83010 62755`
- YouTube: `https://www.youtube.com/@avemariaschoolofmusic`
- Facebook: `https://www.facebook.com/share/1E1CTZ18Rc/?mibextid=wwXIfr`

Links must be checked before release.

A privacy policy and other legal pages may be required for production, but their exact content and publication status must be confirmed rather than invented.

**Acceptance criteria**

- Contact and social links lead to the intended destinations.
- Footer content is readable on mobile and desktop.
- No placeholder links are presented as working links.

---

## 6. Free Trial-Class Enquiry Requirements

### FR-055 — One shared inquiry/free-trial form (confirmed decision)

There must be exactly **one** public inquiry/free-trial form on the homepage, positioned immediately before the footer.

- The Contact navigation item scrolls/navigates to this form.
- All “Book a Free Trial Class” and equivalent trial CTAs point to this same form.
- Do not build a separate general contact form and a second trial booking form.
- The form supports both general enquiries and free-trial requests.
- `FR-053` (form placement), `FR-054` (Contact navigation), `FR-055` (single shared form), and `FR-058` (trial-form submission requirement) must be implemented consistently with this decision. The stale statement under `FR-058` that a separate form is required is superseded.

### 6.1 Form purpose and fields

The form collects enough information for the admin to identify and contact the prospective student or parent/guardian, understand the lesson enquiry, and arrange a trial class. The existing proposed field set is:

- Student name and date of birth.
- Parent/guardian name and contact details when applicable for a minor.
- WhatsApp/contact number including country code.
- Email address that may later be used for the student's account.
- Country and timezone.
- Preferred class time or availability.
- Instrument (Keyboard or Guitar).
- Current experience/level.
- Message or additional information.
- Appropriate consent.

Confirm final labels and which fields are required before implementation. Do not add a student-age minimum rule that excludes children.

### 6.2 Validation and submission

- Use React Hook Form and Zod for client-side form handling and validation.
- Reject invalid email/phone formats where validation rules are defined.
- Date of birth must not be in the future.
- Calculate age from date of birth when needed; do not rely on a manually entered age.
- The school serves children and adults. Do **not** apply an age-greater-than-18 validation rule to the student DOB.
- Guardian details are required when applicable to a minor, according to the final approved form rules.
- Show accessible success and error feedback.
- Do not claim a submission has been delivered or saved unless the backend confirms success.

### 6.3 Confirmed enquiry-to-enrollment workflow

1. **Student/parent submits the form.** They provide the student details, contact information, and the email address intended for the student account.
2. **Admin receives the lead.** The submission is securely stored and appears in the protected admin lead-management interface in the immediate MVP. An automated WhatsApp notification is not confirmed; the exact notification mechanism remains to be selected.
3. **Admin contacts the student/parent.** The admin uses WhatsApp to discuss the enquiry and arrange the free trial class.
4. **Student decides whether to continue.** If they choose to enroll, the admin collects advance payment equal to one month's tuition.
5. **Admin creates the student account.** The account uses the email address provided in the inquiry.
6. **Activation email is sent.** The student/parent receives an expiring account-activation link and uses it to create a password.
7. **Student accesses the dashboard.** Once activated and authorized, the student can access permitted dashboard information and their class link when the class-joining window opens.

If the activation link expires, the student/parent must contact the admin to request a new activation link. The expiry duration is not yet decided. Do not send permanent passwords over WhatsApp when an invitation or password-setup link can be used.

### 6.4 Lead management

Lead storage and protected admin dashboard management are part of the immediate MVP. Leads must be available only to authorized administrators. The proposed statuses are:

1. New Lead
2. Contacted
3. Trial Scheduled
4. Trial Completed
5. Converted to Student
6. Not Interested

These labels are proposed and must be confirmed before implementation. Do not assume a lead automatically becomes an enrolled student after a trial.

### 6.5 WhatsApp integration

- Use the supplied school contact number: **+91 83010 62755**.
- Provide a floating WhatsApp button that does not obstruct important content or controls.
- The admin uses WhatsApp to follow up on leads and coordinate trial classes.
- The exact automated notification mechanism is unresolved; do not assume WhatsApp Business API access or a paid messaging integration exists.

## 7. Student and Admin Application Requirements

This section defines the operational application requirements. Features explicitly marked MVP are required for the immediate MVP; features marked deferred are reserved for a later approved phase.

### 7.1 Authentication and account setup

The confirmed onboarding and account-provisioning flow is admin-managed:

1. **Inquiry and Trial:** The prospective student or parent/guardian submits the single shared inquiry form, providing student information and the email address intended for the student account. The admin contacts them on WhatsApp to arrange a free trial class.
2. **Advance Tuition Collection:** If the student chooses to continue after the trial, the admin collects one month's tuition in advance via manual bank transfer.
3. **Admin Invitation:** The administrator creates and invites the student account using the submitted email address.
4. **Account Activation:** The student/parent receives an expiring account-activation link by email and uses it to create their password.
5. **Expired-Link Recovery:** If the activation link expires before use, the student/parent must contact the admin to request a replacement link. The exact activation-link expiry duration remains undecided.

**Authentication rules and capabilities:**

- **Authentication method:** Secure email and password login.
- **Password recovery:** A secure process for setting, recovering, and resetting passwords.
- **No plaintext password distribution:** Do not distribute permanent passwords over WhatsApp or email; account setup and recovery must use secure invitation and reset links.
- **Backend authorization:** Role-based access control. Permissions for both students and administrators must be enforced strictly by backend authorization and database policies (such as Supabase Row Level Security), never solely by client-side routes or interface visibility.
- **Data model flexibility:** Children and adults may be students; do not equate “student” with an “adult account holder.” The data model must support student and guardian separation and accommodate future family/guardian relationships without requiring a structural redesign.
- **Google login status:** Google login was discussed as an optional preference; its inclusion in the first authenticated release remains proposed and unconfirmed.

**Acceptance criteria**

- Unauthenticated users cannot access protected application data.
- Users can access only the features authorised for their role.
- Administrative permissions are enforced beyond frontend visibility.
- Password setup and recovery follow the approved authentication design.
- Account creation and recovery do not expose credentials or private tokens.

### 7.2 Student dashboard

**Immediate MVP dashboard features:**

- Student profile information needed to identify the account and enrolled course.
- Overview of the student's upcoming classes.
- Authorised class-joining functionality.
- Assigned learning materials and permitted downloads.

**Deferred dashboard features:**

- Attendance history.
- Payment history.
- Certificates.
- Announcements.
- Advanced progress reporting.

The implementation plan defines the task order. Do not implement deferred dashboard features as part of the MVP.

**Acceptance criteria**

- Students can access only their own permitted records.
- Missing or unavailable information is presented clearly.
- Protected content is not exposed through public routes or unauthorised requests.

### 7.3 Class scheduling

**Confirmed regular class rules:**

- **Frequency:** Each enrolled student receives four regular classes per month (referred to as four classes per section/month in the source baseline).
- **Class duration:** Each regular class lasts 30–45 minutes.
- **Format:** One-to-one online classes with flexible scheduling agreed directly with the student or parent/guardian.
- **Time-zone handling:** The application must account for time zones so that classes scheduled for overseas students are displayed accurately in the student's local time.
- **Makeup lessons:** Makeup classes are arranged directly between the tutor and the student/parent. They agree on a suitable date and time, and the agreed arrangement is updated in the student dashboard.
- **Policy boundaries:** Do not invent cancellation fees, advance notice penalties, automatic credits, or a fixed makeup entitlement beyond the confirmed direct-arrangement model.

**Teacher scheduling capabilities:**

- The teacher/admin must be able to create and maintain class schedules, view sessions, and associate each session with the appropriate enrolled student. This scheduling capability is part of the immediate MVP.
- Conflicting class bookings must be prevented once the scheduling system is implemented.
- Scheduling rules must not contradict the teacher's confirmed availability.

**Unresolved scheduling items:**

- The duration of the initial free trial class and the exact booking workflow (whether the trial form records a request or confirms an appointment) remain to be confirmed (see OQ-05).
- The exact operational definition of a class “section” in records remains to be confirmed (see OQ-06).

**Acceptance criteria**

- Class records are associated with the correct student.
- Time-zone handling is consistent across overseas and domestic viewports.
- Conflicting class bookings are prevented when the scheduling system is implemented.
- Scheduling rules do not contradict the teacher's confirmed availability.

### 7.4 Class joining and Zoom

**Class-joining workflow and platform:**

- **Platform:** Zoom is the planned platform for online classes. Waiting-room and passcode protection should be used where supported by the school's Zoom configuration.
- **Location:** The private class link is accessible only through the authenticated student's dashboard; it must never be exposed as a public URL or in public page bundles.
- **Window activation:** The “Join Class” button becomes active **five minutes before the scheduled start time**.
- **Server-side authorization:** Class-link retrieval must be authorized on the trusted server/backend. The backend must independently verify the user's identity, confirm that the student is assigned to the scheduled session, and ensure the current time falls within the permitted window before releasing the meeting link. Disabling or hiding a client-side button is not a security boundary.
- **Isolation:** Only the authorized student assigned to a session may retrieve the class link. Students must never be able to access another student's meeting link.
- **Failure handling:** Requests that fail authorization or timing checks must fail closed and must not reveal private meeting IDs, passwords, or class URLs.
- **Unresolved window cutoff:** The end of the permitted access window (how long after the scheduled start or class end a student may access or re-enter the link) has not been specified (see OQ-08). Do not invent an after-start or after-end cutoff. The precise server-side implementation details remain to be finalised.

**Acceptance criteria**

- Unauthorised users cannot retrieve private class links.
- Zoom credentials and private meeting details are not embedded in public source code or public bundles.
- Class-link access follows an approved time window and server-side authorisation policy.
- Failure to authorise a request fails closed and does not reveal private class information.

### 7.5 Attendance — deferred

Attendance management is deferred beyond the immediate MVP.

When approved for a later phase:
- The teacher must be able to record attendance against the relevant class and student.
- Students may be able to view their own attendance history.
- Attendance records must be associated with the correct student and class.
- Administrative changes must be restricted to authorised users.
- Attendance information must be displayed accurately.

Do not create attendance workflows or require attendance tables for the immediate MVP unless a documented dependency is identified and approved. Attendance is not required merely to schedule a class or authorize Zoom joining.

### 7.6 Payments — manual collection in MVP; in-app records deferred

The confirmed initial payment model uses manual bank transfers, with one month's tuition collected in advance when a student decides to continue after the trial.

For the immediate MVP:
- Payment collection and confirmation may remain outside the application.
- The admin must confirm the required advance payment before provisioning a continuing student's account.
- Do not build an in-app payment ledger, payment-history screen, payment gateway, reconciliation workflow, or automated payment processing as an MVP requirement.

For a later approved phase, the system may maintain appropriate payment records and display them to authorised users. Such records must be associated with the correct student, distinguish confirmed payments from unconfirmed payments, and remain private.

Payment-gateway integration is not confirmed.

### 7.7 Study materials

The immediate MVP student area must provide access to learning materials assigned by the admin.

Materials may include audio files and other educational resources. The admin must be able to upload materials and assign them to the appropriate student or enrolment. The final assignment relationship remains unresolved (see OQ-18).

Private student materials must not be publicly accessible unless a particular resource is explicitly approved for public access.

**Acceptance criteria**

- Students can retrieve only materials they are authorised to access.
- Private files are protected by the approved access-control mechanism.
- Missing or unavailable files produce a useful message.
- Large media files are delivered in a way that avoids unnecessary performance problems.

File-size limits, allowed formats, retention rules, and the final storage configuration remain unresolved.

### 7.8 Student levels, examinations, and certificates

**Student levels — immediate MVP:**

- **Default starting level:** An enrolled student starts at the **Beginner** level unless the administrator explicitly assigns a different starting level.
- **Admin level management:** The administrator controls the available stage and level definitions and updates a student's level (for example, advancing a student from Beginner to Intermediate) based on instructional progress.

**Practical examinations — deferred:**

- The tutor/administrator may conduct practical examinations when pedagogically appropriate.
- Examination-result recording is deferred beyond the immediate MVP.

**Digital certificate issuance — deferred:**

- **Administrative control:** Certificate issuance is strictly controlled by the administrator. A certificate may be issued following stage completion, completion of an approved book or learning milestone, practical examination results, or an explicit administrative decision.
- **Access restriction:** Students can view and download only digital certificates that have been officially issued to their own account.
- **Entity separation:** Student level, enrolment status, examination results, and certificate issuance are distinct pieces of data and must be maintained separately; they must not be treated as interchangeable.
- **Trinity College London distinction:** The system, certificate templates, and public marketing content must strictly distinguish school-issued certificates from official Trinity College London certificates. Do not imply official Trinity College London certification, accreditation, syllabus endorsement, or examination authority unless the school verifies that claim and explicitly approves the exact wording.
- **Unresolved certificate details:** Specific certificate visual templates, unique certificate identifiers, exact stage/level names, completion criteria, and final certificate wording remain to be confirmed (see OQ-11).

**Acceptance criteria**

- Certificates are issued only according to approved rules and administrative authorization.
- Student and completion details on issued certificates are accurate.
- Certificates do not imply official recognition or accreditation that has not been confirmed.
- Certificate access and downloads are restricted to authorised students.

### 7.9 Announcements — deferred

Announcements are not part of the immediate MVP. In a later approved phase, the application may include announcements for students.

The administrator should be able to publish approved announcements, and students should be able to access announcements intended for them.

**Acceptance criteria**

- Only authorised administrators can create or manage announcements.
- Students see only announcements intended for their permitted audience.
- The interface clearly distinguishes available announcements from unavailable content.

### 7.10 Admin panel

**Immediate MVP admin capabilities:**

- Lead management.
- Student records and account provisioning.
- Course and enrolment management required for access control.
- Learning-material upload and assignment.
- Class scheduling and session management.

**Deferred admin capabilities:**

- Attendance management.
- In-app payment records.
- Certificate management.
- Exam-result management.
- Announcements.
- Advanced analytics and reports.
- Broader website content/settings management.

The initial admin model is one teacher/administrator.

The precise admin navigation, permissions, and content-editing boundaries remain to be defined in the architecture and implementation plan. All MVP admin actions must be enforced by backend authorization and must not rely only on hidden interface controls.

**Acceptance criteria**

- Administrative functionality requires appropriate authorisation.
- Administrative actions affect only the intended records.
- Student and lead records are not exposed to unauthorised users.
- The admin interface supports the school's initial operational scale without unnecessary complexity.

---

## 8. Non-Functional Requirements

These requirements describe the expected quality and behaviour of the application.

### 8.1 Responsive design

**Status:** Confirmed.

The public website must be mobile-first and usable across the agreed viewport widths:

- 375 px.
- 425 px.
- 768 px.
- 1024 px.
- 1440 px.

**Acceptance criteria**

- Essential content remains readable.
- Navigation and forms remain usable.
- No unintended horizontal overflow occurs.
- Images and media scale appropriately.
- Interactive controls remain accessible on smaller screens.

### 8.2 Accessibility

**Status:** Confirmed as a design and development requirement.

The application must consider:

- Semantic HTML.
- Logical heading structure.
- Accessible form labels and error messages.
- Keyboard navigation.
- Visible focus indicators.
- Sufficient colour contrast.
- Appropriate alternative text.
- Accessible interactive controls.
- Reduced-motion preferences.
- Accessible media controls and failure recovery when media features are approved for implementation.

**Acceptance criteria**

- Essential interactions can be completed with a keyboard.
- Form controls have accessible names.
- Validation errors can be identified and understood.
- Focus is visible when navigating interactively.
- Motion does not prevent access to essential content.

A specific formal conformance level has not been confirmed.

### 8.3 Performance

**Status:** Performance optimisation is required; numerical targets need approval.

The website should avoid unnecessary loading, excessive JavaScript, unoptimised media, and layout instability.

The tutor performance video is deferred from the immediate MVP. If it is approved for a future release, its optimisation and production delivery strategy must be reviewed before implementation.

**Acceptance criteria**

- Images are optimised for their intended display sizes.
- Large media is not downloaded unnecessarily.
- Layout space is reserved for significant media where practical.
- Public pages remain usable on mobile devices and slower connections.
- Performance is measured before declaring a numerical performance target achieved.

A mobile Lighthouse performance score of 90 or above has been discussed as a possible target, but it is not yet a confirmed release requirement.

### 8.4 Security and privacy

**Status:** Required; detailed implementation belongs in the architecture and security design.

The application must protect personal information and restrict access to private records.

Requirements include:

- Secure authentication for protected areas.
- Server-side authorisation for sensitive operations.
- Appropriate database access policies.
- Protection of private learning materials.
- Protection of class links and student information.
- No exposed service-role credentials or other server-only secrets in client code.
- Appropriate validation of untrusted input.
- Safe handling of errors and logs.
- Collection of only the information required for the agreed functionality.

**Acceptance criteria**

- Unauthenticated users cannot retrieve protected data.
- Students cannot retrieve another student's private records.
- Administrative operations require appropriate permissions.
- Private files are not accessible through unauthorised requests.
- Secrets are not committed to the repository or exposed in the browser bundle.

### 8.5 Maintainability

**Status:** Confirmed project objective.

The application must remain understandable and practical to maintain.

It must use the existing approved stack and follow the conventions established in `docs/architecture.md`.

**Acceptance criteria**

- Components have clear responsibilities.
- Shared functionality is reused where appropriate.
- Business rules are not unnecessarily duplicated.
- New dependencies are not added without a clear need.
- Changes can be verified using available project checks.

### 8.6 Scalability

**Status:** Future growth is a business goal; exact capacity targets are unresolved.

The application should support the initial teacher/student model while allowing reasonable future expansion.

The current estimate of up to 50 students must not be treated as a strict technical ceiling.

**Acceptance criteria**

- Data relationships support the agreed initial workflows.
- Student records are not tied to a single hard-coded user.
- Future expansion does not require avoidable architectural rework.
- Capacity claims are not made without evidence.

No specific concurrent-user, throughput, or availability target has been confirmed.

### 8.7 Browser compatibility

The website must work in current, commonly used desktop and mobile browsers.

**Acceptance criteria**

- Navigation, forms, and essential interactions work in the browsers selected for release testing.
- Browser-dependent features used by the implemented public website degrade gracefully.
- Unsupported browser features do not prevent visitors from accessing essential content.

The exact browser support matrix remains to be confirmed.

### 8.8 Reliability and error handling

The application must provide clear feedback when an operation succeeds, fails, or is still processing.

**Acceptance criteria**

- Failed form submissions are not reported as successful.
- Loading states do not remain stuck after a recoverable error.
- Users receive understandable messages.
- Technical details and secrets are not exposed in user-facing errors.
- Data-changing operations are protected against accidental repeated submission where appropriate.

### 8.9 SEO

**Status:** Required for public pages.

The public website must follow the requirements in `docs/seo.md`.

This includes appropriate page metadata, semantic headings, indexability controls, canonical URLs, sitemap and robots directives, image optimisation, internal links, and suitable structured data where justified.

Private student and admin areas must not be exposed through public search indexing.

**Acceptance criteria**

- Public pages have appropriate titles and descriptions.
- Intended public pages can be indexed.
- Private application routes are excluded from public indexing as appropriate.
- `noindex` and robots directives are not security controls; authentication, backend authorization, and database/storage policies must protect private routes and data.
- Canonical URLs are consistent with the approved production domain.
- Structured data is accurate and supported by visible page content.

### 8.10 Data integrity

**Status:** Required for forms and future school-management functionality.

Data must remain associated with the correct student, class, payment, attendance record, or lead.

**Acceptance criteria**

- Required relationships are maintained.
- Invalid input is rejected.
- Records cannot be modified by unauthorised users.
- Duplicate submissions and conflicting records are handled according to the approved business rules.

### 8.11 Testing and release verification

The application must be checked before release.

Relevant available project checks include:

- `npm run lint`
- `npm run build`

Browser testing, responsive testing, accessibility checks, and integration tests must be performed where relevant and available.

**Acceptance criteria**

- Relevant checks are run and their results recorded.
- Known failures are reported rather than concealed.
- A successful build is not represented as proof that every feature works.
- Production deployment is followed by appropriate smoke testing.

### 8.12 Deployment and configuration

The application must be deployed using an approved hosting and configuration approach.

The domain has been purchased through Hostinger, but the final hosting, DNS, and deployment arrangement must not be assumed to be configured.

**Acceptance criteria**

- Production configuration is separate from development configuration where necessary.
- Required environment variables are documented.
- Secrets are not exposed in client-side configuration.
- The production build succeeds.
- Essential public routes and enquiry interactions are checked after deployment.

---

## 9. Deferred Features and Exclusions

The following are excluded from the immediate MVP unless explicitly approved through change control:

- Attendance-management workflows and attendance history.
- In-app payment records, payment-history screens, payment reconciliation, and payment-gateway integration.
- Announcements within the authenticated portal.
- Digital certificate generation, issuance, and student certificate downloads.
- Exam-result recording.
- Parent/guardian accounts and family-account management.
- Advanced analytics and reports.
- Paid digital-course purchases.
- A full learning management system.
- Multi-teacher scheduling and complex organisational roles.
- Tutor performance video on the public website.
- Unapproved integrations or third-party services.
- Unverified marketing claims, testimonials, qualifications, or certificate-recognition claims.

These exclusions do not necessarily remove the features from the overall product roadmap. They define what must not be treated as an immediate MVP requirement.

The following are **not excluded** from the immediate MVP: secure lead submission and admin lead management, admin-controlled student provisioning, student authentication, course/enrolment records, private learning-material delivery, admin class scheduling, student upcoming-class visibility, and secure server-side Zoom joining.

## 10. Proposed Technical Decisions

The following decisions guide implementation but must not be confused with business requirements.

| Area | Current direction | Status |
|---|---|---|
| Frontend | Existing React application using JavaScript and Vite. | Confirmed existing stack. |
| Styling | Tailwind CSS v4. | Confirmed existing stack. |
| Routing | React Router DOM. | Installed; route implementation must be verified. |
| Forms | React Hook Form. | Installed; use where appropriate. |
| Validation | Zod. | Installed; use where appropriate. |
| Icons | Lucide React. | Installed; use where appropriate. |
| Backend | Supabase for planned authentication, database, and storage integration. | Proposed project direction; implementation and configuration must be verified. |
| Authentication | Email/password and password recovery; invitation-based account setup preferred. | Partly confirmed, partly proposed. |
| Database security | Server-side authorisation and appropriate Row Level Security policies. | Required security direction; exact policies belong in the architecture/security design. |
| Private materials | Private storage and authorised access. | Required outcome; exact configuration remains to be finalised. |
| Class access | Server-side authorisation before returning private Zoom links. | Required security direction; exact mechanism remains to be designed. |
| Video | Deferred from the first public-website release; the approved tutor photograph is used instead. | Deferred; reconsider only after explicit project-owner approval. |
| Deployment | Publish the public website using an approved production configuration. | Required outcome; hosting arrangement unresolved. |

Do not replace the existing stack or introduce additional libraries without a specific justification and approval.

---

## 11. Assumptions and Constraints

### 11.1 Confirmed constraints

- The school offers online keyboard and guitar lessons.
- Both children and adults are part of the target audience.
- Overseas students need flexible scheduling.
- Students must have their own musical instrument.
- The teacher can provide instrument-buying information directly when requested.
- The immediate MVP includes the public website and essential operational admin/student functionality.
- The Contact navigation item and trial-booking CTAs must lead to the single homepage trial form.
- The application uses the existing JavaScript/React/Vite/Tailwind stack.
- The About section uses the existing approved tutor photograph in the first release; the tutor performance video is deferred.
- The admin and student functionality required by Section 4.1 is part of the immediate MVP; attendance, in-app payment records, announcements, certificates, exam results, guardian accounts, and advanced reports are deferred.

### 11.2 Assumptions requiring confirmation

The following details must not be treated as established facts until confirmed:

- Whether the school has any minimum student age beyond serving children and adults; do not impose an 18+ rule.
- Guardian requirements and consent wording.
- Required versus optional enquiry fields.
- Trial-class duration and scheduling process.
- Fee amounts and published pricing.
- Exact meaning of a class section.
- Any formal cancellation or notice rules beyond direct tutor-parent arrangement.
- Lead-notification and follow-up workflow; lead storage and admin viewing are MVP requirements, but automated WhatsApp notification is unresolved.
- Exact student account invitation expiry duration and detailed recovery behaviour; admin-controlled provisioning and secure activation are required.
- Google login for the student portal.
- Class-link access cutoff after the confirmed five-minute-before-start activation; do not invent a post-start or post-end cutoff.
- Payment-recording and reconciliation procedures.
- Study-material file limits, formats, retention rules, and whether assignment is directly to a student or through an enrolment.
- Certificate issuance and completion criteria.
- Final specialised-course and free-course catalogues.
- Production hosting and video delivery.
- Required formal accessibility conformance level.
- Numerical performance and availability targets.

---

## 12. Open Questions

The following questions should be resolved when they become relevant to implementation.

| ID | Question | Why it matters | Needed before |
|---|---|---|---|
| OQ-01 | Does the school have any minimum student age beyond serving children and adults? | Determines any additional guardian-related validation and consent rules; do not impose a blanket 18+ rule. | Finalising trial form rules. |
| OQ-02 | Which fields are required, and what exact consent wording must be shown? | Determines validation and data collection. | Implementing the final trial form. |
| OQ-03 | How should the teacher be notified of a new enquiry? | Determines the lead-notification workflow. | Implementing backend submission and notifications. |
| OQ-04 | What are the exact lead statuses and permitted transitions? | Determines lead-management behaviour. | Implementing the admin lead workflow. |
| OQ-05 | What is the exact trial-class booking and confirmation process? | Determines whether the form records a request or confirms an appointment. | Implementing the enquiry workflow. |
| OQ-06 | What does one class section mean operationally? | Affects class and payment records. | Designing class and payment data. |
| OQ-07 | Are there any formal cancellation or notice rules beyond direct tutor-parent arrangement? | Affects scheduling and attendance workflows. | Implementing class management. |
| OQ-08 | What is the permitted Zoom-link access cutoff after the confirmed five-minute-before-start activation? | Determines when the server must stop releasing the class link; no after-start or after-end cutoff is approved yet. | Finalising secure class joining. |
| OQ-09 | Will Google login be included in the first authenticated release? | Affects authentication scope. | Finalising authentication. |
| OQ-10 | What are the study-material file limits, formats, and retention rules? | Affects storage and access policies. | Implementing material management. |
| OQ-11 | What qualifies a student to receive a certificate? | Prevents incorrect or misleading certificates. | Implementing certificate issuance. |
| OQ-12 | Which specialised and free courses will be available at launch? | Determines public content and navigation destinations. | Finalising course pages. |
| OQ-13 | Which hosting and video-delivery arrangement will be used in production? | Affects deployment, performance, and cost. | Production release. |
| OQ-14 | Is a light/dark theme required for launch, or is one theme sufficient? | Affects design and implementation scope. | Finalising the design system. |
| OQ-15 | What are the approved performance, browser-support, and accessibility targets? | Defines measurable release expectations. | Finalising quality criteria. |
| OQ-16 | Which privacy policy and other legal pages are required, and who approves their content? | Affects public launch readiness. | Production release. |
| OQ-17 | What is the approved production domain and canonical URL configuration? | Determines metadata and canonical URLs. | SEO configuration and deployment. |
| OQ-18 | Should learning materials be assigned directly to a student or to an enrolment? | Determines the material-assignment relationship and access checks. | Finalising material assignment and database implementation. |

Do not block unrelated work while an open question remains unresolved. Resolve each question before implementing the functionality that depends on it.

---

## 13. Immediate MVP Release Acceptance Criteria

### Task-level acceptance versus release-level acceptance

The criteria in this section determine whether the immediate MVP is ready for release. They are not requirements that every individual development task must satisfy independently.

Each implementation task must define its own acceptance criteria based on the relevant requirements in this document and the current phase in `docs/implementation-plan.md`.

For an individual task:
- Verify the required content and behaviour of the assigned feature.
- Check responsive behaviour and accessibility where relevant.
- Run the available project checks appropriate to the changes made.
- Verify that the task has not introduced unintended changes to unrelated functionality.
- Report completed work, files changed, checks performed, and unresolved issues.
- Do not claim that the entire MVP is complete when only one feature has been implemented.

A task may be considered complete when its own acceptance criteria are satisfied, even though other MVP tasks remain unfinished.

After completing a task, wait for the project owner's review and approval before starting the next task. Do not automatically proceed through the remaining implementation plan.

### Public website and enquiry

- The public website contains the approved essential content and navigation.
- Keyboard and guitar course information is available.
- Tutor information uses verified content and the approved tutor photograph.
- The deferred tutor performance video is not required for the MVP.
- Testimonials are published only after verification and permission.
- Specialized-course previews and availability messages follow the approved behaviour.
- Navigation and footer links work.
- Responsive layouts are usable at the agreed viewport widths.
- There is one shared trial-class/enquiry form on the homepage immediately before the footer.
- The Contact navigation item and every trial-booking CTA lead to that same form.
- No separate general contact form exists.
- Validation works for the approved fields and rules.
- Future dates of birth are rejected; no blanket over-18 rule is applied.
- Guardian-related behaviour follows the approved policy.
- Submission success and failure are communicated accurately.
- The form securely stores a lead record.

### Admin authentication and lead management

- Admin authentication is implemented and protected.
- Unauthenticated users cannot access admin routes or admin data.
- The admin can securely view submitted leads.
- The admin can manage lead information/status according to the approved lead workflow.
- Public users cannot list, read, update, or delete lead records.
- Automated WhatsApp notifications are not assumed unless separately approved and configured.

### Student records, accounts, courses, and enrolments

- Only an authorised admin can provision student accounts.
- Public student self-registration is not available.
- Students can activate accounts through the approved secure email flow and create their own password.
- The exact invitation expiry duration is not assumed.
- Student authentication and role-based authorization are enforced beyond frontend route visibility.
- Student records support children and adults without equating the student to an adult account holder.
- Course and enrolment records correctly associate students with permitted access.
- The admin confirms one month's advance tuition before provisioning a continuing student's account; payment collection may remain outside the application.
- Students can access only their own permitted account information.

### Learning materials

- Admins can upload approved learning materials to private storage.
- Materials can be assigned to the intended student or enrolment using the approved data model.
- Students can access only materials assigned to them.
- Unauthorised users cannot retrieve private files.
- Missing or unavailable files produce useful feedback.
- File limits, formats, and retention rules follow the decisions made before the relevant implementation.

### Class scheduling and Zoom joining

- Admins can create and manage class sessions for the correct enrolled students.
- Class records store appropriate start/end timestamps and support the school's time-zone requirements.
- Students can view their own upcoming classes.
- The Join Class action becomes available five minutes before the scheduled start.
- The server independently verifies identity, student-to-session assignment, and the approved access window before returning a private Zoom link.
- A student cannot retrieve another student's Zoom link.
- The after-start/after-end cutoff remains unresolved until the project owner approves it; the system must not invent a cutoff.
- Zoom meeting details and secrets are not exposed in public frontend code or unrestricted database responses.

### Quality, security, and deployment

- Relevant lint and production-build checks pass, or failures are explicitly reported.
- Essential public and authenticated workflows are tested in a browser.
- Role permissions and database Row Level Security are tested, including negative tests.
- Private Storage access is tested.
- Secure Zoom-link authorization is tested, including unauthorized and out-of-window requests once the access window is approved.
- Keyboard navigation, visible focus, and responsive behaviour are checked.
- No known secrets are exposed in client-side code or committed to the repository.
- Public content does not expose private student or lead information.
- SEO metadata and public/private indexing behaviour follow `docs/seo.md`.
- Production configuration and deployment are verified after the hosting approach is approved.
- Production smoke tests cover the public enquiry flow and the authenticated MVP workflows.

### Explicitly not required for MVP acceptance

The following are deferred and must not block MVP release:
- Attendance records and attendance history.
- In-app payment records and payment-history screens.
- Announcements.
- Certificates and exam-result management.
- Guardian/family accounts.
- Advanced analytics and reports.
- Paid digital-course purchases or a full LMS.

## 14. Requirements audit and traceability notes

This revision was checked against the source document containing `FR-001`–`FR-109` and `NFR-001`–`NFR-031`, the latest project-owner decisions, and the immediate MVP direction. The requirements remain grouped by feature area for readability; keep the source IDs when implementing and testing the corresponding items.

### Functional requirement coverage index

| Original IDs | Coverage in this document |
|---|---|
| `FR-001`–`FR-010` | Shared header/navigation, routes/anchors, CTA, footer, responsive navigation, login entry point |
| `FR-011`–`FR-020` | Hero copy/animation, trial and WhatsApp CTAs, supplied trust statistics |
| `FR-021`–`FR-031` | Keyboard/Guitar offerings, delivery format, audience, languages, syllabus wording, instrument requirement, flexible schedules, four classes/month, makeup arrangements, pricing enquiry |
| `FR-032`–`FR-036` | Specialized-course preview and future free-course content; do not advertise unavailable offerings as currently available |
| `FR-037`–`FR-043` | Tutor/About content and embedded video behaviour |
| `FR-044`–`FR-047` | Our Process and genuine, approved testimonials/reviews |
| `FR-048`–`FR-049` | Student Performances excluded from the initial public site; future addition remains possible |
| `FR-050`–`FR-051` | Certification page and careful distinction between syllabus alignment and official certification |
| `FR-052` | FAQ |
| `FR-053`–`FR-058` | One shared homepage inquiry/free-trial form, form placement, Contact navigation, WhatsApp button/number; stale separate-form wording under `FR-058` is superseded |
| `FR-059`–`FR-065` | Student/guardian details, DOB and age calculation, contact details, form validation; no blanket over-18 rule for students |
| `FR-066`–`FR-067` | Secure lead storage and admin lead/status management in the immediate MVP (final labels/transitions need confirmation) |
| `FR-068`–`FR-074` | Admin authentication, invite-only student account provisioning, student login/recovery, role separation, optional unconfirmed Google login, no permanent password sharing, future family-account compatibility |
| `FR-075`–`FR-081` | Student dashboard, upcoming classes, protected class joining, and assigned learning materials are immediate MVP; attendance, in-app payments, and certificates are deferred |
| `FR-082`–`FR-109` | Includes student/course/enrolment administration, class scheduling, learning-material management, and other admin/dashboard capabilities. Class scheduling and materials are immediate MVP; attendance, payment records, announcements, certificates, exam results, and advanced reports are deferred. Use the original source requirement wording when assigning implementation tickets; do not infer an unlisted feature from this summary. |

### Non-functional requirement coverage index

The source contains `NFR-001`–`NFR-031`. Their coverage is consolidated under Section 8 by topic: responsive design, accessibility, performance, security and privacy, maintainability, scalability, browser compatibility, reliability/error handling, SEO, data integrity, testing/release verification, and deployment/configuration. Preserve the original NFR IDs and exact acceptance conditions when writing tests or implementation tickets; this summary does not replace the original row-by-row wording.

### Key conflict resolutions

| Topic | Final treatment |
|---|---|
| One form vs separate forms | One shared form only, immediately before the footer; Contact and all trial CTAs point to it. |
| Student age | Children and adults are eligible audiences. Do not apply an over-18 validation rule to student DOB. Minimum-age criteria are explained privately by the admin after enquiry. |
| Class frequency and duration | Four classes per student per month; 30–45 minutes per class. |
| Makeup classes | Tutor and student/parent agree directly on a suitable date; dashboard arrangement is updated. No additional policy invented. |
| Enrollment | Admin follows up on WhatsApp; if student chooses to continue, one month's tuition is collected in advance before account setup. |
| Account activation | Admin creates/invites the account; activation link is emailed; if expired, student/parent contacts admin for a new link. Expiry duration remains open. |
| Level and certificate | Beginner is the starting level; admin controls levels and certificate issuance. Level, enrollment status, exam results, and certificate status are distinct. |
| Class joining | Join button activates five minutes before scheduled start; backend authorization is mandatory. The post-start/post-end cutoff is unresolved. |
| Tutor qualifications | Describe syllabus alignment accurately; do not claim official Trinity certification/accreditation without verification. |
| Hosting | Hostinger is the domain registrar/account provider; frontend hosting and DNS/deployment choices remain undecided. |

## 15. Change Control

Changes to confirmed requirements must be deliberate.

When a requirement changes:

1. Identify the existing requirement and its ID.
2. Record the reason for the change.
3. Update the requirement without unnecessarily changing its ID.
4. Review related acceptance criteria.
5. Identify any affected architecture, design-system, SEO, or implementation-plan decisions.
6. Ensure deferred features remain deferred unless explicitly brought into scope.

For FR-055, the confirmed rule remains: **one homepage Free Trial Class Booking Form, immediately before the footer, shared by the Contact navigation item and all trial-booking CTAs.**

---

## 16. Remaining Baseline Limitation

This document captures the available confirmed project decisions and identifies unresolved details without treating them as approved requirements.

The original functional and non-functional requirement IDs have been retained in the traceability index. Before this draft becomes the final requirements baseline, the project owner should complete a final review of the original row-by-row requirement wording and approve the remaining open decisions. Do not silently renumber or repurpose existing IDs.

**Document status:** Updated working baseline pending final owner approval; not yet confirmed as the final approved requirements baseline.

---

## 17. Revision Notes — Immediate MVP Alignment

This revision changes the release strategy from a public-website-only first release followed by later admin/student functionality to an immediate operational MVP.

Main changes:
1. Section 4.1 now defines the immediate MVP as the public website plus lead management, admin authentication, admin-controlled student provisioning, student authentication, course/enrolment records, private learning materials, class scheduling, and secure Zoom joining.
2. Sections 4.2 and 4.3 now identify attendance, in-app payment records, announcements, certificates, exam results, guardian accounts, and advanced reports as deferred.
3. Section 6 now treats secure lead storage and protected admin lead management as immediate MVP functionality.
4. Section 7 now distinguishes MVP functionality from deferred student/admin capabilities.
5. Section 8 removes first-release video requirements because the tutor performance video is deferred.
6. Section 9 and Section 13 now describe deferred features as non-blocking for MVP acceptance and add operational workflow acceptance criteria.
7. Section 11 updates the confirmed implementation direction from public website first to public website plus essential operational functionality.
8. Section 12 adds the unresolved material-assignment relationship and clarifies the unresolved Zoom access cutoff.
9. The one shared enquiry/free-trial form, advance payment before continuing-student account provisioning, admin-only account provisioning, child/adult student support, and five-minute-before-start Zoom activation remain unchanged.

This revision does not claim that any feature has been implemented. It defines the approved target scope for subsequent development.
