---
name: Quantum
description: Gimnasio de barrio en Marqués de Sobremonte, Córdoba, presentado como un circuito eléctrico con carga.
colors:
  ink: "#0b0b0b"
  z1: "#151515"
  z2: "#222120"
  z3: "#34322f"
  z4: "#4b4945"
  z5: "#67645f"
  z6: "#85827c"
  z7: "#a6a29b"
  z8: "#c7c2b9"
  z9: "#e3ded4"
  bone: "#f4f1ea"
  red: "#e4231b"
  red-hot: "#ff4a3d"
  red-deep: "#a8140e"
  red-plate: "#cc1c15"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(5.5rem, 23.5vw, 22rem)"
    fontWeight: 900
    lineHeight: 0.78
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.5rem, 6.4vw, 5.75rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.005em"
  action:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
    fontFeature: "tnum"
rounded:
  none: "0px"
  round: "50%"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  section: "clamp(4.5rem, 10vw, 9rem)"
  max: "1320px"
components:
  button-red:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.5rem"
    height: "3.25rem"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.5rem"
    height: "3.25rem"
  button-ink-hover:
    backgroundColor: "{colors.z2}"
  button-ghost:
    textColor: "{colors.bone}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.5rem"
  button-ghost-hover:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
  button-line:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.5rem"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
  plate-bone:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    padding: "{spacing.section} 0"
  plate-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    padding: "{spacing.section} 0"
  plate-red:
    backgroundColor: "{colors.red-plate}"
    textColor: "{colors.white}"
    padding: "{spacing.section} 0"
  ticket:
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.4rem 0.55rem"
  tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    padding: "0.4rem 0.55rem"
  status:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    padding: "0.7rem 1rem 0.75rem"
  day-tab:
    textColor: "{colors.z8}"
    padding: "0.7rem 1.05rem"
  day-tab-selected:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
  chip:
    textColor: "{colors.white}"
    padding: "0.65rem 1rem"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
  field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1rem"
  quote:
    backgroundColor: "{colors.z1}"
    textColor: "{colors.z9}"
    padding: "1.5rem 1.5rem 1.25rem"
  quote-lead:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
---

# Design System: Quantum

## Overview

**Creative North Star: "Alta Tensión"**

The gym is a charged circuit, printed as high-voltage warning signage. The logo's red bolt is not decoration: it is the structural system. It splits the QUANTUM wordmark in the first viewport, runs down the hero as a thin trace, reappears as the zig-zag seam between plates, and ends on the WhatsApp builder. Wherever there is red, there is charge: an action, a live state, a signal point in the data, or the path between sections.

Sections are plates: alternating warm bone paper and ink black, each framed by a hairline held at the corners by four bolt heads, like an enamel sign screwed to a wall. Everything typographic that shouts is heavy condensed italic caps, slanted like the logo; everything that explains is a sturdy grotesk at a generous size, because members of every age read this on a phone. Photography is the real gym in black and white, sharing the same 11-step grey ramp as the interface, with hairline labels pinned to the equipment and an origin ticket under photos and reviews.

Density is loud but legible: huge display type, wide section padding, few elements per plate. Motion is mechanical and brief: the bolt strikes in once, the day's line draws itself, and the status light switches.

**Key Characteristics:**
- Ink and bone plates alternating, joined by red bolt seams.
- One signal red that carries charge: action, live state, data peaks, the bolt.
- Heavy condensed italic caps for voice; Archivo for reading.
- B&W photography on the same 11-step warm-grey ramp as the UI.
- Square corners everywhere; slanted clip-path on solid buttons.
- Hairline frames, hairline rules, bolted corners; no soft cards.

## Colors

A near-monochrome warm-grey ramp from ink to bone, cut by a single electric red.

