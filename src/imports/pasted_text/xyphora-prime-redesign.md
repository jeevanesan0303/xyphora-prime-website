# ⚡ Xyphora Prime — ULTRA-PREMIUM 3D Website
## Complete Redesign Prompt V2 — Figma / AI Design Tools

---

> **CRITICAL DESIGN DIRECTIVE:**
> The previous design was a generic dark-blue template. This is a full replacement.
> Target aesthetic: **Awwwards Site of the Day** quality.
> Think: **Resend.com × Linear.app × Vercel** — but darker, more dramatic, with real 3D depth.
> Every element must feel crafted, not generated.

---

## 🎨 REDESIGNED COLOR SYSTEM

**Previous palette was too "corporate navy blue" — completely replace it.**

| Token | Value | Note |
|---|---|---|
| `--void` | `#03020A` | True near-black with purple undertone (NOT navy blue) |
| `--deep` | `#07051A` | Section bg — feels like deep space |
| `--glass` | `rgba(255,255,255,0.03)` | Ultra-subtle glass |
| `--glass-mid` | `rgba(255,255,255,0.06)` | Card fill |
| `--electric` | `#4DFFEB` | Primary neon — electric cyan/teal (NOT pure blue) |
| `--plasma` | `#B06FFF` | Secondary — violet plasma |
| `--solar` | `#FF6B35` | Warm accent — used sparingly for contrast pop |
| `--gradient-core` | `135deg, #4DFFEB 0%, #B06FFF 100%` | Brand gradient |
| `--glow-electric` | `rgba(77,255,235,0.15)` | Glow layer |
| `--glow-plasma` | `rgba(176,111,255,0.12)` | Glow layer |
| `--text-1` | `#F0EEFF` | Almost white with purple warmth |
| `--text-2` | `rgba(240,238,255,0.55)` | Secondary text |
| `--text-3` | `rgba(240,238,255,0.28)` | Muted/labels |
| `--border` | `rgba(77,255,235,0.12)` | Subtle neon border |
| `--border-hot` | `rgba(77,255,235,0.4)` | Hover/active border |

**Backgrounds must use these, not flat dark navy:**
- Base: `#03020A` — near-black, slightly purple-tinted
- Behind hero: radial gradient from `rgba(176,111,255,0.18)` top-center, fading to void
- Behind services: radial from `rgba(77,255,235,0.1)` bottom-left
- Noise texture: 4% film grain over entire canvas

---

## ✍️ TYPOGRAPHY — COMPLETE REPLACEMENT

**Previous fonts looked default/generic. Replace entirely:**

| Role | Font | Style | Size |
|---|---|---|---|
| Display/Hero | **Bebas Neue** | 400 (ultra-condensed) | 110–140px |
| Sub-display | **Syncopate** | 700 | 48–64px |
| Section H2 | **Outfit** | 700 | 44–52px |
| H3 Card titles | **Outfit** | 600 | 20–24px |
| Body | **Instrument Sans** | 400 | 16–18px |
| Mono/Labels | **JetBrains Mono** | 400 | 12–13px |
| Nav | **Outfit** | 500 | 14px — tracked +0.08em |

**Hero headline must use Bebas Neue at enormous scale — tall, dramatic, cinematic.**

---

## 🌐 COMPLETE PAGE REDESIGN — SECTION BY SECTION

---

### SECTION 0 — LOADING SCREEN (New addition)

Full-screen black (`#03020A`).
Center: "SN" monogram built from two overlapping hexagons.
Left hexagon: electric cyan outline. Right hexagon: plasma purple outline.
Overlap: gradient fill.
Below monogram: "XYPHORA PRIME" in JetBrains Mono, letter-spacing 0.5em, white.
A thin neon line sweeps left-to-right under the text (progress bar).
Fade out to reveal the site.

---

### SECTION 1 — NAVIGATION

**Height:** 72px fixed. Blur background.

**Design:**
- Background: `rgba(3,2,10,0.7)` + `backdrop-filter: blur(32px) saturate(180%)`
- Bottom border: `1px solid rgba(77,255,235,0.08)`
- Left: "XP" hexagon logo (24px) + "Xyphora Prime" in Outfit 600 white

