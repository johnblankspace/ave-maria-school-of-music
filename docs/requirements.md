# Ave Maria School of Music — Requirements Specification

**Document:** `docs/requirements.md`  
**Project:** Ave Maria School of Music  
**Status:** Corrected working baseline — audited against the source requirements and latest owner decisions  
**Primary objective:** Launch a public website that attracts prospective students and generates free trial-class enquiries, followed by the phased development of student and administrative functionality.

---

## 1. Purpose

This document defines the business goals, users, functional requirements, non-functional requirements, scope, exclusions, acceptance criteria, assumptions, and unresolved decisions for the Ave Maria School of Music website and application.

It is the requirements reference for development. Implementation details belong in `docs/architecture.md`, visual rules belong in `docs/design-system.md`, and delivery sequencing belongs in `docs/implementation-plan.md`.

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

The main resolved conflict is `FR-055` versus the older, contradictory wording under `FR-058`: there must be **one shared inquiry/free-trial form**, placed immediately before the footer. Contact navigation and every trial CTA must lead to that same form. `FR-058` is retained as an identifier for the form/submission requirement, but its former implication that a separate second form is needed is superseded.

This is a corrected working baseline, not evidence that any feature has been implemented. Open items are listed in Section 12.

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
- Support a future transition from manual school administration to a secure student and admin application.
- Avoid unnecessary complexity in the first release.

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

The exact meaning of a lesson *section*, makeup-class rules, fees, and payment-recording procedures remain to be confirmed where not already agreed.

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
| Enrolled student | View class information, attendance, payments, materials, and announcements. | Authenticated student area in a later phase. |
| Teacher/administrator | Manage enquiries, students, schedules, attendance, payments, materials, and relevant site content. | Protected admin area in a later phase. |
| Future digital-course customer | Access purchased digital courses if this business model is introduced. | Deferred account and course functionality. |

### 3.1 Student and guardian distinction

The person submitting an enquiry may be a parent or guardian rather than the student.

The enquiry workflow must distinguish the student from the person responsible for contacting the teacher when the student is a minor.

A parent's contact details on a student profile must not automatically grant that parent permission to access the student's account.

A separate parent account or family-account system is not confirmed for the first release.

### 3.2 Administrative scale

The initial administrative model is one teacher managing up to approximately 50 students.

This is an initial operational scale, not a hard technical limit.

The system should avoid unnecessary complexity while allowing reasonable future growth.

---

## 4. Scope and Release Boundaries

### 4.1 First release: Public website

The first release focuses on the public website and trial-class enquiry journey.

It includes:

- Public homepage and navigation.
- Keyboard and guitar course information.
- Tutor/about content.
- The tutor's performance video.
- Information about the teaching process.
- What We Offer content.
- Testimonials, subject to verification and publication permission.
- Specialized-course previews.
- FAQs.
- One free trial-class booking form.
- WhatsApp contact integration.
- Footer and relevant social links.
- Responsive layouts and accessibility.
- Public-page SEO requirements.
- Production hosting and deployment, after the hosting and deployment approach is confirmed.

The first release must not depend on the complete student portal or admin panel being available.

### 4.2 Later phase: School administration

Planned administrative capabilities include:

- Administrator authentication.
- Lead management.
- Student profiles.
- Course and enrolment management.
- Class scheduling.
- Attendance records.
- Payment records.
- Learning-material management.
- Announcements.
- Certificate management.
- Selected website content and settings management.

The exact release boundary between the admin panel and student dashboard will be defined in `docs/implementation-plan.md`.

### 4.3 Later phase: Student area

Planned student functionality includes:

- Secure login and password recovery.
- Student dashboard.
- Upcoming class information.
- Authorised class joining.
- Attendance history.
- Payment history.
- Study materials.
- Certificates.
- Announcements.
- Student profile management.

These features are planned, not implemented.

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
5. Tutor/About section, including the performance video.
6. What We Offer.
7. Our Process.
8. Testimonials.
9. Specialized-course previews.
10. FAQs.
11. Single Free Trial Class Booking Form.
12. Footer.

The page must use consistent spacing, typography, colours, and component styles.

