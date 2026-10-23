---
name: Kinetic Growth Matrix
colors:
  surface: '#0a1326'
  surface-dim: '#0a1326'
  surface-bright: '#31394e'
  surface-container-lowest: '#050e21'
  surface-container-low: '#131b2f'
  surface-container: '#171f33'
  surface-container-high: '#222a3e'
  surface-container-highest: '#2c3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283045'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#a0e4ff'
  on-secondary: '#003544'
  secondary-container: '#00cefe'
  on-secondary-container: '#005469'
  tertiary: '#2ae370'
  on-tertiary: '#003916'
  tertiary-container: '#007e38'
  on-tertiary-container: '#c1ffc6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#b8eaff'
  secondary-fixed-dim: '#54d5ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004d61'
  tertiary-fixed: '#65ff8f'
  tertiary-fixed-dim: '#2ae370'
  on-tertiary-fixed: '#00210a'
  on-tertiary-fixed-variant: '#005323'
  background: '#0a1326'
  on-background: '#dae2fd'
  surface-variant: '#2c3449'
typography:
  display-hero:
    fontFamily: Manrope
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-xl:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a premium, authoritative, and future-forward digital marketing presence. Rooted in the themes of ascending momentum, analytical precision, and digital transformation, the aesthetic merges dark computational sophistication with vivid chromatic energy.

### Brand Personality & Emotional Impact
- **Dynamic Authority:** High contrast, deliberate density, and confident structural grids position the agency as an undeniable growth engine.
- **Dimensional Velocity:** Subtle 3D lighting, ambient glow gradients, and layered glass cards evoke forward trajectory, scaling upward like performance metrics.
- **Technological Precision:** Pristine typography, disciplined spacing rhythms, and luminous accents convey cutting-edge operational performance and transparent ROI.

### Aesthetic Paradigm: Dimensional Tech Glassmorphism
The visual architecture blends dark glassmorphic surfaces (`#0B1730` at varying opacities), gradient-bordered containers, and directional light accents against a deep-space navy foundation (`#050D20`). High-impact calls to action and growth metrics radiate using neon and electric spectrums (electric blue to cyan, emerald to neon green).

## Colors

The palette leverages a dark-mode-first framework anchored in deep oceanic depths and energized by laser-sharp gradients of electric blues and radiant growth greens.

### Core Swatches
- **Primary (`#2563EB` - Electric Blue):** Drives key visual anchors, active states, and dominant visual weight.
- **Secondary (`#00CFFF` - Cyan Accent):** Infuses radiant energy into gradients, borders, and interactive hovers.
- **Tertiary (`#52FF88` - Neon Green):** Signifies conversion, upward metric trajectories, success indicators, and growth highlights, supported by `#16A34A` (Emerald Green) for depth and legibility.
- **Neutral Surface (`#050D20` - Deep Navy):** The structural floor of the canvas, complemented by `#0B1730` (Midnight Blue) for elevated glass planes.

### Functional & Contrast Roles
- **Text Primary:** `#FFFFFF` (Crisp White) provides contrast ratios meeting WCAG AAA requirements against dark surfaces.
- **Text Secondary & Body:** `#94A3B8` (Cool Slate Slate-400) and `#CBD5E1` for extended readability without visual fatigue.
- **Light Contrast Insets:** `#F5F8FC` is reserved strictly for high-contrast presentation cards or isolated showcase modules requiring an inverted tactile canvas, pairing with `#475569` for deep slate copy.
- **Luminescent Gradients:**
  - *Growth Vector:* `linear-gradient(135deg, #2563EB 0%, #00CFFF 50%, #52FF88 100%)`
  - *Electric Surface:* `linear-gradient(180deg, rgba(37, 99, 235, 0.15) 0%, rgba(11, 23, 48, 0.6) 100%)`
  - *Glass Rim:* `linear-gradient(135deg, rgba(0, 207, 255, 0.4) 0%, rgba(82, 255, 136, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)`

## Typography

The typography couples the architectural geometry of **Manrope** for statements, headlines, and data callouts with the utilitarian clarity of **Inter** for UI controls and editorial paragraphs.

### Editorial Hierarchy & Rhythm
- **Headings (Manrope):** Tight tracking (`-0.03em` to `-0.01em`) and aggressive weights (700/800) create modern digital agency authority. High-value words within hero sections often employ text gradients fading from pure `#FFFFFF` into `#00CFFF`.
- **Body & Controls (Inter):** Generous line heights (`1.5` to `1.6`) ensure long-form marketing proposals and analytical documentation remain effortlessly scannable.
- **Eyebrows & Micro-Badges:** Rendered in `label-sm` with uppercase casing, increased letter spacing (`0.05em`), and cyan/neon coloration to direct user flow.

## Layout & Spacing

A 12-column fluid grid system governs screen real estate, scaling from ultra-wide enterprise dashboards down to single-column mobile viewports.

