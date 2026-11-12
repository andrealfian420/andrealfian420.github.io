---
version: 1
slug: "app-pages-index-vue"
primary_target: "app/pages/index.vue"
related_targets: ["app/components/Section/About.vue","app/components/Section/Projects.vue","app/components/Section/Experience.vue","app/components/Section/Stack.vue"]
---

# Surface brief: portfolio landing page (/ and /id)

Mode: Persuade. Audience: tech-industry employers first (Indonesian and remote), freelance clients second. Job: judge in under a minute whether Andre builds and runs real production systems. Action: email (mailto), then LinkedIn and GitHub. Proof: the ten works with screenshots, roles, periods, teams, feature lists. Constraints: keep the current header (wordmark, nav, EN/ID switcher, theme toggle, contact link), dark/light, `<Andre />`, all 10 projects; no photo; hero is type only (name + pitch), no works index in it. Feel: professional for tech, warm, his own voice; not gimmicky, template-looking, stiff, or playful. Craft bar: Stripe, Vercel, Linear.

## Direction contract

THESIS: His career reads like a well-kept product changelog: each system a dated release with what shipped and a short first-person note. It refuses the portfolio default of a hero over a grid of project cards.

OWN-WORLD: White page, near-black ink, cool slate secondary text, hairline grey rules, one warm orange for the primary action, date markers and link hover. Dark mode is near-black with light ink and a lifted orange. One precise grotesk (Schibsted Grotesk) with tabular figures for dates; no mono costume. Small 8px radius on buttons and screenshots, 1px hairline borders, no shadows, no gradients, no glass.

STORY: Visitor reads the name and a plain first-person pitch, can email at once, then scrolls a newest-first changelog of ten systems: date rail on the left, entry on the right (name, role and team, his note, what it does, screenshot, what shipped, built with, visit). Then experience in the same rail grammar, the stack, and a warm closing invitation to email.

FIRST VIEWPORT: Current header. Below it, left-aligned on white: name very large across two lines, role line under it, the pitch at lead size in first person, an orange "Email me" button with LinkedIn and GitHub as quiet links. The first release (2026, Forte) starts at the fold under a hairline so the changelog is visibly next. No works list in the hero.

FORM: Release Notes (tech-company changelog), position 1 of 3 in the user-requested safer lineup, chosen by the user after re-rolls. seed:9f4ea39f67384c76. Signature interaction: the year in the date rail stays pinned while its releases scroll past. Motion grammar: none beyond colour on hover; nothing slides or fades.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