**Logo Mark Detail:**
- Hexagon shape, 32×32px
- Gradient fill from `#4DFFEB` (top) to `#B06FFF` (bottom)
- Inner white lightning bolt / diamond shape
- Soft outer glow: `0 0 16px rgba(77,255,235,0.5)`

- Center nav links: Home · Services · About · Team · Process · Contact
  - Font: Outfit 500, 14px, `--text-2`, tracking 0.04em
  - Active: white + thin electric underline (2px, gradient)
  - Hover: fade to white in 0.2s

- Right: "Start a Project" button
  - Style: thin electric border (`1px solid #4DFFEB`), transparent fill
  - Text: Outfit 600, white, 13px
  - Inner glow on hover: background fills with `rgba(77,255,235,0.08)`
  - NO solid fill button — refined, not aggressive

---

### SECTION 2 — HERO (Full redesign — most important section)

**Height:** 100vh. No split layout — full-width cinematic.

**Background layer stack (back to front):**
1. Base: `#03020A`
2. Large blurred ellipse top-center: `rgba(176,111,255,0.2)`, 1200×600px, blur 180px
3. Smaller ellipse left: `rgba(77,255,235,0.12)`, 600×400px, blur 120px
4. Horizontal faint grid lines (0.5px, `rgba(255,255,255,0.04)`) — like graph paper
5. Floating particle field: 40–60 tiny dots (1–2px) scattered randomly, very low opacity, slow upward drift

**Center content (centered, not two-column):**

Top label:
```
[ ✦  WE BUILD DIGITAL FUTURES  ✦ ]
```
Style: JetBrains Mono, 11px, `--electric` color, letter-spacing 0.35em
Inside a pill: border `1px solid rgba(77,255,235,0.3)`, bg `rgba(77,255,235,0.05)`
Subtle pulse glow animation on the border

Main headline — 3 lines, Bebas Neue, 130px, line-height 0.92:
```
XYPHORA
PRIME
CRAFTS.
```
Line 1 "XYPHORA": white
Line 2 "PRIME": gradient text (`#4DFFEB` → `#B06FFF`)
Line 3 "CRAFTS.": white, with the period in `#4DFFEB`

Below headline — sub line in Instrument Sans 18px, `--text-2`, max-width 560px, center:
```
Web · Mobile · AI · Cloud · IoT · Design
Premium digital solutions from a team of 6 specialists.
Sri Lanka · Global Reach.
```

CTA Row:
- Button 1: "Start a Project →" — solid gradient fill (`#4DFFEB` to `#B06FFF`), black text, Outfit 600 16px, 52px height, 28px radius, box-shadow `0 0 40px rgba(77,255,235,0.35)` — this GLOWS
- Button 2: "See Our Services" — ghost, electric border, white text

Stats strip below CTAs (3 items, JetBrains Mono):
- `[ 50+ Projects ]` `[ 6 Specialists ]` `[ Sri Lanka → Worldwide ]`
Each in a tiny glass chip, separated by `·`

**3D Hero Element:**
Position: Absolute, right side, 40% of viewport width, centered vertically.
NOT a generic sphere. Use this instead:

A **3D rotating icosahedron** (20-faced geometric shape):
- Wireframe style: edges in electric cyan `#4DFFEB`, 1.5px
- Faces: ultra-transparent `rgba(77,255,235,0.03)` fill
- Size: 420px × 420px
- Rotation: slow continuous Y-axis spin (20s loop)
- Inner core: smaller solid sphere, gradient from `#B06FFF` to `#4DFFEB`, blurred slightly
- Outer ring: thin orbital ring (ellipse) around the shape, electric cyan, dashed stroke, 30° tilt
- Glow: large radial bloom behind it, `rgba(77,255,235,0.15)`, 500px diameter

Floating around the icosahedron — 4 small glass cards (these are actual feature chips):
```
Top-left:   [ 🌐  Web Dev     ]
Top-right:  [ 📱  Mobile Apps ]
Bot-left:   [ 🤖  AI Solutions]
Bot-right:  [ ☁️  Cloud & IoT ]
```
Each card: 130×44px, glass bg, electric border, Outfit 500 13px white, icon in electric.
Each floats at a slightly different Z, with a 3–4px drop shadow.
Animation: each card floats independently (up/down sin wave, different phase).