### Primary
- **Signal Red** (red): the bolt, the hero trace and seams, the wordmark's N, the live status lamp, primary WhatsApp buttons, class peaks and the "now" cursor, rating bars, the review card's top rule, bolt-shaped check bullets and the tag pin dots.
- **Hot Red** (red-hot): red *as text or thin line on ink*. Emphasis words in headlines on ink plates, footer column heads, stars, the "· hoy" marker, focus outlines, FAQ plus marks, crew roles, preview label.
- **Deep Red** (red-deep): red *as text on bone*. Emphasis words in headlines on bone plates, the "Consultar" links, hovered activity titles, stars on the bone lead quote.
- **Plate Red** (red-plate): the ground of the red plate (the message builder). Slightly darker than Signal Red so white text and white-outlined chips read on it.

### Neutral
- **Ink** (ink, the z0 step): page ground, ink plates, nav when solid, the solid button on red, tags, status plate, preview bubble.
- **Bone** (bone, the z10 step): warm paper plates, text on ink, selected day tab, the lead review.
- **The z-ramp** (z1 to z9): an 11-step warm grey ramp shared with the photography. z1 is the review card ground and scrollbar track; z2 and z3 are hairline rules and frames on ink; z4 is the status border, off-segments of the day line and bolt heads on ink; z5 is closed-state current and placeholder text; z7 is chart labels and secondary numerals; z8 is secondary text on ink and rules on bone; z9 is body text on ink cards and nav links.
- **White** (white): text, borders and field fill on red (red buttons, the builder plate, chips, the name field), plus link hover on ink.

### Named Rules
**The Current Rule.** Red is the only accent and it always carries charge: actions, the live state, the bolt and its seams, and the signal points of data. It fills a large area only once, the message-builder plate where every path ends.

**The Light Is State Rule.** The live indicator is a real light. When Quantum is closed (body state `is-closed`), the current goes off: the lamp drops to z5 with no glow, the wordmark's N goes z6, the bolt fills z4, the hero trace turns z5. Actions stay red; only the live elements switch.

**The Red By Ground Rule.** Red text uses Hot Red on ink and Deep Red on bone; on the red plate, emphasis becomes ink. Signal Red is a fill and line color; the wordmark's N is its only text use.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif), self-hosted at 900 italic, 800 italic and 600 roman.
**Body Font:** Archivo (with system-ui, sans-serif), self-hosted at 400, 500, 700.

**Character:** Barlow Condensed in heavy italic caps carries the logo's slanted, shouted voice; its 600 roman cut becomes the tracked, tabular label voice of signage. Archivo is a plain, robust grotesk that reads well large.

### Hierarchy
- **Display** (900 italic, clamp(5.5rem, 23.5vw, 22rem), 0.78): the QUANTUM wordmark only, with the N in red under the bolt.
- **Headline** (900 italic, clamp(2.5rem, 6.4vw, 5.75rem), 0.92, uppercase, balanced): section h2. The second clause sits in an `em` colored per the Red By Ground Rule.
- **Title** (800 italic, clamp(1.9rem, 3.2vw, 2.6rem), 0.92, uppercase): activity names, feature titles. The same 800 italic voice at 1.1 to 1.6rem names FAQ questions, day tabs, chips, legends, hours rows, reviewer names and pull quotes.
- **Action** (800 italic, 1.3rem, 1, 0.02em, uppercase): buttons; 1.1rem small, 1.55rem large.
- **Body** (400, 1.0625rem, 1.6; 1rem under 560px): all running text, capped at 40 to 62ch. Section intros at clamp(1.05rem, 1.4vw, 1.2rem) and 82% opacity.
- **Label** (600 roman, 0.78 to 1.1rem, 0.06 to 0.1em tracking, uppercase, tabular numerals): tickets, photo tags, nav links, schedule meta, chart labels, address line, counts.

### Named Rules
**The Two Voices Rule.** Anything that shouts is Barlow Condensed italic caps; anything that explains is Archivo in sentence case. Never set a paragraph in the display face or a heading in Archivo.

**The Tabular Numbers Rule.** Times, counts, ratings and schedules use tabular numerals so the circuit reads like a meter.

## Layout