**Acceptance criteria**

- The sections appear in the agreed order.
- The trial form appears immediately before the footer.
- The homepage remains usable across the agreed responsive viewport widths.
- Content and controls do not overlap or create unintended horizontal scrolling.

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

The section must include the tutor's performance video.

The video must feel integrated into the About section rather than presented as a conventional embedded video player.

Confirmed video requirements:

- Muted autoplay where supported by the browser.
- Inline playback on mobile devices.
- Looping playback.
- An accessible custom mute/unmute control.
- A suitable poster image or fallback.
- No standard video controls during normal playback, while retaining an accessible recovery mechanism if playback fails.

Autoplay cannot be guaranteed on every browser, device, or network. The experience must remain usable when autoplay is blocked.

The video asset must be optimised and its production delivery approach evaluated before deployment.

**Acceptance criteria**

- The video is presented as part of the About section.
- The user can control sound using an accessible control.
- The page provides a meaningful fallback when video playback fails.
- The video does not make the page unnecessarily slow.
- Tutor qualifications and employment history are published only when verified.

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

Fees, makeup-class rules, minimum student age, and other unresolved policies must not be invented in FAQ answers.

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
2. **Admin receives the lead.** The submission appears in the admin dashboard when that feature is implemented, and the admin receives a WhatsApp notification. The exact notification mechanism remains to be selected.
3. **Admin contacts the student/parent.** The admin uses WhatsApp to discuss the enquiry and arrange the free trial class.
4. **Student decides whether to continue.** If they choose to enroll, the admin collects advance payment equal to one month's tuition.
5. **Admin creates the student account.** The account uses the email address provided in the inquiry.
6. **Activation email is sent.** The student/parent receives an expiring account-activation link and uses it to create a password.
7. **Student accesses the dashboard.** Once activated and authorized, the student can access permitted dashboard information and their class link when the class-joining window opens.

If the activation link expires, the student/parent must contact the admin to request a new activation link. The expiry duration is not yet decided. Do not send permanent passwords over WhatsApp when an invitation or password-setup link can be used.

### 6.4 Lead management

Lead storage and dashboard management are planned for a later application phase. Leads must be available only to authorized administrators. The proposed statuses are:

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

These requirements describe planned later functionality. They do not imply that the functionality belongs in the first public-website release.

### 7.1 Authentication and account setup

The confirmed onboarding flow is admin-managed: the student/parent submits the shared form and provides the intended account email; the admin contacts them on WhatsApp, arranges a trial, collects one month's tuition in advance if they choose to continue, then creates/invites the account. The student/parent receives an expiring activation link by email and creates their own password. If the link expires, they contact the admin for a new link. The exact expiry period remains undecided.

- Do not distribute permanent passwords over WhatsApp.
- Email/password authentication is planned.
- Google login is optional/proposed, not a mandatory launch requirement.
- Student and administrator permissions must be enforced by backend authorization and database policies, not just frontend routes.
- The data model should allow future family/guardian relationships without a wholesale redesign.
- Children and adults may be students; do not equate “student” with “adult account holder.”


The planned authentication capabilities include:

- Email/password login.
- Password recovery.
- Role-based access.
- A controlled method for creating or inviting student accounts.
- A secure process for setting or resetting passwords.

The preferred account-provisioning approach is to let the administrator invite a student and provide a password-setup or reset link, rather than distributing a permanent password over WhatsApp or email.

Google login was discussed as a preference, but its inclusion in the first authenticated release is not confirmed.

**Acceptance criteria**

- Unauthenticated users cannot access protected application data.
- Users can access only the features authorised for their role.
- Administrative permissions are enforced beyond frontend visibility.
- Password setup and recovery follow the approved authentication design.
- Account creation and recovery do not expose credentials or private tokens.

### 7.2 Student dashboard

The planned student dashboard includes:

- Overview of upcoming classes.
- Authorised class-joining functionality.
- Attendance history.
- Payment history.
- Study materials.
- Certificates.
- Announcements.
- Student profile information.

The exact dashboard layout and feature release order will be established in the implementation plan.

**Acceptance criteria**

