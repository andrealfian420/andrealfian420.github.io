# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: employers evaluating Alfian Andre Ramadhan for a fullstack web developer role, both Indonesian companies (Jakarta, full-time) and remote/international teams. Hiring managers, tech leads and recruiters arrive from a job application, LinkedIn or a shared link, and want to judge quickly whether he can build and run real production systems.

Secondary: freelance or contract clients looking for a developer for a project. Welcome, but the site is not tuned for them first.

## Product Purpose

A personal portfolio site that shows the work, experience and stack of a Jakarta-based fullstack web developer (Laravel/PHP, Vue/Nuxt, Next.js, TypeScript, Node.js/Express).

Success is a visitor who leaves convinced and takes one of these actions:

- emails him (`mailto:andrealfian.work@gmail.com`), the main conversion;
- opens his LinkedIn (`linkedin.com/in/alfianandre`);
- checks his GitHub (`github.com/andrealfian420`).

No CV download exists, and none is planned.

## Positioning

Production depth. He ships and maintains real systems that carry money, data and deadlines: payment gateways (Xendit, Midtrans, multi-currency IDR/USD), schedulers and background jobs, OTP and auth, security hardening, and multi-year maintenance of live client platforms. The work list proves it with concrete features, not claims.

Supporting strengths, true but secondary: modernizing legacy Laravel codebases (5.5 to 10, 8 to 11) without breaking live products; leading greenfield platforms from the first commit (Forte); deep exposure to medical societies, congresses, event ticketing and medical e-learning.

## Operating Context

- Visitors usually scan on desktop during a hiring review, sometimes on mobile from a LinkedIn or chat link.
- One-page site: About (hero), Works, Experience, Tech Stack, closing contact section and footer links.
- Two locales: English (default, `/`) and Indonesian (`/id`). All copy lives in `i18n/locales/en.json` and `i18n/locales/id.json`; both must stay in sync.
- Light and dark themes, following system preference by default.
- Deployed as a static site to GitHub Pages (`https://andrealfian420.github.io`) on push to `main`.

## Capabilities and Constraints

- Nuxt 4 SSG (`nuxt generate`), Tailwind CSS 4, `@nuxt/image`, `@nuxtjs/i18n`, `@nuxtjs/color-mode`. No server runtime; anything dynamic must work as static output.
- Project data (slug, title, gallery shots, stack, URL) lives in `app/utils/works.js`; text per project lives in i18n under `projects.<slug>`, including one caption per gallery image under `projects.<slug>.shots`. Featured projects carry `meta` and `features`; others carry only `desc`.
- Open Graph image is `public/og.jpg` (1200x630); regenerate it when the hero changes.

## Brand Commitments

- Name: Alfian Andre Ramadhan. Wordmark in the header: `<Andre />`.
- Voice: first person, warmer and more personal than a CV. Keep the concrete facts, numbers and stack names, and allow some personality and opinion. No buzzwords, hype or empty self-praise.

## Evidence on Hand

- Ten projects with screenshots: nine have a gallery of three to six images in `public/img/<slug>/` (public pages and aggregate-only admin dashboards, never pages showing participant, member or patient data); EPIC has a single `public/img/epic.webp`. Projects: Forte, MedExpo, ISICAM, Wahana Honda, InaHRS Registry, InaHRS, Festivia (captured from its staging site), Sinau Yuk, ERIA, EPIC. Most are client work built at Totalit.
- Cleared to show for client work: client names, screenshots, live site links and feature lists. Source code is private and must not be implied as public.
- Experience: Totalit (Web Developer, May 2022 to present), Umrotix (Mar 2020 to Nov 2021). Education: STMIK Bani Saleh Bekasi, B.Sc. Information Systems, 2017 to 2021.
- No testimonials, client quotes, metrics dashboards, awards or press exist. Do not invent them.

## Product Principles

1. Proof over claims. Every strength on the page traces to a named project, feature or role.
2. Respect the reviewer's time. A hiring manager should grasp who he is and what he has shipped within one screen, then dig deeper if they want.
3. Contact is always one step away. Email, LinkedIn and GitHub stay easy to reach from anywhere on the page.
4. Both languages are first-class. A change in one locale ships with its counterpart.
5. Honest about client work. Show what is cleared to show and nothing that suggests access to private code.
