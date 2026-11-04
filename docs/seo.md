# SEO Requirements --- Ave Maria School of Music

**Document:** `docs/seo.md`\
**Status:** SEO requirements baseline; final URLs and rendering strategy
remain undecided.

## 1. Purpose and scope

SEO applies to the public marketing website and its approved public
routes. SEO work must not delay the immediate operational MVP. Private
student/admin pages and personal records must not be indexed or exposed;
authentication, backend authorization, RLS, and Storage policies provide
security---not robots directives or noindex metadata.

The site's business goal is to help prospective students and parents
discover online Keyboard and Guitar lessons and submit an
inquiry/free-trial request. SEO must support this goal without
publishing unverified claims.

SEO requirements must be implemented incrementally according to
`docs/implementation-plan.md`. Documenting an SEO requirement does not
authorize implementing every SEO feature at once. Implement only the SEO
work relevant to the current approved task, and defer work that depends
on unresolved decisions.

## 2. Source of truth

-   Business content and scope: `docs/requirements.md`
-   Application and rendering constraints: `docs/architecture.md`
-   Visual/content presentation rules: `docs/design-system.md`
-   Delivery timing: `docs/implementation-plan.md`

Do not invent target keywords, rankings, testimonials, credentials,
statistics, or location claims. Treat keyword research as a separate
research task if requested.

## 3. Public-page metadata

Each indexable public page should have: - A unique, descriptive
`<title>`. - A useful meta description that accurately summarises the
page. - One clear primary heading and a logical heading hierarchy. - A
descriptive URL/slug once the route map is approved. - Appropriate
language declaration and character encoding. - A canonical URL after the
final production domain and URL format are decided. - Social sharing
metadata (Open Graph and, where appropriate, X/Twitter card metadata)
using approved titles, descriptions, and images. - Descriptive image
alternative text where images convey information; decorative images
should use empty alt text. - Descriptive internal link text rather than
repeated vague labels.

-   Implement metadata only for routes that actually exist or are
    included in the current approved task.
-   Do not invent production URLs, canonical URLs, page titles,
    descriptions, or social-sharing image paths.
-   Until the production domain and route map are approved, keep
    canonical URL configuration pending rather than publishing guessed
    canonical URLs.
-   Keep metadata configuration maintainable and avoid duplicating
    conflicting metadata across shared components and individual pages.

Do not stuff keywords or reuse one generic title/description on every
page.

## 4. Content and search intent

The public content should clearly explain: - Online one-to-one Keyboard
and Guitar lessons. - Lessons for children and adults. - The teaching
approach and verified tutor background. - English and Malayalam support
only to the extent confirmed by the school. - The process for requesting
a trial class. - Flexible scheduling and the four-classes-per-month
model where relevant. - How to contact the school.

The primary audience includes prospective students and overseas Indian
families, particularly in Australia, the United Kingdom, and Gulf
countries. Do not create country-specific landing pages or claim service
coverage beyond what the school actually supports without approval.

Do not display a minimum student age. The admin explains the school's
criteria after enquiry.

Do not publish fixed prices unless approved. Direct visitors to enquire
if that remains the confirmed pricing approach.

## 5. Proposed public information architecture

The requirements describe public information areas such as: - Home -
Courses and Keyboard/Guitar course information - About/tutor - Our
Process - Certification - FAQ - The shared inquiry/free-trial form on
the homepage

These are content areas, not a final URL map. Confirm the final
page/route structure and slugs against the approved design and
implementation before creating canonical tags or a sitemap.

Specialized-course previews must describe actual availability
accurately. Do not present future free courses, including Malayalam Holy
Mass songs, as currently available unless confirmed. Do not include
Student Performances in the initial public navigation.

The proposed information architecture defines content areas, not a
single implementation task. Implement homepage sections individually
according to `docs/implementation-plan.md`. Do not create new routes
solely for SEO purposes without approval. Keep the shared
inquiry/free-trial form on the homepage unless the project owner
explicitly approves a change.

## 6. Technical SEO and rendering

React/Vite is the current frontend stack. The choice between client-side
rendering, prerendering, or another rendering approach remains open and
should be made after reviewing the public-page requirements and
deployment constraints.

At minimum: - Ensure public content is rendered in a way that search
engines can reliably discover. - Avoid empty metadata or a generic title
on all routes. - Use clean, stable URLs. - Avoid broken internal links
and redirect chains. - Add a `robots.txt` only when the intended crawl
rules are known. - Generate a sitemap for the final approved indexable
public URLs if appropriate to the selected deployment/rendering
approach. - Ensure canonical tags point to the chosen production URL,
not a preview host. - Use HTTPS in production. - Prevent accidental
indexing of staging/preview environments where feasible. - Do not expose
private student/admin routes, private files, API keys, or records in
public bundles. - Do not rely on `robots.txt` as an access-control
mechanism.

### Rendering and deployment decision gate

-   Do not introduce prerendering, static generation, server-side
    rendering, or additional SEO dependencies without evaluating the
    existing React/Vite setup and obtaining approval for the approach.
-   Before implementing a sitemap, confirm the approved public route map
    and the chosen rendering and deployment strategy.
-   Keep preview and development URLs out of production canonical
    metadata.
-   Apply the appropriate indexing controls to staging environments and
    private routes. Use authentication and server-side authorization to
    protect private content; metadata and crawler directives are not
    security controls.