- Students can access only their own permitted records.
- Missing or unavailable information is presented clearly.
- Protected content is not exposed through public routes or unauthorised requests.

### 7.3 Class scheduling

- Each student receives four classes per month.
- Each class lasts 30–45 minutes.
- Scheduling is flexible and agreed with the student/parent, taking their timezone and availability into account.
- Makeup classes are arranged directly between the tutor and student/parent. They agree on a suitable date, and the agreed arrangement is updated in the student dashboard.
- Do not invent cancellation fees, notice periods, automatic credits, or a fixed makeup entitlement beyond the confirmed arrangement.



The system is intended to support one-to-one classes with flexible scheduling for overseas students.

The teacher must be able to maintain class schedules and associate classes with the appropriate student.

The application should account for time zones so that a class scheduled for an overseas student is displayed at the intended local time.

The exact scheduling rules, class duration, booking workflow, cancellation rules, and makeup-class policy remain to be confirmed.

**Acceptance criteria**

- Class records are associated with the correct student.
- Time-zone handling is consistent.
- Conflicting class bookings are prevented when the scheduling system is implemented.
- Scheduling rules do not contradict the teacher's confirmed availability.

### 7.4 Class joining and Zoom

- The private class link is available through the authenticated student's dashboard, not exposed as a public URL.
- The “Join Class” button becomes active **five minutes before the scheduled start time**.
- Access must be authorized on the server/backend; hiding or disabling a frontend button alone is not security.
- Only the correct authorized student may retrieve the relevant link.
- The end of the permitted access window has not been specified. Do not invent an after-start or after-end cutoff.
- Zoom is the planned online-class platform. Waiting-room/passcode configuration should be used where supported by the school's Zoom setup.



Zoom is the planned platform for online classes.

The student should receive the appropriate class-joining link only when authorised.

The planned security approach is to perform access checks on the server before returning private class-link information.

**Acceptance criteria**

- Unauthorised users cannot retrieve private class links.
- Zoom credentials and private meeting details are not embedded in public source code.
- Class-link access follows an approved time window and authorisation policy.
- Failure to authorise a request does not reveal private class information.

The precise access window and server-side implementation remain to be finalised.

### 7.5 Attendance

The student area is intended to display attendance history.

The teacher must be able to record attendance against the relevant class and student.

**Acceptance criteria**

- Attendance records are associated with the correct student and class.
- Students can access only their own permitted attendance information.
- Administrative changes are restricted to authorised users.
- Attendance information is displayed accurately.

### 7.6 Payments

The initial payment model uses manual bank transfers, with fees collected in advance.

The planned system should allow appropriate payment records to be maintained and displayed to authorised users.

**Acceptance criteria**

- Payment records are associated with the correct student.
- Students can access only their own permitted payment history.
- Payment information is not exposed publicly.
- Records distinguish recorded payments from payments that have not been confirmed.

Payment-gateway integration is not confirmed for the initial release.

### 7.7 Study materials

The planned student area must provide access to appropriate study materials.

Materials may include audio files and other educational resources.

Private student materials must not be publicly accessible unless a particular resource is explicitly approved for public access.

**Acceptance criteria**

- Students can retrieve only materials they are authorised to access.
- Private files are protected by the approved access-control mechanism.
- Missing or unavailable files produce a useful message.
- Large media files are delivered in a way that avoids unnecessary performance problems.

File-size limits, allowed formats, retention rules, and the final storage configuration remain unresolved.

### 7.8 Student levels, examinations, and certificates

- A student starts at the **Beginner** level unless the admin decides otherwise.
- The admin controls the available stage/level definitions and can update a student's level, for example from Beginner to Intermediate.
- The tutor/admin may conduct practical examinations when appropriate; results may be recorded in the student record if this feature is implemented.
- Certificate issuance is controlled by the admin. A certificate may be issued based on stage completion, examination results, or an explicit admin decision.
- Students can view/download only certificates issued to them.
- Student level, enrolment status, exam results, and certificate issuance are separate pieces of information and must not be treated as interchangeable.
- Certificate templates, exact stage names, eligibility criteria, and certificate wording are not yet finalized.
- Do not imply official Trinity College London certification, accreditation, or endorsement unless the school verifies that claim and approves the exact wording.



