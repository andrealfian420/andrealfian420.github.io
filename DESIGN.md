---
name: Alfian Andre Ramadhan, Portfolio
description: A fullstack developer's practice, kept like a tech-company changelog.
colors:
  accent: "oklch(54% 0.19 40)"
  accent-hover: "oklch(48% 0.17 38)"
  on-accent: "oklch(100% 0 0)"
  paper: "oklch(100% 0 0)"
  paper-2: "oklch(97.6% 0.002 250)"
  ink: "oklch(17.5% 0.01 255)"
  ink-muted: "oklch(45% 0.014 255)"
  ink-subtle: "oklch(55% 0.012 255)"
  rule: "oklch(92.5% 0.005 255)"
  rule-strong: "oklch(85% 0.007 255)"
  accent-dark: "oklch(70% 0.17 45)"
  accent-hover-dark: "oklch(76% 0.15 48)"
  on-accent-dark: "oklch(16% 0.02 45)"
  paper-dark: "oklch(14.5% 0.004 255)"
  paper-2-dark: "oklch(18.5% 0.005 255)"
  ink-dark: "oklch(94% 0.003 255)"
  ink-muted-dark: "oklch(76% 0.008 255)"
  ink-subtle-dark: "oklch(66% 0.01 255)"
  rule-dark: "oklch(25% 0.006 255)"
  rule-strong-dark: "oklch(33% 0.008 255)"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 2.2vw, 1.875rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  note:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.6
  meta:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
rounded:
  sm: "6px"
  md: "8px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "8": "2rem"
  "10": "2.5rem"
  "12": "3rem"
  "16": "4rem"
  "20": "5rem"
  "24": "6rem"
  rail: "11rem"
  page-pad: "clamp(1rem, 4vw, 4rem)"
  page-max: "76rem"
  header-h: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.on-accent}"
  header-contact-mobile:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.45rem 0.85rem"
  link-quiet:
    textColor: "{colors.ink}"
  link-quiet-hover:
    textColor: "{colors.accent}"
  nav-link:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.ink}"
  stack-tag:
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.3rem 0.7rem"
  entry-screenshot:
    backgroundColor: "{colors.paper-2}"
    rounded: "{rounded.md}"
  gallery-thumb:
    backgroundColor: "{colors.paper-2}"
    rounded: "{rounded.sm}"
  lightbox:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  year-marker:
    textColor: "{colors.accent}"
    typography: "{typography.title}"
---

# Design System: Alfian Andre Ramadhan, Portfolio

## Overview

**Creative North Star: "Release Notes"**

The site reads like a well-kept product changelog from a careful tech company. Every system he built is a dated release: a title, a meta line, a short first-person note, what it does, a screenshot, what shipped, what it was built with, and a link out. The page is white, the ink is near-black, the secondary text is cool slate, and the only structure is a 1px hairline. One warm orange marks what to do and when things happened; nothing else is colored.

Density is moderate and editorial: generous vertical air between releases, tight measure inside them (44 to 64ch). The hero is type only, with no image, no works list and no card. Below it, every section shares one grammar: a left rail 11rem wide holding a date or a label, and the content column to its right. In the works changelog the year in that rail stays pinned while its releases scroll past; that positional stick is the signature interaction, and nothing else on the page moves except colour on hover.

The voice is first person throughout, and the visual system stays out of its way: no decorative devices, no costume type, no ornament between the reader and the work.

**Key Characteristics:**
- White page (near-black in dark mode), near-black ink, slate secondary, hairline rules only.
- One warm orange, reserved for the primary action, date and year markers, link hover and the mobile header contact.
- One grotesk (Schibsted Grotesk, 400 to 800) with tabular figures for dates; no mono.
- An 11rem rail on the left, content on the right, in every section.
- Sticky year marker in the works changelog; no other motion beyond hover colour.
- 8px radius on buttons and screenshots, 6px on small controls; no shadows, gradients or glass.

## Colors

A monochrome slate paper-and-ink palette with a single warm orange that earns its place by meaning something.

### Primary
- **Release Orange** (`accent`): the primary "Email me" button in the hero and the closing contact section, the year markers in the works rail, the period dates in the experience rail, quiet-link hover, the mobile header contact button, and the selected-language check. At 54% lightness, white button text clears 4.5:1. In dark mode it lifts to **Ember Orange** (`accent-dark`) with near-black text (`on-accent-dark`).
- **Deep Release Orange** (`accent-hover`): hover state of filled orange buttons only. Dark mode hover goes lighter (`accent-hover-dark`), not darker.