**Scroll indicator:** Bottom center — "SCROLL" in JetBrains Mono 10px, letter-spacing 0.3em, muted color. Thin animated line extending downward that loops.

---

### SECTION 3 — SERVICES (Complete redesign)

**Previous design:** Plain dark cards in a grid. Too flat, too basic.

**New design: Bento Grid with size hierarchy**

Headline block (left-aligned, not centered):
- Label: "WHAT WE BUILD" — JetBrains Mono, electric, tracking 0.3em
- H2: "9 Services. One Team." — Outfit 700, 52px, white

**Bento grid layout (1440px):**
```
┌──────────────────┬────────────┬────────────┐
│                  │  Mobile    │  Software  │
│  Web Development │  App Dev   │   Dev      │
│   (LARGE card)   │            │            │
│                  ├────────────┴────────────┤
│                  │   UI/UX Design (wide)   │
├────────┬─────────┼────────────┬────────────┤
│  Cloud │   AI &  │  Digital   │  IoT       │
│Services│Chatbots │ Marketing  │ Systems    │
├────────┴─────────┴────────────┴────────────┤
│         IT Consulting (full width)         │
└────────────────────────────────────────────┘
```

**Large card (Web Development) — featured card:**
- Size: spans 2 rows left side (~500×380px)
- Background: gradient from `rgba(77,255,235,0.08)` to `rgba(176,111,255,0.05)`
- Border: `1px solid rgba(77,255,235,0.25)` — more visible than others
- Top-right corner: "★ CORE SERVICE" badge in electric
- Large 3D icon: globe with wireframe lines, rendered as SVG/3D, 80px, electric cyan
- Title: Outfit 700, 26px, white
- Description: full 3-line description
- Bottom: "Explore →" electric text link + a subtle floating cursor graphic

**Medium cards (Mobile, Software, UI/UX, Cloud, AI):**
- Size: ~280×200px
- Background: `rgba(255,255,255,0.03)`
- Border: `1px solid rgba(255,255,255,0.07)` → on hover `rgba(77,255,235,0.3)`
- Icon: 36px, colored (each service gets a unique color from the palette)
- Title: Outfit 600, 18px
- Description: 2 lines, `--text-2`
- Hover: card lifts `translateY(-6px)`, border glows, icon gets a soft glow bloom

**Small/accent cards:**
- Full-width IT Consulting bar: horizontal layout, icon left, text center, arrow right
- Background: very subtle gradient stripe

**Service color coding (icons):**
- Web Dev: `#4DFFEB` electric
- Mobile: `#B06FFF` plasma
- Software: `#4DFFEB`
- AI & Chatbots: `#FF6B35` solar (warm pop)
- UI/UX: `#B06FFF`
- Cloud: `#4DFFEB`
- Digital Marketing: `#FF6B35`
- IoT: `#B06FFF`
- IT Consulting: white

---

### SECTION 4 — ABOUT / WHO WE ARE (Redesigned)

**Previous had a code terminal block — keep it but upgrade it massively.**

Layout: 50/50 split

**Left: Interactive terminal card (UPGRADED)**

Terminal window: 580×420px
- Title bar: 3 colored dots (red/yellow/green), "terminal — xyphora" in JetBrains Mono muted
- Background: `rgba(0,0,0,0.6)` — darker than the page
- Border: `1px solid rgba(77,255,235,0.15)`
- Corner radius: 16px
- Box shadow: `0 32px 80px rgba(0,0,0,0.6)`, `0 0 0 1px rgba(77,255,235,0.1)`

Terminal content (JetBrains Mono 13px):
```javascript
$ whoami

const agency = {
  name:     "Xyphora Prime",
  founded:  "2024",
  location: "Sri Lanka 🇱🇰",
  reach:    "Global 🌍",
  team:     6,
  stack: [
    "React", "Next.js", "Flutter",
    "Node.js", "Python", "AWS",
    "Figma", "AI/ML", "IoT"
  ],
  mission: "Build. Innovate. Elevate."
};

▶ Ready to build your future_█
```