The broader plan includes digital certificates that students may download after completing an approved book or learning milestone.

The issuance rules, certificate templates, identifiers, and completion criteria require confirmation.

The system must distinguish school-issued certificates from official Trinity College London certificates.

**Acceptance criteria**

- Certificates are issued only according to approved rules.
- Student and completion details are accurate.
- Certificates do not imply official recognition or accreditation that has not been confirmed.
- Certificate access is restricted to authorised users where appropriate.

### 7.9 Announcements

The planned application includes announcements for students.

The administrator should be able to publish approved announcements, and students should be able to access announcements intended for them.

**Acceptance criteria**

- Only authorised administrators can create or manage announcements.
- Students see only announcements intended for their permitted audience.
- The interface clearly distinguishes available announcements from unavailable content.

### 7.10 Admin panel

The planned admin area includes:

- Lead management.
- Student management.
- Course and enrolment management.
- Class scheduling.
- Attendance management.
- Payment records.
- Study-material management.
- Certificate management.
- Announcements.
- Selected website content and settings.

The initial admin model is one teacher/administrator.

The precise admin navigation, permissions, and content-editing boundaries remain to be defined in the architecture and implementation plan.

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
- Accessible video sound controls and failure recovery.

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

The tutor performance video is a known asset that requires optimisation and an appropriate production delivery strategy.

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
- Video playback degrades gracefully when autoplay or other browser capabilities are unavailable.
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

## 9. Exclusions

Unless explicitly approved later, the following are excluded from the first public-website release:

- A complete student dashboard.
- A complete admin management panel.
- Automated class scheduling and conflict management.
- Attendance-management workflows.
- Payment reconciliation and payment-gateway integration.
- Protected study-material delivery.
- Digital certificate generation and issuance.
- Student announcements within an authenticated portal.
- Parent accounts or family-account management.
- Paid digital-course purchases.
- A full learning management system.
- Multi-teacher scheduling and complex organisational roles.
- Unapproved integrations or third-party services.
- Unverified marketing claims, testimonials, qualifications, or certificate-recognition claims.

These exclusions do not necessarily remove the features from the overall project. They define what must not be assumed to belong to the first release.

---

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
| Video | Inline, muted autoplay, looping, custom sound control, and fallback. | Confirmed experience requirements; production delivery method unresolved. |
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
- The public website is the first implementation priority.
- The Contact navigation item and trial-booking CTAs must lead to the single homepage trial form.
- The application uses the existing JavaScript/React/Vite/Tailwind stack.
- The tutor performance video belongs in the About section.
- The student and admin functionality is planned for later development.

### 11.2 Assumptions requiring confirmation

The following details must not be treated as established facts until confirmed:

- Minimum student age.
- Guardian requirements and consent wording.
- Required versus optional enquiry fields.
- Trial-class duration and scheduling process.
- Fee amounts and published pricing.
- Exact meaning of a class section.
- Makeup-class rules.
- Lead-notification and follow-up workflow.
- Student account invitation and recovery details.
- Google login for the student portal.
- Class-link access window.
- Payment-recording and reconciliation procedures.
- Study-material limits and retention rules.
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
| OQ-01 | What is the minimum permitted student age, if any? | Determines guardian-related validation and consent rules. | Finalising trial form rules. |
| OQ-02 | Which fields are required, and what exact consent wording must be shown? | Determines validation and data collection. | Implementing the final trial form. |
| OQ-03 | How should the teacher be notified of a new enquiry? | Determines the lead-notification workflow. | Implementing backend submission and notifications. |
| OQ-04 | What are the exact lead statuses and permitted transitions? | Determines lead-management behaviour. | Implementing the admin lead workflow. |
| OQ-05 | What is the exact trial-class booking and confirmation process? | Determines whether the form records a request or confirms an appointment. | Implementing the enquiry workflow. |
| OQ-06 | What does one class section mean operationally? | Affects class and payment records. | Designing class and payment data. |
| OQ-07 | What are the makeup-class and cancellation rules? | Affects scheduling and attendance workflows. | Implementing class management. |
| OQ-08 | What time window permits a student to join a Zoom class? | Determines class-link authorisation. | Implementing secure class joining. |
| OQ-09 | Will Google login be included in the first authenticated release? | Affects authentication scope. | Finalising authentication. |
| OQ-10 | What are the study-material file limits, formats, and retention rules? | Affects storage and access policies. | Implementing material management. |
| OQ-11 | What qualifies a student to receive a certificate? | Prevents incorrect or misleading certificates. | Implementing certificate issuance. |
| OQ-12 | Which specialised and free courses will be available at launch? | Determines public content and navigation destinations. | Finalising course pages. |
| OQ-13 | Which hosting and video-delivery arrangement will be used in production? | Affects deployment, performance, and cost. | Production release. |
| OQ-14 | Is a light/dark theme required for launch, or is one theme sufficient? | Affects design and implementation scope. | Finalising the design system. |
| OQ-15 | What are the approved performance, browser-support, and accessibility targets? | Defines measurable release expectations. | Finalising quality criteria. |
| OQ-16 | Which privacy policy and other legal pages are required, and who approves their content? | Affects public launch readiness. | Production release. |
| OQ-17 | What is the approved production domain and canonical URL configuration? | Determines metadata and canonical URLs. | SEO configuration and deployment. |