### Neutral
- **Paper** (`paper`): the whole page, header included. Pure white in light; **Night Paper** (`paper-dark`) in dark.
- **Paper Tint** (`paper-2`): only as the hover wash behind small icon controls (language switcher, theme toggle, lightbox buttons) and as the placeholder behind a loading screenshot or thumbnail. Never a section band.
- **Ink** (`ink`): names, titles, notes, body emphasis, quiet links at rest.
- **Slate** (`ink-muted`): descriptions, role line, section notes, nav links, list items.
- **Pale Slate** (`ink-subtle`): meta rows, non-date rail labels (Education), footer copy and links, list dashes.
- **Hairline** (`rule`): every divider: header base, section tops, between year groups, between entries, screenshot frames.
- **Strong Hairline** (`rule-strong`): underline colour of quiet links at rest, stack-tag borders, the language dropdown border, scrollbar thumb.

### Named Rules
**The Orange Means Act-or-When Rule.** Orange appears only on the primary action, on date and year markers, on link hover, and on the mobile header contact. A non-date rail label is Pale Slate, never orange. If an orange element is neither something to click nor a point in time, it is wrong.

**The One Primary Per Viewport Rule.** On desktop the header contact is a quiet underlined link so the hero's orange button is the only filled primary in the first viewport. On mobile, where the nav is gone, the header contact becomes the compact orange button.

## Typography