Syntax highlighting:
- Keywords (`const`): `#B06FFF` plasma
- Strings (`"Xyphora Prime"`): `#4DFFEB` electric
- Numbers: `#FF6B35` solar
- Comments: `rgba(240,238,255,0.35)`
- Cursor `█`: blinking, electric

Below terminal: 2×2 stat chips
`[ 9+ Services ]` `[ 100% Dedication ]`
`[ 24/7 Support ]` `[ ∞ Scalability ]`

**Right: About text (UPGRADED)**

- Label: "ABOUT US" — JetBrains Mono, electric, tracking 0.3em
- H2: "Who We Are" — Outfit 700, 48px. "Are" in gradient
- Body: 2 paragraphs, Instrument Sans 17px, line-height 1.75
- 4 value cards in 2×2 grid:
  ```
  [💡 Innovation]    [⭐ Quality    ]
  [📈 Scalability]   [🎧 Support    ]
  ```
  Each: glass bg, gradient icon bg, title + 1-line sub
  More refined than the previous design — use `rgba(255,255,255,0.04)` bg, electric border on hover

---

### SECTION 5 — WHY CHOOSE US (Full redesign)

**Previous: generic stat boxes + card grid. Very boring.**

**New: Asymmetric feature showcase**

Headline (centered):
- Label: "OUR ADVANTAGE"
- H2: "Why Xyphora Prime?" — "Xyphora Prime" in gradient

**Stats band — redesigned:**
Instead of flat number boxes, use a horizontal ticker/marquee strip:
```
9+ SERVICES  ·  100% DEDICATION  ·  24/7 SUPPORT  ·  ∞ SCALABILITY  ·  6 EXPERTS  ·
```
This scrolls infinitely left in a neon-bordered strip.
Font: Bebas Neue 28px, colors alternating between white and electric.
Background: `rgba(77,255,235,0.04)`, top/bottom borders `1px solid rgba(77,255,235,0.15)`.

**6 Feature cards in 3×2 grid:**

Each card is more premium:
- Size: ~400×180px
- Left: 48×48px icon container (gradient bg, 14px radius, icon white 24px)
- Right: title + description
- Bottom right: faint large icon ghost (60px, 8% opacity) as decorative background element
- Hover: thin electric top border accent appears (3px), card brightens slightly

Features:
1. ⚡ Modern & Scalable — Future-ready tech stack
2. 🎨 Creative UI/UX Design — Pixel-perfect interfaces
3. 🎯 Business-Focused Dev — Built to solve real problems
4. 🚀 Future-Ready Tech — Latest frameworks & AI
5. 🤝 Reliable Support — Post-launch partnership
6. 💰 Startup-Friendly — Enterprise quality, accessible pricing

---

### SECTION 6 — PORTFOLIO (CRITICAL FIX)

**Previous issue: awkward "no projects" text. Replace entirely.**

**New approach: "Coming Soon" done beautifully.**

Section headline:
- Label: "OUR WORK"
- H2: "Built to Impress." — white, Outfit 700

Below headline, a full-width glass panel:
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   🚧                                               │
│                                                     │
│   Portfolio in Progress                             │
│                                                     │
│   Our team is currently crafting groundbreaking    │
│   projects. The showcase launches soon.            │
│                                                     │
│   [ ✉  Get Notified When We Launch ]               │
│                                                     │
│   ─────────────────────────────────                │
│   Meanwhile — explore what we build:               │
│                                                     │
│   [ Web Dev ] [ Mobile ] [ AI ] [ Design ] [ IoT ] │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Panel design:**
- 800px wide, centered
- Background: `rgba(255,255,255,0.03)`, `backdrop-filter: blur(20px)`
- Border: `1px dashed rgba(77,255,235,0.2)` — dashed for "work in progress" feel
- Corner radius: 24px
- 🚧 replaced with a 3D animated hourglass / construction SVG in neon
- Title: Outfit 700, 32px, white
- Sub text: Instrument Sans 17px, `--text-2`
- "Get Notified" button: electric outline button
- Service tags: glass pills in a row

**Background behind this section:**
3 blurred geometric shapes floating — a triangle (electric), a circle (plasma), a square (rotated 45°) — all wireframe, very faint. Gives depth and visual interest even without real projects.

**NO "Our Work is waste" or awkward placeholder text anywhere.**