Do not block unrelated work while an open question remains unresolved. Resolve each question before implementing the functionality that depends on it.

---

## 13. Release Acceptance Criteria

The first public release is acceptable when the following criteria are satisfied.

### Public website

- The homepage contains the agreed sections in the correct order.
- Keyboard and guitar course information is available.
- Tutor information uses verified content.
- The performance video has the agreed playback behaviour and accessible fallback.
- Testimonials are published only after verification and permission.
- Specialized-course previews and availability messages follow the approved behaviour.
- Navigation and footer links work.
- Responsive layouts are usable at the agreed viewport widths.

### Trial-class enquiry

- There is one trial-class booking form on the homepage immediately before the footer.
- The Contact navigation item and every trial-booking CTA lead to that same form.
- No separate general contact form exists.
- Validation works for the approved fields and rules.
- Future dates of birth are rejected.
- Guardian-related behaviour follows the approved policy.
- Submission success and failure are communicated accurately.
- The actual lead-storage and notification behaviour matches the approved implementation.

### Quality and security

- Relevant lint and production-build checks pass.
- Essential interactions are tested in a browser.
- Keyboard navigation and visible focus are checked.
- Responsive behaviour is verified.
- No known secrets are exposed in client-side code.
- Public content does not expose private student information.
- SEO metadata and indexability follow `docs/seo.md`.
- Production configuration and deployment are verified before the site is declared live.

The student dashboard and admin panel are not acceptance prerequisites for the first public-website release unless the approved release scope changes.

---

## 14. Requirements audit and traceability notes

This revision was checked against the source document containing `FR-001`–`FR-109` and `NFR-001`–`NFR-031`, plus the project owner's later clarifications. The requirements remain grouped by feature area for readability; keep the source IDs when implementing and testing the corresponding items.

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
| `FR-066`–`FR-067` | Lead storage and status management (planned; final labels/transitions need confirmation) |
| `FR-068`–`FR-074` | Authentication, recovery, optional Google login, role separation, admin invitation, no permanent password sharing, future family-account compatibility |
| `FR-075`–`FR-081` | Student dashboard, upcoming classes, protected class joining, attendance, payments, study materials, certificates |
| `FR-082`–`FR-109` | Remaining administrative/dashboard capabilities in the source baseline, including student/class administration, attendance/payment/material/announcement/certificate management and related application functions. Use the original source requirement wording when assigning implementation tickets; do not infer an unlisted feature from this summary. |

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
| Class joining | Join button activates five minutes before scheduled start; backend authorization is mandatory. The cutoff after start is unresolved. |
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

Before this draft becomes the final requirements baseline, reconcile its content against the original numbered functional and non-functional requirements lists. Preserve the established IDs and meanings, including FR-055, and update any related acceptance criteria that conflict with the single-form requirement.

**Document status:** Draft for review; not yet approved as the final numbered requirements baseline.