-   Verify the rendered page output and metadata using the chosen
    implementation and deployment approach rather than assuming that the
    presence of React components guarantees search-engine
    discoverability.

## 7. Structured data

Use structured data only when it accurately describes the business and
visible page content. Candidate types may include an appropriate
educational organisation/local business representation, course
information, or breadcrumbs if supported by the final information
architecture.

Before adding structured data: - Verify the correct schema type and
required properties. - Ensure every claim is supported by visible,
approved content. - Do not invent a street address, public opening
hours, prices, review scores, credentials, or accreditation. - Do not
add fabricated review/testimonial markup. - Validate structured data
after implementation.

Whether a local-business schema is appropriate depends on whether the
school has a qualifying public-facing location and approved business
details; do not assume a physical location from the online lesson model.

## 8. Images, video, and performance

-   Use descriptive filenames for new assets where practical.
-   Supply suitable image dimensions and responsive variants when
    appropriate.
-   Compress images without visibly damaging quality.
-   Set width/height or aspect ratio to reduce layout shift.
-   Lazy-load below-the-fold images when appropriate; do not lazy-load
    the main hero asset if it harms perceived loading.
-   Use the approved tutor photograph in the About section for the first
    public release. Optimise the image, provide appropriate dimensions
    and responsive variants where useful, and use meaningful alternative
    text when the image conveys information. Defer tutor video
    optimisation and integration until a later phase is explicitly
    approved.
-   Avoid unnecessary third-party scripts and fonts.
-   Load only the Poppins weights actually used.
-   Monitor layout stability and mobile performance.
-   Ensure performance optimisation does not break accessibility. Tutor
    performance video and its playback controls are deferred and are not
    part of the current public-site scope.

## 9. Accessibility and content quality

Accessibility supports both users and discoverability: - Semantic HTML
and logical heading structure. - Descriptive link names. - Useful alt
text. - Keyboard access and visible focus. - Proper labels and
validation messages on the shared form. - Sufficient contrast and
reduced-motion support. - Readable content on mobile.

Content must be original or used with permission. Testimonials must be
genuine and approved. Tutor qualifications and Trinity-related wording
must be accurate; do not imply official Trinity College London
certification/accreditation unless verified and explicitly approved.

## 10. Inquiry conversion and measurement

The primary conversion is submission of the single shared
inquiry/free-trial form. A secondary action is the WhatsApp contact
link.

-   All trial CTAs and Contact navigation must lead to the same form.
-   Do not create separate forms for SEO landing pages unless the owner
    changes the one-form decision.
-   If analytics or conversion tracking is added, choose the provider
    and consent/privacy approach explicitly.
-   Do not collect unnecessary personal data for analytics.
-   Do not claim a form conversion unless the backend confirms the
    submission.

## 11. Search console and launch checklist

Before launch, once the production domain is approved: - Confirm the
canonical host and HTTPS behaviour. - Check title/description and
heading hierarchy on every public page. - Check all public links and
image alternatives. - Confirm the intended robots/indexing rules. -
Publish/verify the sitemap if applicable. - Inspect page rendering and
mobile usability. - Validate structured data if present. - Set up
search-engine webmaster tools only with the owner's approval and
access. - Monitor indexing and errors after launch.

### SEO verification during development

For each public page or SEO-related task:

-   Verify the page title, meta description, primary heading, and
    relevant metadata.
-   Check internal links, image alternative text, and responsive
    behaviour where applicable.
-   Confirm that metadata and canonical URLs do not contain invented
    production URLs.
-   Check that the implementation does not unintentionally expose
    private information or indexable private pages.
-   Run the relevant checks supported by the current project setup and
    report their actual results.
-   Do not mark the entire site's SEO as complete until the approved
    public routes, production domain, rendering strategy, and launch
    checklist have been addressed.

## 12. Open SEO decisions

-   Final public route/slug map.
-   Final production host and canonical URL format.
-   Whether prerendering or static rendering is required.
-   Approved logo, social sharing images, and metadata copy.
-   Whether and how analytics/conversion tracking will be used.
-   Whether the business qualifies for local-business structured data.
-   Final verified public claims, testimonials, tutor qualifications,
    and course availability.
-   Whether country-specific content is needed after keyword and
    audience research.
-   SEO implementation priorities and any additional technical SEO work
    must follow the approved implementation plan; do not introduce new
    SEO scope without approval.

## 13. SEO scope relative to the operational MVP

SEO work is required for the public-facing routes, but it is not the
critical path for the operational backend. Keep the existing public
website usable and ensure its core metadata, canonical host,
sitemap/robots configuration, accessibility, and performance are checked
at the appropriate release gate.

Do not delay the operational MVP to add extra marketing pages, undertake
speculative keyword expansion, or implement unapproved analytics.
Prioritize accurate public content and the single shared enquiry form.

Private admin and student routes must be protected independently of
SEO: - Require authentication for protected pages. - Enforce role and
record ownership on the backend. - Apply database RLS and private
Storage policies. - Do not return private records or Zoom links to
public requests. - Use `noindex` only as an additional indexing
directive where appropriate; it is not access control.

The exact public route map, rendering/prerendering strategy, canonical
domain, and analytics provider remain unresolved until approved.