**Display Font:** Schibsted Grotesk (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Schibsted Grotesk (same family)

**Character:** One precise news grotesk does everything, from the 6rem two-line name to the 14px meta row. Hierarchy comes from size, weight (400, 500, 600, 700) and tightening negative tracking as size grows, never from a second family.

### Hierarchy
- **Display** (700, clamp 3.25 to 6rem, 0.95, -0.04em): the name in the hero, broken over two lines. Used once.
- **Headline** (700, clamp 2 to 2.75rem, 1.1, -0.03em): section titles (Works, Experience, Tech Stack) and the closing contact title.
- **Lead** (500, clamp 1.375 to 1.875rem, 1.3, max 32ch, balanced): the first-person pitch under the hero name.
- **Title** (700, clamp 1.5 to 1.875rem, 1.15, -0.025em): release titles and the year markers in the rail. Experience company names step down to 1.25rem 700.
- **Note** (500, 1.25rem, 1.45, max 44ch): the first-person note on each release, in Ink, the most-read line after the title.
- **Body** (400, 1rem, 1.6 to 1.65, max 64ch): descriptions and shipped/experience points, in Slate.
- **Label** (600, 0.875rem): in-entry sub-heads ("What shipped", "Built with"), rail labels, experience periods, stack group names.
- **Meta** (400, 0.875rem, tabular figures): the "sector · role · period · team" row in Pale Slate, dot-separated.

### Named Rules
**The Tabular Dates Rule.** Every year, period and date run in tabular figures so changelog dates align like a ledger.

**The No Kicker Rule.** Nothing sits above a heading. Section titles, release titles and the hero name open their blocks directly; context goes beneath in a note or meta row.

## Layout

A single centred frame (max 76rem, side padding clamp 1 to 4rem) on a 4pt spacing scale. Sections are separated by a hairline top border and generous vertical padding (5 to 6rem); the hero sits on clamp(3, 9vh, 6) rem above and clamp(2.5, 7vh, 4.5) rem below so the first release starts at the fold under a hairline.

**The rail grammar.** Below the hero, every section is a two-column grid: an 11rem rail and a fluid content column, with a 2rem gutter. The rail holds the year (works), the period (experience) or the group name (stack). Section titles and the closing contact title span both columns and start at the page edge, aligned with the hero name; only the content sits in the right column. Content inside the column is capped at 48rem.

**The sticky year.** In the works changelog, releases are grouped by start year, newest first, with undated work last. The year sticks at the header height plus 1.5rem while its releases scroll past. This is positional, not animated.

**Responsive.** At 767px and below the rail collapses into the column: the year, period or label stacks above its content, and the year stops sticking. The header drops its centred nav. Below 380px the header contact label shortens to "Email". Anchored sections land below the sticky 3.5rem header.

## Elevation & Depth

Flat. There are no shadows, gradients, glass or tonal section bands anywhere. Depth is expressed only by 1px hairlines and by the sticky header, which sits on solid Paper with a hairline base. The language dropdown, the one floating surface, is Paper with a Strong Hairline border and no shadow.

### Named Rules
**The Hairline Only Rule.** Structure is drawn with a 1px rule and nothing else. If a surface needs separating, draw a hairline; never a grey band, a shadow or a blur.

## Shapes

Gently squared. Filled buttons and screenshots take an 8px radius; small controls (mobile header contact, stack tags, icon-button hover washes, focus outline, flag chips) take 6px. Screenshots are 16:9, cropped from the top, inside a 1px Hairline frame. List items carry a short 0.5rem horizontal dash instead of bullets. Arrows on links are a drawn 16px stroke chevron-arrow at text size.

## Components

### Buttons
Confident and few: there is one kind of filled button.
- **Shape:** gently squared (8px).
- **Primary:** Release Orange fill, white text at 1rem 600, 0.75rem by 1.25rem padding, a trailing arrow. Used for "Email me" in the hero and the closing contact section.
- **Hover / Focus:** fill deepens to Deep Release Orange over 120ms; focus is a 2px orange outline 3px off the element with a 6px radius.
- **Mobile header contact:** the same orange fill at label size (0.875rem 600), 6px radius, 0.45 by 0.85rem padding.

### Links
- **Quiet link:** Ink text at 500 with a 1px Strong Hairline underline 0.22em below. On hover both text and underline turn Release Orange. Used for LinkedIn, GitHub, the email address, the desktop header contact and each release's "visit" link (with the arrow).
- **Footer link:** Pale Slate, no underline, hover to Ink.

### Chips
- **Stack tag:** transparent, 1px Strong Hairline border, 6px radius, 0.3 by 0.7rem padding, 0.875rem 500 Ink. Static, no hover.

### Navigation
The sticky header is three-part: the wordmark left, three nav links centred (0.875rem 500 Slate, hover to Ink), and the language switcher, theme toggle and contact on the right. Icon controls are transparent with a Paper Tint wash and Ink colour on hover. On mobile the centred nav is removed and the contact becomes the orange button.

### Release entry (signature)
The unit of the changelog, in the content column right of the year rail, max 48rem, separated by hairlines:
1. Title (Title style, Ink).
2. Meta row: sector, role, period, team, dot-separated, tabular, Pale Slate.
3. First-person note (Note style, Ink).
4. Description (Body, Slate).
5. Screenshot gallery (below), or a single screenshot (16:9, 8px, Hairline frame) for a work without one (EPIC).
6. "What shipped" label and a dash list (Body, Slate).
7. "Built with" label inline with a dot-separated stack line.
8. Visit link: quiet link showing the host name and an arrow.

### Screenshot gallery
Lets a reviewer see three to six pages of a system without leaving the page. Images live at `public/img/<slug>/<shot>.webp`, the order is `shots` in `app/utils/works.js`, and every image has a one-line caption in i18n (`projects.<slug>.shots`).
- **Main shot:** the first image, 16:9, 8px, Hairline frame, cropped from the top, `zoom-in` cursor. It is a button that opens the lightbox at that image.
- **Filmstrip:** a row of six fixed 16:9 slots under the main shot (6px radius, Hairline frame), so thumbnails keep one size whether a work has three images or six. On hover only the frame turns Strong Hairline. It scrolls sideways on narrow screens.
- **Lightbox:** a native modal `<dialog>` that fills the viewport on solid Paper, with no translucent backdrop, blur or shadow. A top bar holds the tabular counter (`2 / 6`, Pale Slate) and a close button. A bottom bar holds the previous and next arrows and the caption (Body 500, Ink, centred). Both bars are separated from the image by a hairline. Images are contained, never cropped, inside a Hairline frame.
- **Motion:** none. Previous, next and the arrow keys swap the image instantly. On touch the track is a native scroll-snap strip, so a swipe follows the finger and nothing animates on its own. Esc closes it and focus returns to the thumbnail that opened it. The page behind does not scroll while it is open.

### Experience and stack rows
The same rail grammar: a 0.875rem 600 rail label (orange for a period, Pale Slate for a non-date label such as Education; Ink for stack group names), content to the right, hairlines between rows.

## Do's and Don'ts

### Do:
- **Do** put every section below the hero on the 11rem rail plus content column, with the section title starting at the page edge.
- **Do** keep orange to the primary action, date and year markers, link hover and the mobile header contact.
- **Do** separate everything with 1px hairlines on plain Paper.
- **Do** set dates, years and periods in tabular figures.
- **Do** write each release with a first-person note under its meta row.
- **Do** limit motion to colour change on hover (120ms, cubic-bezier(0.16, 1, 0.3, 1)).

### Don't:
- **Don't** put a kicker or eyebrow label above any heading.
- **Don't** colour a non-date rail label orange; use Pale Slate.
- **Don't** add a second filled primary to the desktop first viewport; the header contact stays a quiet link there.
- **Don't** use grey section bands, shadows, gradients or glass.
- **Don't** slide, fade or animate anything into view; the sticky year is positional only.
- **Don't** introduce a second typeface or a monospace costume for dates or code.
- **Don't** round beyond 8px.
