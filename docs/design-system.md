# Design System — Ave Maria School of Music

**Document:** `docs/design-system.md`  
**Status:** Brand tokens confirmed; detailed token-to-component assignments are not yet final.

## 1. Purpose

This document defines the visual and interaction rules for the public website and later application. Requirements and business rules remain in `docs/requirements.md`; architecture is in `docs/architecture.md`.

The design system applies to the entire intended website and later application, but it does not define the implementation sequence. Design consistency must be maintained as features are built incrementally.

For each development task, apply the relevant design rules only to the section or component within the approved task scope. Do not implement or redesign every page or homepage section simply because its design requirements are documented here. Follow `docs/implementation-plan.md` for task sequencing and `docs/requirements.md` for feature scope and acceptance criteria.

## 2. Brand principles

The interface should feel clear, welcoming, trustworthy, and suitable for music education for both children and adults. It should work well for families in India and overseas.

- Use the approved school identity and content.
- Prioritise readability and a clear route to the single inquiry/free-trial form.
- Avoid visual clutter, excessive animation, or decorative elements that make the page harder to use.
- Do not fabricate testimonials, credentials, statistics, or official endorsements.

## 3. Approved colour palette

The source requirements list the following approved colours. The source does **not** finalise exact assignments for every UI role; the semantic assignments below are suggested defaults and should be reviewed visually before being treated as locked.

| Token | Hex | Suggested use (review before finalising) |
|---|---|---|
| Deep Navy | `#021024` | Deepest surfaces, high-emphasis text, dark theme background |
| Royal Navy | `#052659` | Primary brand surfaces, primary CTA candidate |
| Steel Blue | `#5483B3` | Secondary brand elements and interactive accents |
| Soft Blue | `#7DA0CA` | Soft accents, selected states, decorative highlights |
| Ice Blue | `#C1E8FF` | Light accent surfaces and highlights |
| White | `#FFFFFF` | Main light surface and text on dark surfaces, depending on contrast |
| Cloud White | `#F7FAFD` | Light page/background surface |
| Mist Grey | `#EDF2F7` | Subtle section backgrounds |
| Border Grey | `#CBD5E1` | Borders and dividers |
| Slate Grey | `#475569` | Secondary text on light surfaces, subject to contrast testing |
| Dark Slate | `#0F172A` | Main text on light surfaces |

### 3.1 Colour rules

- Centralise colours as CSS custom properties or the project's existing Tailwind theme tokens.
- Avoid scattered, one-off hex values in components.
- Test text and interactive-state contrast; do not assume every brand colour is suitable for small text.
- Define hover, focus, disabled, error, success, and warning states consistently.
- Do not use colour alone to convey status.
- The source requirements call for light and dark theme support. Exact dark-theme surface and text mappings need visual review and contrast checks before implementation is considered complete.

## 4. Typography

- **Primary font:** Poppins.
- Use Poppins for headings, body text, buttons, navigation, and form controls.
- Include sensible system fallbacks if the font cannot load.
- Establish a consistent scale for page titles, section headings, body copy, labels, captions, and helper text.
- Avoid using small or low-contrast text for important information.
- Use comfortable line height and readable line lengths, particularly on mobile.
- Load font weights deliberately; avoid downloading unnecessary weights.

Exact font sizes and weights should be defined as reusable tokens after reviewing the approved design and existing implementation.

## 5. Layout and responsive behaviour

The source requirements identify these widths for testing:

| Width | Test category |
|---:|---|
| 375 px | Mobile |
| 425 px | Larger mobile |
| 768 px | Tablet |
| 1024 px | Desktop/small laptop |
| 1440 px | Wide desktop |

Also test wider screens and intermediate widths where the layout changes.

Rules:
- Use a mobile-first approach.
- Prevent horizontal overflow and clipped controls.
- Keep content width comfortable on large screens.
- Maintain clear spacing between sections and form fields.
- Make the primary CTA visible without obscuring content.
- Ensure dropdowns, dialogs, menus, and floating controls work with keyboard and touch input.
- Do not hard-code page heights that clip translated or responsive content.

### Incremental responsive verification

Develop and verify responsive behaviour as part of each section's implementation task. Do not postpone all responsive work until the entire homepage has been built.

Before considering a section task complete:

- Test the section at the relevant supported viewport widths: 375, 425, 768, 1024, and 1440 px.
- Check intermediate widths when they may reveal layout problems.
- Verify that text, images, cards, buttons, and other controls fit without unintended overflow or clipping.
- Check alignment, spacing, stacking, and readability at mobile, tablet, and desktop sizes.
- Verify touch and keyboard interaction for any interactive elements affected by the change.
- Recheck nearby or dependent sections if the change affects shared layout rules, global styles, or common components.

Record any viewport that could not be tested and explain the limitation. Do not claim that responsive behaviour has been verified at a width that was not actually checked.

Once the current section meets its responsive acceptance criteria, report the result and wait for the project owner's approval before moving to the next section.

## 6. Shared layout and navigation

The public site uses a shared header and footer.

- Navigation includes the approved Home, Courses dropdown, About, Our Process, Contact, Login entry point, and primary CTA according to the source requirements.
- The Contact item leads to the one shared inquiry/free-trial form.
- All free-trial CTAs point to the same form.
- Do not add a second contact form.
- Do not add Student Performances to the initial public navigation.
- Keep mobile navigation usable without hover.
- When login functionality is not ready, do not make the Login entry point misleading; decide and document its interim behaviour.

### Preserving shared layout components

The shared header, navigation, and footer must remain consistent while individual homepage sections are implemented.

For a section-specific task:

- Do not redesign, replace, or restructure the shared header, navigation, or footer unless the approved task explicitly includes those elements.
- Preserve existing navigation links, dropdown behaviour, responsive menu behaviour, and CTA destinations.
- Preserve the single shared inquiry/free-trial form and its existing anchor navigation.
- Do not introduce duplicate headers, footers, navigation menus, or inquiry forms.
- Avoid changing global spacing, typography, or layout styles if the required section can be implemented using its existing styles and design tokens.
- If a shared component or global style must change, explain why the change is necessary and identify the other sections that may be affected.
- Verify the affected shared behaviour after making an approved change.

A change to one homepage section must not cause unrelated changes to shared layout components.

The final arrangement of every page/section should follow the approved information architecture and the actual implementation phase.

## 7. Buttons and interactive components

Define consistent variants for primary, secondary, text/link, icon-only, disabled, loading, and destructive actions where relevant.

Every interactive control must have:
- A clear accessible name.
- Visible keyboard focus.
- A suitable touch target.
- A hover/focus/pressed state.
- A disabled state where action is unavailable.
- Loading feedback for asynchronous actions.

Do not communicate a successful form submission until the backend confirms it.

## 8. Forms

- The homepage contains exactly one shared inquiry/free-trial form immediately before the footer.
- Contact navigation and all free-trial CTAs lead to this form.
- Use persistent labels, clear required/optional indicators, and helpful validation messages.
- Associate error messages with the relevant fields.
- Preserve entered values after recoverable errors when practical.
- Provide success, submitting, and failure states.
- Validate the date of birth as a valid date that is not in the future. Do not reject students merely because they are under 18.
- Minimum-age criteria are not displayed on the public site; the admin explains them after enquiry.
- Ensure the form works with keyboard, touch, screen readers, and mobile browsers.

## 9. Homepage sections and content presentation

The homepage should present the approved sections and content in the order established by the requirements and approved design. Relevant elements include:
- Hero heading and supporting copy.
- Primary free-trial CTA and secondary WhatsApp CTA.
- Approved trust statistics only after verification.
- Keyboard and Guitar lessons.
- Specialized-course previews with accurate availability wording.
- Tutor/About section using the approved tutor photograph; the performance video is deferred from the first release.
- Teaching process.
- Genuine, approved testimonials/reviews.
- Certification information with accurate wording.
- FAQ.
- One shared inquiry/free-trial form immediately before the footer.

### Homepage design scope and implementation boundaries

The section list above defines the intended content of the completed homepage. It does not require all sections to be implemented in a single development task.

Follow `docs/implementation-plan.md` to determine which section or component is in scope for the current task.

For each section task:

- Apply the relevant visual and interaction rules from this document.
- Use the approved content, assets, colours, typography, spacing, and component conventions.
- Implement only the assigned section and the supporting changes necessary to complete it.
- Do not build, redesign, or modify the remaining homepage sections unless they are explicitly included in the approved task.
- Preserve the intended order of sections when integrating them into the completed homepage.
- Reuse existing shared components and design tokens where appropriate.
- Do not invent content, visual requirements, or business claims to fill gaps in the specification.
- If a required design decision or asset is missing, identify the gap and ask for clarification when it materially affects the result.