---

### SECTION 7 — PROCESS (Complete redesign)

**Previous: plain numbered circles in a row. Very generic.**

**New: 6-step card grid with 3D depth numbers**

Headline (centered):
- Label: "HOW WE WORK"
- H2: "Our Working Process" — "Process" in gradient

**6 steps in 3×2 card grid (replaces the horizontal row):**
Matching the JK Infotech reference but far more premium:

Each step card:
- Size: ~380×220px
- Background: `rgba(255,255,255,0.03)` → hover `rgba(255,255,255,0.06)`
- Border radius: 20px
- Top-left: small icon (36px, unique color)
- Top-right: HUGE ghost step number (like "01") — JetBrains Mono, 72px, `rgba(255,255,255,0.05)` — barely visible, purely decorative
- Center: "Step 0X" label in electric, Outfit 500 12px
- Below: Step title, Outfit 700 20px white
- Below: Description, Instrument Sans 15px, `--text-2`, 2–3 lines

Steps:
1. 💬 Consultation — Deep dive into your goals and requirements
2. 📋 Planning — Roadmap, timeline, technology stack
3. 🎨 UI/UX Design — Wireframes, prototypes, brand identity
4. 💻 Development — Clean, scalable, tested code
5. 🧪 Testing & QA — Performance, security, cross-device
6. 🚀 Launch & Support — Deploy, monitor, maintain

Connecting element: thin curved arrow between cards (purely decorative, electric, 0.4 opacity) suggesting flow.

---

### SECTION 8 — TEAM (Redesigned)

**3×2 grid. All placeholder avatars.**

Section headline:
- Label: "THE TEAM"  
- H2: "6 Minds. Infinite Builds." — white, Outfit 700

**Each team card — premium design:**

```
┌─────────────────────────────┐
│                             │
│     ┌───────────────┐       │
│     │               │       │  ← Avatar ring: gradient
│     │   AVATAR      │       │    electric → plasma, 3px,
│     │  PLACEHOLDER  │       │    animated spin (very slow)
│     │               │       │
│     └───────────────┘       │
│                             │
│  Full Name          Outfit 700 18px white
│  Role Title         Outfit 400 13px electric
│                             │
│  ─────────────────────────  │  ← 1px separator, rgba white 10%
│                             │
│  📍 Sri Lanka  🌐 Remote   │  ← JetBrains Mono 11px muted
│                             │
│  [ Li ]  [ Gh ]  [ Tw ]  [ ✉ ]  ← Social icons, 32×32px glass
│                             │
└─────────────────────────────┘
```

Card styling:
- Background: `rgba(255,255,255,0.04)`
- Border: `1px solid rgba(255,255,255,0.07)` → hover `1px solid rgba(77,255,235,0.3)`
- Corner radius: 20px
- Hover: `translateY(-8px)`, border glows, avatar ring brightens

**Avatar placeholder design:**
- Circle, 96px diameter
- Background: gradient `#4DFFEB` to `#B06FFF`
- Center: 2-letter initials in white, Outfit 700, 28px
- Outer ring: 3px gradient stroke, slow rotation animation
- When real photos provided: circular crop, same ring treatment

**6 Team Members:**
| # | Name | Role | Initials |
|---|---|---|---|
| 1 | **[Founder Name]** | Founder & CEO | FN |
| 2 | **Alex R.** | Lead Developer | AR |
| 3 | **Priya S.** | UI/UX Designer | PS |
| 4 | **Jordan L.** | Mobile Developer | JL |
| 5 | **Sam C.** | Marketing Lead | SC |
| 6 | **Maya P.** | Cloud Engineer | MP |

Social icons (32×32px glass square, 10px radius):
- LinkedIn: `in` white
- GitHub: octocat icon white  
- Twitter/X: X white
- Email: envelope white
All icons: `rgba(255,255,255,0.08)` bg → hover electric bg + white icon

---

### SECTION 9 — TESTIMONIALS

Horizontal scrolling carousel. 3 testimonial cards visible.

Each card:
- 380×240px glass card
- Large opening quote `"` — Bebas Neue 120px, gradient, -20px top, decorative
- Quote text: Instrument Sans italic 16px, `--text-1`, 4 lines max
- Bottom: circular avatar (40px) + Name (Outfit 600 white) + Company (JetBrains Mono electric)
- Star row: 5 stars in `#FFD700`

