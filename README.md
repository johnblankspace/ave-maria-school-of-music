# Ave Maria School of Music

## Project Overview

Ave Maria School of Music is a web application for an online music
school offering one-to-one online Keyboard and Guitar lessons for
children and adults. The immediate MVP combines the public website and
trial-enquiry workflow with secure admin lead management,
admin-controlled student accounts, student access, private learning
materials, class scheduling, and secure Zoom joining.

### Main goals

-   Present the school, tutor, courses, and learning options.
-   Help prospective students and families enquire about classes and
    book a trial lesson.
-   Provide clear contact options, including WhatsApp.
-   Give authorised students access to relevant class information,
    attendance, payment history, study materials, announcements, and
    certificates.
-   Allow the administrator to manage student records and school
    workflows securely.

### Technology Stack

-   **Frontend:** React.js with JavaScript
-   **Build tool:** Vite
-   **Styling:** Tailwind CSS
-   **Routing:** React Router DOM
-   **Forms and validation:** React Hook Form and Zod
-   **Backend services:** Supabase Authentication, PostgreSQL database,
    Storage, and server-side functions where required
-   **Icons:** Lucide React
-   **Source control:** Git and a private GitHub repository

The project uses **JavaScript, not TypeScript**.

> The actual installed packages and available npm scripts are defined by
> `package.json`. Check that file if a command listed below is
> unavailable.

## Prerequisites

Install the following before working on the project:

1.  **Node.js (LTS recommended)** --- includes npm.
2.  **Git** --- for source control and working with the GitHub
    repository.
3.  **A code editor** --- Visual Studio Code or the configured
    Antigravity IDE.
4.  **Supabase project credentials** --- required when working on
    features that connect to Supabase.

Verify Node.js, npm, and Git:

``` bash
node --version
npm --version
git --version
```

## Installation

### 1. Open the project directory

Open the existing project folder in your terminal or IDE:

``` bash
cd ave-maria-school-of-music
```

If you have already opened the project directory in your IDE, you do not
need to run this command.

### 2. Install dependencies

Run this command from the project root:

``` bash
npm install
```

### 3. Configure environment variables

If the project includes an `.env.example` file, use it as the template
for a local environment file and fill in the required values. Otherwise,
create the local file expected by the application.

The Supabase client commonly needs values such as:

``` env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_publishable_or_anon_key
```

Use the exact variable names expected by the project's Supabase
configuration. If the code uses different names, update this example to
match it.

**Security rules:** - Never commit `.env`, `.env.local`, or real
credentials to Git. - Only use a Supabase publishable/anon key in
browser code, with appropriate Row Level Security (RLS) policies. -
Never expose a Supabase service-role key or another privileged secret in
a `VITE_` variable or frontend code. - Keep production credentials
separate from development credentials.

### 4. Start the development server

``` bash
npm run dev
```

Vite will print the local development address in the terminal. Open that
address in your browser.

## Development Commands

Run these commands from the project root.

  ---------------------------------------------------------------------
  Command                            Purpose
  ---------------------------------- ----------------------------------
  `npm install`                      Installs project dependencies.

  `npm run dev`                      Starts the Vite development
                                     server.

  `npm run build`                    Creates a production build,
                                     usually in the `dist/` directory.

  `npm run preview`                  Serves the production build
                                     locally for a preview.

  `npm run lint`                     Runs ESLint, if a lint script is
                                     configured in `package.json`.
  ---------------------------------------------------------------------

The standard Vite commands above work only if the corresponding scripts
exist in `package.json`. If a command reports `Missing script`, inspect
the `scripts` section of `package.json` and use the scripts configured
for this project.

### Recommended verification before committing

``` bash
npm run build
```

If a lint script is configured, also run:

``` bash
npm run lint
```

Resolve relevant errors before committing changes.

## Project Development Guidelines

-   Use JavaScript and React; do not introduce TypeScript unless the
    project requirements are explicitly changed.
-   Reuse existing components and established patterns before creating
    new ones.
-   Build and verify the application in small, reviewable stages.
-   Do not invent tutor qualifications, testimonials, student
    statistics, or other business facts. Use approved content or mark it
    as awaiting confirmation.
-   Keep public marketing pages separate from protected student and
    admin functionality.
-   Client-side route guards are not sufficient security. Enforce
    permissions through Supabase Row Level Security and trusted
    server-side operations where required.
-   Keep private student data and learning materials accessible only to
    authorised users.
-   Test responsive layouts, forms, loading states, error states, and
    access permissions as features are implemented.
-   Review changes and run the available checks before committing.

## Further Documentation

### Existing Project Documentation

-   `AGENTS.md` --- instructions for AI coding agents.
-   `docs/requirements.md` --- working requirements baseline pending
    final owner approval.
-   `docs/architecture.md` --- application architecture and code
    organisation.
-   `docs/implementation-plan.md` --- development phases and task order.
-   `docs/seo.md` --- SEO and public-page requirements.
-   `docs/design-system.md` --- visual design and reusable UI rules.

### Current Project Documentation

-   `AGENTS.md` --- instructions and development workflow for AI coding
    agents.
-   `docs/requirements.md` --- business requirements, confirmed
    decisions, unresolved questions, and acceptance criteria.
-   `docs/architecture.md` --- application architecture and system
    boundaries.
-   `docs/database-schema.md` --- Supabase database tables,
    relationships, priorities, and constraints.
-   `docs/security.md` --- authentication, authorization, RLS, Storage,
    trusted operations, and security checks.
-   `docs/implementation-plan.md` --- phased delivery sequence, tasks,
    dependencies, and phase gates.
-   `docs/design-system.md` --- brand tokens, visual rules, responsive
    behaviour, and component conventions.
-   `docs/seo.md` --- SEO requirements for public pages.

### Future Documentation

-   `docs/testing.md` --- dedicated testing strategy and test matrix
    (not yet confirmed as created).
-   `docs/deployment.md` --- production hosting and release runbook (not
    yet confirmed as created).

Keep this README aligned with the actual repository and implemented
functionality. A feature described in documentation must not be
presented as already implemented unless verified in the application.