Full-bleed plates stacked vertically, each with section padding (spacing.section) and a centered wrap of at most 1320px inside a fluid gutter (spacing.gutter). Inside plates, layouts are asymmetric two-column grids with weighted fractions (1.05/1, 1.4/1, 0.8/1.6, 0.9/1.2) and wide clamp gaps up to 6rem; the left column often holds a sticky header or score at top 6rem. Section headers cap at 62rem, or split headline-left / intro-right.

The hero is a full-viewport grid (min max(100svh, 640px)): status plate top-left, wordmark centered, copy and rating stamp at the bottom, address line under a hairline.

Seams are 48px bands overlapping adjacent plates by 24px on each side.

Breakpoints: 1080px collapses two-column plates to one and unsticks headers; 860px swaps the nav for a toggle drawer, shows the WhatsApp FAB and stacks the hero copy; 560px goes single-column everywhere, stretches hero and builder buttons full width, lets the day line scroll horizontally (min 780px) with a class list beneath, and pulls the plate frame in to 0.5rem.

## Elevation & Depth

Flat. Depth comes from tonal plates (ink against bone), hairline frames and rules, and the seam crossing between plates, not from shadows. The few shadows are light, not lift.

### Shadow Vocabulary
- **Lamp glow** (`box-shadow: 0 0 0 4px rgba(228,35,27,.25), 0 0 14px 2px rgba(228,35,27,.55)`): the live status lamp only; removed when closed.
- **Wordmark lift** (`text-shadow: 0 .04em .12em rgba(0,0,0,.45)`): keeps the bone wordmark off the photo.
- **Nav hairline** (`box-shadow: 0 1px 0 var(--z3)`): the solid nav's bottom rule.
- **FAB** (`box-shadow: 0 6px 18px rgba(0,0,0,.4)`): the floating WhatsApp button on mobile, the only element that floats.

### Named Rules
**The Glow Is Current Rule.** A glow means electricity is flowing. Only the live lamp glows, and the glow switches off with the state.

## Shapes

Square. Every plate, card, tag, ticket, chip, field and button has 0 radius. The only circles are the status lamp, the tag pin dots, the bolt heads and the mobile FAB. Solid buttons (red, ink) are slanted parallelograms via `clip-path: polygon(.6rem 0, 100% 0, calc(100% - .6rem) 100%, 0 100%)`, echoing the italic; bordered buttons (ghost, line) stay rectangular so their stroke is not cut. Frames are 1px hairlines inset 1rem from the plate edge, held by four bolt heads at the corners (concentric radial-gradient rings, 16px). Bullets are tiny red bolts drawn by clip-path. Seams and chart lines use mitered joins.

## Components

### Buttons
Tactile and shouted, like a stamped switch.
- **Shape:** slanted parallelogram for solid fills, square for outlined; min height 3.25rem (2.6rem small, 3.75rem large), 2px border slot.
- **Red:** Signal Red with white Action type and an optional 1.15em inline SVG icon; the default WhatsApp and directions action. Hover darkens to #c81a13.
- **Ink:** ink with bone text; hover z2. On the red plate, the submit button.
- **Ghost:** translucent ink (45%) with a bone border over photos; hover fills bone with ink text.
- **Line:** ink border and text on bone; hover fills ink.
- **Hover / Focus:** move up 2px (no shadow) with the house ease over 0.25s, back to 0 on press; focus is a 3px Hot Red outline offset 3px.

### Tickets and Tags
- **Ticket:** small Label-type caption with a 1px currentColor border at 85% opacity, tabular numerals. It cites origin ("Google Maps · foto del local", "Google · ★★★★★ · oct 2025") under the activities photo, every review and the map.
- **Tag:** ink label pinned to a point on a photo (positioned by x/y percentages), with a 1px bone leader line dropping 2.2rem to a red pin dot ringed in bone. A right-anchored variant mirrors it.