Carousel controls: two minimal arrow buttons, glass style, electric on hover.

---

### SECTION 10 — CONTACT (Redesigned)

**No price fields. Clean and focused.**

Headline:
- "Let's Build Something Great Together"
- Sub: "Have a project in mind? We'd love to hear about it."

Layout: 50/50

**Left: Contact info + 3D visual**
- Floating 3D envelope illustration (wireframe electric lines)
- Email: contact@xyphoraprime.com
- Social row

**Right: Contact form**

Glass card form fields (NO price/budget field):
1. Your Name *
2. Email Address *
3. What service do you need? (dropdown — all 9 services)
4. Tell us about your project (textarea, 4 rows)
5. Submit: full-width gradient button "Send Message →" with glow

Field styling:
- Background: `rgba(255,255,255,0.04)`
- Border: `1px solid rgba(255,255,255,0.1)` → focus: electric border + soft glow
- Placeholder: `--text-3`
- Label: JetBrains Mono 11px, electric, tracking 0.1em, above each field

---

### SECTION 11 — FOOTER

Dark footer: `#010208`
Top: thin gradient line (electric → plasma) as separator

4-column grid:
- Col 1: Logo + tagline + socials
- Col 2: Services (all 9, linked)
- Col 3: Company (About, Team, Process, Contact)
- Col 4: Contact info + newsletter input

Bottom bar:
```
© 2025 Xyphora Prime  ·  Built in Sri Lanka 🇱🇰  ·  Privacy  ·  Terms
```

---

## 🎬 ANIMATIONS — DETAILED SPEC

| Element | Animation | Duration | Trigger |
|---|---|---|---|
| Page load | Staggered fade-up, 40px offset | 0.6s, 0.1s stagger | Page load |
| Hero headline | Characters slide in from bottom, letter by letter | 1.2s total | Load |
| Icosahedron | Continuous Y-axis rotation | 20s loop | Always |
| Floating feature chips | Sinusoidal float, each offset by 0.3s | 4s loop | Always |
| Particle field | Slow upward drift, wraps | Infinite | Always |
| Section entrance | `opacity 0→1` + `translateY 30→0` | 0.5s ease-out | Scroll into view |
| Service cards | Stagger fade-in left to right | 0.1s per card | Scroll |
| Stats marquee | Continuous left scroll | 30s linear loop | Always |
| Team card hover | `translateY(-8px)` + border glow | 0.25s ease | Hover |
| Avatar ring | Slow rotation 360° | 8s linear loop | Always |
| Nav background | Blur/opacity increase | 0.3s | On scroll |
| Portfolio panel border | Dashed border dash-offset animate | 4s loop | Always |
| CTA button hover | Glow shadow intensifies | 0.2s | Hover |
| Terminal cursor | Blink | 1s step | Always |
| Process step numbers | Count up on scroll | 1.5s | Scroll |

---

## 📋 READY-TO-PASTE FIGMA AI PROMPT

> Copy and paste this entire block into Figma AI, Galileo AI, Uizard, or hand to designer:

---

Design a world-class, Awwwards-quality dark website for **Xyphora Prime**, a 6-person freelance IT agency from Sri Lanka. This is a complete design from scratch — avoid all generic templates.

**COLOR PALETTE — CRITICAL:**
Background: `#03020A` (near-black with purple undertone — NOT navy blue).
Primary neon: `#4DFFEB` (electric cyan-teal).
Secondary: `#B06FFF` (violet plasma).
Accent: `#FF6B35` (warm solar orange — used sparingly).
Text: `#F0EEFF` (near-white, purple-warm). Secondary text: 55% opacity.
Glass cards: `rgba(255,255,255,0.04)` background + `backdrop-filter:blur(24px)`.
ALL background sections: Add large radial glow blobs (600–900px, 12–18% opacity) for depth.
Apply 4% film grain noise texture over everything.

**TYPOGRAPHY — CRITICAL:**
Hero display: Bebas Neue (tall, condensed, dramatic — 120–140px).
Headings: Outfit 700.
Body: Instrument Sans 400.
Labels/mono: JetBrains Mono.
NO Inter, NO Roboto, NO generic fonts.

