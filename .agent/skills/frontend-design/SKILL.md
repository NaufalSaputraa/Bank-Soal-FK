---
name: frontend-design
description: Guidelines for high-aesthetic glassmorphic UI/UX in BankSoal FK using Vanilla CSS.
---

# Frontend Design & Visual Aesthetic Guidelines — BankSoal FK

Use this skill when modifying `index.html`, `app/style.css`, or rendering dynamic components in `app/app.js`.

## Core Design Principles

1. **Glassmorphism & Modern Dark Theme**:
   - Use HSL colors defined in `app/style.css`.
   - Subtle semi-transparent backgrounds with `backdrop-filter: blur(...)`.
   - Thin, luminous borders with low opacity (`rgba(255, 255, 255, 0.08)`).

2. **Typography Hierarchy**:
   - Primary: `Inter`, system-ui, -apple-system, sans-serif.
   - Code & Meta Badges: `JetBrains Mono`, monospace.
   - Distinct heading sizes (`h1`, `h2`, `h3`) with crisp line-heights and visual weight.

3. **Interactive Components**:
   - Micro-transitions for `:hover`, `:active`, and focus states.
   - Answer cards (`.q-opt`) with clear states: default, hovered, selected, correct (`.correct`), incorrect (`.wrong`), and locked (`.locked`).
   - Progress indicators with smooth CSS `transition: width 0.3s ease`.

4. **Mobile Responsiveness & Accessibility**:
   - Breakpoint at `<= 768px` triggers collapsible sidebar drawer.
   - Touch targets must be at least `44px` high for mobile usability.
   - Adequate color contrast ratio for medical reading.