The completed homepage must eventually follow the approved requirements and design. However, each section must be implemented, verified, and reviewed independently before development proceeds to the next section.

Student Performances are excluded from the initial public site.

Do not show a “Coming Soon” badge on specialized-course cards if the requirements explicitly prohibit it. Availability language should follow the source requirement and the actual offering status.

## 10. Tutor video

The first public-website release must use the existing approved tutor photograph in the About/tutor section.

### First-release requirements

- Use the approved tutor photograph.
- Display the image appropriately within the section's layout.
- Optimise the image for web delivery.
- Provide appropriate alternative text when the image conveys meaningful information.
- Ensure the image displays correctly across supported viewport widths.
- Do not invent or publish unverified information about the tutor.

### Deferred performance video

The tutor performance video is deferred and is not part of the first public-website release.

Do not implement video playback, muted autoplay, looping, custom sound controls, video-specific loading behaviour, or video hosting integration as part of the current release.

The video may be reconsidered in a future task only after the project owner explicitly approves its inclusion.

If approved for a future release, review the video source, poster image, playback behaviour, accessibility, browser autoplay restrictions, reduced-motion preferences, loading performance, and mobile data usage before implementation.

## 11. Light and dark themes

The source requirements include light and dark theme support. The final theme behaviour, persistence preference, and complete token mapping are not yet specified.

Before implementation:
- Define semantic tokens for page surface, raised surface, primary text, secondary text, border, brand action, focus ring, and status colours.
- Check contrast in both themes.
- Ensure logos, icons, images, form controls, and embedded video controls remain legible.
- Do not add a theme toggle or persistence behaviour beyond the agreed design without recording the decision.

## 12. Accessibility baseline

- Use semantic landmarks and heading hierarchy.
- Provide meaningful alt text for informative images; decorative images should not create redundant announcements.
- Label form fields and expose validation errors programmatically.
- Ensure keyboard navigation and visible focus.
- Avoid colour-only status indicators.
- Respect `prefers-reduced-motion`.
- Ensure animations do not prevent access to the text content.
- Test contrast, zoom, keyboard-only use, and small-screen layouts.
- Use descriptive link and button text.

## 13. Design tokens and implementation conventions

Prefer central tokens for:
- Brand and semantic colours.
- Typography families, sizes, weights, and line heights.
- Spacing scale.
- Border radii and border colours.
- Shadows.
- Content widths.
- Breakpoints.
- Focus rings and motion durations.

Use React components for interactive or stateful UI. Use Tailwind utilities for local layout and styling, and use `@apply` only for genuinely repeated styling patterns where it improves maintainability. Follow the existing Tailwind CSS v4 setup.

### Reuse of existing design tokens and components

Before implementing a section, inspect the existing design tokens, shared components, styles, and Tailwind CSS v4 configuration.

- Reuse existing colour, typography, spacing, radius, shadow, breakpoint, and focus-ring tokens whenever they meet the design requirements.
- Reuse existing shared components when they provide the required behaviour and appearance.
- Do not introduce new colour values, arbitrary spacing values, duplicate utility classes, or one-off component styles without a clear reason.
- Do not create duplicate components that serve the same purpose as existing components.
- Do not modify global design tokens or shared component styles merely to make one section easier to implement.
- If a new token or shared component is genuinely necessary, explain the reason and check whether the change could affect existing sections.
- Keep section-specific styling local when it is not genuinely reusable.
- Follow the existing Tailwind CSS v4 setup and conventions. Do not introduce another styling system or replace the current configuration without explicit approval.

After implementing a section, verify that its appearance is consistent with the existing design system and that any shared styles changed by the task have not unintentionally affected other sections.

## 14. Open design decisions

- Final semantic assignment of approved palette colours.
- Exact type scale, font weights, spacing scale, radii, and shadow tokens.
- Detailed desktop/mobile navigation layout.
- Exact light/dark theme mappings and whether the user can toggle themes.
- Approved logo files, imagery, video source, and poster assets.
- Final content ordering and section-level visual specifications.