### Plates
- **Corner Style:** square, full-bleed.
- **Background:** bone, ink or plate red.
- **Frame:** 1px hairline inset 1rem with four bolt heads (bone: z8 frame, z5 bolts; ink: z2 frame, z4 bolts; red: 28% white frame, #7d0f0a bolts).
- **Internal Padding:** spacing.section vertically.

### Cards (quotes)
- **Quote:** z1 ground, 3px Signal Red top rule, square; reviewer name in the Title voice, origin ticket right. Laid out in masonry columns.
- **Lead quote:** bone ground, the quote itself in 800 italic display type.

### Inputs / Fields
- **Chips (radio):** 2px white outline on the red plate, 800 italic caps; hover tints with 18% ink; checked fills ink with bone text; focus is a 3px ink outline.
- **Field:** white fill, 2px white border, Archivo 500 1.1rem, red caret, max 24rem; focus is a 3px ink outline offset 2px.
- **Legend:** numbered step in a 2rem ink square, then the question in 800 italic caps.

### Navigation
Fixed, transparent over the hero with an ink gradient, turning solid ink with a z3 hairline after 60px of scroll (scroll-timeline, with a class fallback). Links are Label type in z9; hover goes white with a 2px red underline. The red WhatsApp button sits at the right. Under 860px a bordered square toggle opens a drop-down ink drawer with 900 italic 2rem links and a 2px red bottom edge.

### Status Plate (signature)
Ink box with a z4 border, a glowing lamp spanning two rows, the state in 900 italic caps ("Abierto ahora") and the trend in Archivo 500 z8 ("cierra 22:00 · en 2 h 14 min"). It obeys the Light Is State Rule; color transitions take 0.6s.

### Bolt and Seams (signature)
The bolt is a red SVG with an ink stroke over the wordmark's N, revealed once on load by a top-down clip-path strike (1.1s). A 3px red trace runs the hero height into it. Between plates, a 48px seam carries a straight 4px red line with one zig-zag bolt, placed at a different horizontal position each time; the last seam before the red plate is ink, 5px.

### Corriente del Día (signature)
A day timeline 7:00 to 22:30 drawn as a voltage line on ink: off hours sit low in z4, open hours rise in bone, each class is a red spike labelled with its name in 800 italic and time in Hot Red. Today adds a dashed red cursor and a red "Ahora" label. A faint z2 vertical hour grid underlies it; the figure is framed in a z3 hairline with an Archivo summary below. Day tabs are 800 italic caps in a z4 outline, the selected tab filled bone, today suffixed "· hoy" in red. On day change the line redraws (1.1s) and the spikes follow in sequence.

### Message Builder (signature)
The final red plate: three numbered fieldsets (activity chips, shift chips, optional name field), a live ink preview bubble with a Hot Red label and a speech-tail notch, and a large ink button that opens WhatsApp with the composed text.

## Do's and Don'ts

### Do:
- **Do** alternate bone and ink plates and join them with a red bolt seam placed at a new horizontal position.
- **Do** frame every plate with the 1px inset hairline and its four bolt heads.
- **Do** keep red for charge: actions, live state, the bolt path, data peaks.
- **Do** pick red text by ground: Hot Red (#ff4a3d) on ink, Deep Red (#a8140e) on bone, ink on the red plate.
- **Do** switch every live element off together when closed (lamp, N, bolt, trace).
- **Do** render gym photography in grayscale with a slight contrast boost, and cite its origin with a ticket.
- **Do** pin hairline tags to real equipment in photos rather than captioning beside them.
- **Do** set times, ratings and counts in tabular Label type.
- **Do** use the house ease cubic-bezier(.16, 1, .3, 1) for every transition.

### Don't:
- **Don't** round corners on plates, cards, buttons, chips or fields; circles are reserved for lamps, pins, bolt heads and the FAB.
- **Don't** use Signal Red (#e4231b) as a text color beyond the wordmark's N, or as a fill for anything that carries no charge.
- **Don't** add soft drop-shadow cards or shadow elevation on hover; depth is tonal, and hover lift is a 2px move without shadow.
- **Don't** set paragraphs in the condensed display face or headings in Archivo.
- **Don't** show full-color photography of the gym; Instagram thumbnails are only lightly desaturated (20%) and the map stays near-grey until hovered.
- **Don't** clip-path a bordered button; slants are for solid fills only.
