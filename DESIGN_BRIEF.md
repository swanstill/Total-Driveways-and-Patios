# Total Driveways and Patios — Design System Analysis
*(A reusable "standard prompt" distilled from the three reference screenshots)*

## 1. Site purpose & tone
Local, family-run driveway/patio/landscaping contractor (Cardiff & South Wales). The design needs to read as **trustworthy, established, tidy and premium-but-approachable** — not a flashy agency site. Every visual decision should reinforce craftsmanship and reliability.

## 2. Layout structure
- **Fixed-width centred container**, max ~1280–1320px, generous side gutters (≈64–96px desktop, 20px mobile).
- **Two-tier header**: a slim utility bar (phone number left, trust badge right) sitting above the main nav bar (logo, links, CTA button). This doubles the perceived trust signal before the visitor even reaches content.
- **Hero**: two-column split — left column copy (eyebrow, H1, supporting text, dual CTAs, credential row), right column a single large rounded-corner photograph bleeding to the viewport edge. Classic "headline left / proof right" pattern for a local trade business.
- **Alternating section rhythm**: full-width cream section → white section → cream section, so the page visually breathes without needing hard borders.
- **Content sections follow a strict pattern**: eyebrow label → H2 → one-line supporting sentence → content grid. This repeats for Services, Why Choose Us, Gallery, Process, Coverage, Reviews, FAQ, Final CTA.
- **Card grids**: services use a 5-up (desktop) image-topped card grid that collapses to 1-up on mobile; "why choose us" uses an icon+text list, not cards, paired with a single supporting image — variety in list format prevents monotony.

## 3. Visual hierarchy
1. H1 in hero (largest, boldest, dark navy, tight leading)
2. Section H2s (large, navy, always paired with a small gold uppercase eyebrow above them)
3. Card/list titles (navy, semibold, mid-size)
4. Body copy (slate grey, regular weight, relaxed leading for readability)
5. Micro-labels / eyebrows / trust strip (small, uppercase, letter-spaced, gold)
The gold accent is used **sparingly and structurally** — eyebrows, underline accent under the active nav item, button fills, "learn more" links, decorative full-stop after headlines — never as a large fill, which keeps it feeling premium rather than loud.

## 4. Typography
- **Display / heading face**: a rounded-geometric, confident sans (e.g. *Sora* or *Poppins*, 600–800 weight). Headlines are set tight (leading ~1.1), often two lines, with a single **gold full-stop** appended after the final word as a signature typographic flourish.
- **Body face**: a clean humanist sans (e.g. *Inter*), 400–500 weight, 16–18px, line-height ~1.6, colour a warm dark slate rather than pure black.
- **Eyebrow/label face**: same body family, semibold, uppercase, letter-spacing ~0.12em, small (12–13px), gold colour.
- Numerals/phone numbers/nav in a medium weight of the body face for legibility at small sizes.

## 5. Colour palette
| Role | Colour | Hex (approx) |
|---|---|---|
| Primary background (cream) | warm off-white | `#F6F3EC` |
| Surface / card background | pure white | `#FFFFFF` |
| Primary text / headings | deep navy | `#162447` |
| Body text | warm slate grey | `#5B6270` |
| Accent (CTA, links, eyebrows) | antique gold | `#C79A3C` |
| Accent hover/dark | deep bronze | `#A67C2E` |
| Logo third tone | dark umber | `#5B4130` |
| Borders / hairlines | soft warm grey | `#E7E2D6` |
| Success/rating star | gold (same as accent) | `#C79A3C` |

The palette is intentionally a **warm neutral + single metallic accent** — evokes stone, gravel and brass fittings rather than a generic tech-blue/purple gradient.

## 6. UI components
- **Buttons**: solid gold pill/rounded-rect primary button (white text); outline navy secondary button. Both include a small leading icon (document icon / phone icon).
- **Nav**: horizontal links, active item underlined in gold; one dropdown ("Services ▾"); CTA button pinned right, visually distinct (only filled item in the bar).
- **Trust badge**: shield icon + single line of text in the top utility bar.
- **Cards**: white surface, soft shadow, rounded corners (~12–16px), photo on top (rounded top corners only), icon badge overlapping the photo/card boundary, title, 2-line description, gold "Learn more →" link.
- **Icon badges**: circular white badge with thin gold ring outline, line-icon inside, navy stroke.
- **Feature list rows** (Why Choose Us): square icon tile (cream fill, rounded corners) + bold navy title + grey description, stacked vertically with generous spacing.
- **Image callout chip**: floating white rounded card overlapping the bottom-left of a hero-style photo, containing an icon + two-line text — used to caption a photo without a full overlay.
- **Dividers**: none as hard rules; whitespace and background-colour changes do the separating.

## 7. Spacing system
Base unit **8px**, scaling as: 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Section vertical padding: 96–128px desktop, 56–64px mobile.
- Card internal padding: 24–32px.
- Grid gutters: 24–32px.
- Header height: ~88px main bar + ~40px utility bar.
Rounded corners are consistent throughout: **12px** for buttons/badges, **16–20px** for cards and photos — never 0 (no sharp broadsheet look) and never full pill except buttons.

## 8. Section organisation (homepage order)
1. Utility bar + main nav (sticky)
2. Hero — split headline/photo, dual CTA, credential row
3. Quick trust strip (4 short trust items)
4. Intro / "for your property" split section (copy + work-in-progress photo)
5. Services — 5 material cards (Block Paving, Resin, Tarmac, Patios, Landscaping)
6. Why choose us — icon list + large photo with floating caption chip
7. Recent projects gallery — mixed large/small grid
8. Process — 4 numbered steps
9. Coverage area
10. Reviews
11. FAQ accordion
12. Final CTA banner (dark navy, inverted palette)
13. Footer

## 9. Design style summary
**Warm, credential-led local-trade premium.** Rounded-geometric display type + generous whitespace + photography-forward cards + a single antique-gold accent against navy-on-cream. Sits stylistically between "corporate SaaS" and "rustic trade flyer" — polished enough to justify a premium quote, still legible as a genuinely local, family-run business. The recurring gold full-stop after headlines and the interlocking-diamond logo mark are the two signature devices that should appear consistently across every page.
