# sa/acc — Design Document

## Design Philosophy

Minimal, dark, text-forward. The design draws inspiration from euacc.com's manifesto-style approach but adapted for a dark aesthetic. Content is the interface — no decorative images, no complex layouts, just clean typography and generous whitespace.

## Layout

Single-column, centered layout with a maximum width of `max-w-3xl` (48rem / 768px). This width is consistent across the header, manifesto content, and footer for visual cohesion.

### Page Structure

```
┌─────────────────────────────────┐
│  Header (fixed, glass-nav)      │
│  [sa/acc]          [EN] [Join]  │
├─────────────────────────────────┤
│                                 │
│         sa/acc (hero)           │
│     Accelerating AI & Tech      │
│      in Saudi Arabia            │
│                                 │
│    Intro paragraph (centered)   │
│                                 │
│  1  Build                       │
│     Description...              │
│                                 │
│  2  Research                    │
│     Description...              │
│                                 │
│  3  Share                       │
│     Description...              │
│                                 │
│  4  Connect                     │
│     Description...              │
│                                 │
│  5  Open                        │
│     Description...              │
│                                 │
│  6  Local Impact, Global Reach  │
│     Description...              │
│                                 │
│  ┌─────────────────────────┐    │
│  │  Disclaimer box         │    │
│  └─────────────────────────┘    │
│                                 │
│   [Join Community →]            │
│   [Follow on X]                 │
│                                 │
├─────────────────────────────────┤
│  Footer                         │
│  © 2026    X / Discord / GitHub │
└─────────────────────────────────┘
```

## Color Palette

Dark mode only. No light theme.

| Token              | Value     | Usage                          |
|--------------------|-----------|--------------------------------|
| `--bg`             | `#0F0F0F` | Page background                |
| `--surface`        | `#171717` | Card/container backgrounds     |
| `--surface-highlight` | `#1F1F1F` | Hover states              |
| `--border`         | `#252525` | Borders, dividers              |
| `--text-main`      | `#FFFFFF` | Primary text, headings         |
| `--text-muted`     | `#999999` | Body text, descriptions        |
| `--text-dim`       | `#6E6E6E` | Tertiary text, disclaimers     |
| Numbers            | `#333333` | Manifesto point numbers        |

## Typography

| Context        | Font                | Weight    | Size              |
|----------------|---------------------|-----------|-------------------|
| English        | Inter               | 300–700   | —                 |
| Arabic         | Noto Kufi Arabic    | 400–900   | —                 |
| Hero title     | —                   | Bold      | 6xl / 8xl (md)    |
| Subtitle       | —                   | Medium    | xl / 2xl (md)     |
| Section title  | —                   | Bold      | xl / 2xl (md)     |
| Body text      | —                   | Regular   | base              |
| Intro          | —                   | Regular   | lg / xl (md)      |
| Disclaimer     | —                   | Regular   | sm                |
| CTA buttons    | —                   | Medium    | sm                |

Both fonts are loaded from Google Fonts with `display=swap` for performance.

## Components

### Header
- Fixed position, 72px height
- Glass morphism: `backdrop-filter: blur(16px)` with semi-transparent background
- Left: "sa/acc" wordmark (bold text, no logo image)
- Right: Language toggle + "Join" pill button (white bg, black text)
- No mobile hamburger needed — the layout is minimal enough

### Manifesto
- Hero: Large "sa/acc" with `text-gradient` (white to gray), centered
- Intro: Centered paragraph in muted text
- Points: Numbered list with large dim numbers (left) and title + body (right), using `flex gap-6`
- Disclaimer: Bordered rounded box, centered dim text
- CTAs: Primary (white pill) + Secondary (bordered pill), centered

### Footer
- Top border separator
- Left: Copyright text
- Right: Social links (X/Twitter, Discord, GitHub)
- Responsive: stacks vertically on mobile

### LangToggle
- Shows "EN" when in Arabic mode, "عربي" when in English mode
- Triggers page reload with `localStorage` language swap

## Visual Effects

- **Grid background**: Fixed SVG-like grid pattern (50px cells), fades to transparent at 40%, 15% opacity
- **Text gradient**: `linear-gradient(135deg, #FFFFFF 0%, #777777 100%)` on the hero title
- **Glass nav**: Semi-transparent background with backdrop blur

## Responsive Behavior

The single-column layout naturally adapts to mobile. Key breakpoints:

- **Mobile (default)**: Full-width with `px-6` padding, hero text at `text-6xl`
- **Desktop (md+)**: `px-10` padding, hero text scales to `text-8xl`, CTAs go horizontal (`sm:flex-row`)

## RTL Support

- `<html dir="rtl">` set by default (Arabic) via inline script before render
- Language toggle switches between `rtl`/`ltr`
- CSS classes `lang-ar`/`lang-en` control visibility of bilingual spans
- Manifesto numbers align to the end (`text-end`) which flips correctly in RTL
- CTA arrow icon uses `rtl:rotate-180` to point in the correct direction

## Accessibility

- Semantic HTML: `<nav>`, `<main>`, `<footer>`, `<section>`, `<h1>`, `<h2>`
- Grid background marked `aria-hidden="true"`
- Focus styles: 2px white outline with offset
- Reduced motion: All animations and transitions disabled via `prefers-reduced-motion`
- External links: `target="_blank" rel="noreferrer"`