**SECTIONS (1440px desktop + 390px mobile responsive):**

1. **Loading screen:** "XP" dual-hexagon monogram + company name typeout + neon progress line.

2. **Navbar:** 72px fixed, blur glass, logo left (gradient hexagon + "Xyphora Prime"), center nav links, right ghost border button "Start a Project". No solid background.

3. **Hero (100vh, full-width centered):** Bebas Neue 130px headline "XYPHORA / PRIME / CRAFTS." (line 2 in gradient). Label badge "WE BUILD DIGITAL FUTURES" in mono font. CTA row: glowing gradient button + ghost button. 3 stat chips below. RIGHT SIDE: 3D wireframe icosahedron (20-face geometric shape) in electric cyan, slow spinning, inner glow core, orbital ring, 4 floating glass feature chips around it. Particle field background.

4. **Services (Bento grid):** NOT a uniform card grid. Asymmetric bento layout — large featured card (Web Dev, 2 rows tall, gradient border), medium cards for other 8 services. 9 services total: Web Development, Mobile App Development, Software Development, AI Chatbots & AI Solutions, UI/UX Design, Cloud Services, Digital Marketing, IT Consulting, IoT Systems. Left-aligned headline "9 Services. One Team." Each service card: glass bg, neon border on hover, colored 3D-style icon, title, 2-line description.

5. **About:** Left: premium terminal card (dark glass, syntax-highlighted JS object showing company data, blinking cursor). Right: "Who We Are" text, 2 paragraphs, 2×2 value cards (Innovation, Quality, Scalability, Support).

6. **Why Choose Us:** Animated scrolling ticker strip showing stats. Below: 6 feature cards in 3×2 grid (glass, icon + title + description, ghost large background number).

7. **Portfolio — IMPORTANT:** Do NOT show empty project slots. Show a single large glass panel centered with dashed electric border, "Portfolio in Progress" title, text reading "Our team is currently crafting groundbreaking projects. The showcase launches soon." A "Get Notified" electric outline button. Below the text, a row of service tag pills. Floating abstract wireframe shapes in background. This must look intentional and premium, not like a placeholder.

8. **Process (6 steps, 3×2 grid):** Cards with large ghost step numbers (01–06), colored small icon, "Step 0X" label in electric, step title, 3-line description. Steps: Consultation, Planning, UI/UX Design, Development, Testing & QA, Launch & Support.

9. **Team (3×2 grid, 6 members):** Glass cards. Circular avatar with gradient initials (placeholder) + slow-spinning gradient ring. Name (Outfit 700 white), Role (electric), location tag, 4 social icon squares (LinkedIn, GitHub, Twitter, Email). Hover: lift + electric border glow.

10. **Testimonials:** Horizontal carousel, 3 cards visible, glass cards, large decorative quote mark, quote text, avatar + name + company + stars.

11. **Contact:** Two columns. Left: floating 3D envelope visual + contact info. Right: glass form card — Name, Email, Service dropdown (9 services), Project description textarea, gradient "Send Message →" button. NO price/budget field.

12. **Footer:** `#010208` bg, top gradient divider line, 4 columns (Brand, Services, Company, Contact), bottom bar "© 2025 Xyphora Prime · Built in Sri Lanka 🇱🇰".

**3D ELEMENTS REQUIRED:**
- Hero: spinning wireframe icosahedron with orbital ring (Spline or SVG 3D)
- Services section: each icon is a 3D-rendered icon (depth, lighting, shadow)
- About: floating terminal card with subtle 3D tilt
- Portfolio: abstract floating wireframe triangle, circle, square
- Contact: floating 3D wireframe envelope

**QUALITY BAR:** This should look like it belongs on Awwwards. Inspirations: Vercel.com, Linear.app, Resend.com — but darker, more dramatic, with stronger 3D depth and neon glow treatment. Every card must have intentional hover states. Every section must have a layered background (base + glow blobs + noise texture). The result should feel like a premium SF tech startup website built for 2025–2026.

---

*Xyphora Prime — Design Prompt V2 — Complete Redesign*
*Replace ALL previous designs. This supersedes V1.*