### Breakpoint Structure
- **Desktop (1200px+):** 12 columns, 1.5rem (24px) gutters, 2.5rem to 4rem margins, capped at a maximum content width of 1440px.
- **Tablet (768px - 1199px):** 8 columns, 1.25rem (20px) gutters, 2rem margins. Complex horizontal arrays compress into 2-column card pairs.
- **Mobile (< 768px):** 4 columns, 1rem (16px) gutters, 1.25rem (20px) margins. Elements reflow linearly with horizontal swipe carousels for metrics and services.

### Spacing Principles
Component internal density maintains an intentional 8px base rhythm. Cards favor generous internal padding (`space-lg` to `space-xl`) to establish an open, high-end agency environment, avoiding cluttered data visualization.

## Elevation & Depth

Visual hierarchy relies on dynamic light diffusion, semi-transparent frosted surfaces, and directional gradient highlights rather than heavy muddy drop shadows.

### Atmospheric Tiers
1. **Canvas Surface (Base Level 0):** `#050D20` with ambient radial glows (`radial-gradient(circle at 50% 0%, rgba(37,99,235,0.18), transparent 70%)`).
2. **Glass Planes (Level 1 - Panels & Containers):** `#0B1730` filled at 65% opacity with `backdrop-filter: blur(16px)` and a 1px border illuminated by `rgba(255, 255, 255, 0.08)`.
3. **Elevated Dynamic Cards (Level 2):** `#0B1730` at 85% opacity with `backdrop-filter: blur(24px)`. Drops a diffused ambient shadow: `0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 20px -5px rgba(0, 207, 255, 0.12)`.
4. **Active & Floating Overlays (Level 3 - Modals, Popovers, Active Nav):** Solid or 90% Midnight blue featuring an active neon perimeter rim: `box-shadow: 0 0 30px rgba(82, 255, 136, 0.25), 0 10px 25px rgba(0, 0, 0, 0.8)`.

### Lighting & Rim Light
Cards utilize faux top-down lighting: a subtle 1px top border gradient transitioning from `#00CFFF` (30% opacity) to completely transparent along the sides and bottom.

## Shapes

The geometric architecture balances clean structural rigidity with welcoming organic curves. 

- **Primary Geometry:** Base UI components (standard inputs, standard cards, contextual popovers) use `roundedness: 2` (0.5rem / 8px).
- **Hero Containers & Feature Cards:** Employ `rounded-xl` (1.5rem / 24px) to emphasize dimensional depth and frame interior content cleanly.
- **Status Indicators, Badges & Pills:** Retain full pill styling (`rounded-full` / 9999px) to contrast against rectilinear card structures.
- **Masking:** Media masks and interactive icon plates feature squircle or rounded continuous curvatures to echo the energetic curves seen in modern agency brand marks.

## Components

### Buttons
- **Primary Action (Conversion / CTA):** Filled with the Kinetic Growth gradient (`#2563EB` to `#00CFFF`), Crisp White (`#FFFFFF`) bold text, and a soft outer neon bloom (`box-shadow: 0 4px 20px rgba(0, 207, 255, 0.35)`). On hover, subtle upward translation (`-2px`) and brightness increase.
- **Secondary (Outline / Glass):** Transparent fill with a 1px gradient border (`#00CFFF` to `#52FF88`), white text, and a semi-transparent cyan background flash on hover (`rgba(0, 207, 255, 0.08)`).
- **Ghost Action:** Text-only in `#94A3B8`, transitioning to `#52FF88` on interaction with an accompanying animated directional arrow icon.

### Cards (Glassmorphism & Growth Tiles)
- **Standard Service Card:** Layered on Level 1 glass (`#0B1730` at 70% opacity, 16px blur) with 1px top rim highlight. 
- **Featured / Case Study Card:** Level 2 elevation featuring interactive gradient borders that ignite from cool cyan to vivid neon green on hover. Includes an embedded metric pill (`+340% Growth`) styled with a muted emerald background (`rgba(22, 163, 74, 0.2)`) and neon green text (`#52FF88`).

### Input Fields & Controls
- **Form Text Fields:** Height 48px, background `#071026`, border 1px solid `rgba(255, 255, 255, 0.12)`, radius 8px, text `#FFFFFF`, placeholder `#64748B`.
- **Focused State:** Border transitions to solid `#00CFFF` with a diffuse outer ring `0 0 0 3px rgba(0, 207, 255, 0.2)`.
- **Checkboxes & Radios:** 20px controls with a midnight blue track, switching on active state to a vivid `#2563EB` fill stamped with an emerald/neon checkmark.

### Service Chips & Category Tags
- Pill-shaped (`rounded-full`), padding 6px 14px, typography `label-sm`.
- Background set to `rgba(37, 99, 235, 0.12)` with a delicate 1px border `rgba(0, 207, 255, 0.25)`, text in `#00CFFF`. When active, fills with solid `#2563EB` and white typography.

### Specialized Agency Modules
- **Growth Metric Banner:** Wide dark container housing key stats (`$12M+ Generated`, `450% Average ROI`). Numbers rendered in `Manrope ExtraBold` using neon green `#52FF88` with crisp white sub-labels.
- **Service Navigation Pills:** Floating segmented control with an active indicator moving fluidly under items, powered by an underlying electric blue glow.