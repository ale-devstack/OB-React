# Mobile performance audit (OB-React)

## Baseline (`npm run build`)

- Initial JS chunk: `dist/assets/index-*.js` ≈ **239.5 kB** (77.0 kB gzip).
- Shared vendor chunk: `dist/assets/proxy-*.js` ≈ **118.5 kB** (38.9 kB gzip).
- CSS: `dist/assets/index-*.css` ≈ **23.6 kB** (4.9 kB gzip).

## Main findings

1. **Aggressive route prefetch on all connections**
   - The app prefetches several pages after idle time.
   - On constrained mobile networks this competes with critical resources and can hurt LCP/INP.

2. **Footer loaded in the critical path**
   - The footer includes several icons and static content that are not needed for first render.
   - Deferring it reduces initial JS work.

3. **Animation stack cost**
   - `framer-motion` appears broadly across pages.
   - It's useful for UX, but contributes to JS parse/execute cost on lower-end devices.

## Changes implemented in this branch

1. **Network-aware prefetch strategy** (`src/App.jsx`)
   - Prefetch is skipped when:
     - `Save-Data` is enabled, or
     - effective connection type matches `2g`.
   - Keeps fast-navigation UX for good networks while protecting low-bandwidth users.

2. **Lazy-loaded footer** (`src/Layout.jsx`)
   - Footer now loads with `React.lazy` + `Suspense`.
   - Removes footer-related code from the initial route payload.

3. **Removed unused imports** (`src/components/pages/Home.jsx`)
   - Eliminates unused icon imports to keep code clean and avoid lint noise.

## Next recommended optimizations (high impact)

1. **Reduce animation JS on mobile**
   - Option A: Replace non-critical `framer-motion` effects with CSS transitions.
   - Option B: Gate complex animations behind `prefers-reduced-motion` and mobile breakpoints.

2. **Image delivery improvements**
   - Generate AVIF variants for hero images with size targets for common mobile widths.
   - Keep `webp` as fallback with `srcset` + `sizes` for tighter transfer.

3. **Critical rendering path**
   - Add `content-visibility: auto;` for below-the-fold sections.
   - Audit blocking CSS and ensure only critical styles are in first paint.

4. **Bundle strategy**
   - Add explicit manual chunks in Vite (router, animation libs, icon libs).
   - Re-check post-build long-term caching and first-load payload.

5. **Measure with field-like constraints**
   - Run Lighthouse mobile profile (Slow 4G, CPU slowdown).
   - Track: LCP, INP, CLS, JS execution time, total blocking time.
