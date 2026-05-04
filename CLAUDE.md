# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static, no-build, vanilla JavaScript IQ assessment web app. There is no package manager, bundler, framework, or test suite — just two files served directly in a browser.

## Running the App

Open `index.html` directly in a browser. No server or build step is required. Any local HTTP server also works (e.g. `python3 -m http.server`).

## Architecture

The app has exactly two source files:

- **`questions.js`** — loaded first via `<script src="questions.js">`. Exposes three globals:
  - `QUESTION_BANK` — array of question objects (see schema below)
  - `UI_STRINGS` — all interface copy in English (`en`) and Spanish (`es`)
  - `getCognitiveProfile(domainScores, lang)` — pure function that maps domain scores (0–1 floats) to a named cognitive profile

- **`index.html`** — contains all CSS (in `<style>`), the three-page HTML structure, and all game logic in a single inline `<script>`. The script runs inside `window.onload` with no modules.

### Three-page flow

Pages are `div.page` elements toggled via the `active` CSS class. The `show(id)` helper removes `active` from all pages and adds it to the target:

1. **`#p-intro`** — language/contrast toggles, info cards, start button
2. **`#p-question`** — timer ring, progress bar, answer options, feedback strip
3. **`#p-result`** — IQ number (animated count-up), stats grid, domain bars, cognitive profile

### Question selection and shuffling

`selectRaw()` picks from `QUESTION_BANK` using fixed domain quotas: 4 Verbal, 4 Numerical, 4 Spatial, 3 Logic (15 total). Each domain pool is independently shuffled before selection, then the full set is shuffled again.

`buildRuntimeQuestion(q)` creates the per-session version: answer options are randomly permuted and the correct answer index is remapped to the new permutation.

### Scoring

IQ estimate: `Math.round(70 + (correct / total) * 75)` — range 70–145.

IQ classification uses fixed thresholds: 145, 130, 120, 110, 90, 80, 0.

Cognitive profile is determined by which domains score ≥ 0.15 above the cross-domain average (`getCognitiveProfile` in `questions.js`).

## Adding or Editing Questions

Each entry in `QUESTION_BANK` follows this schema:

```js
{
  domain: "Verbal" | "Numerical" | "Spatial" | "Logic",
  difficulty: 1 | 2 | 3,
  en: { q: "question text", s: "optional subtitle", o: ["A","B","C","D"], a: <index 0-3> },
  es: { q: "...", s: "...", o: ["A","B","C","D"], a: <index 0-3> }
}
```

`a` is the index into `o` for the correct answer **before** runtime shuffling. Both `en` and `es` versions must have the same `a` (answer index maps to the same logical option in both languages).

## Bilingual Requirement

Every user-visible string must exist in both `en` and `es` inside `UI_STRINGS`. The `lang` variable (`'en'` or `'es'`) is toggled at runtime and all rendering functions read from `UI_STRINGS[lang]`. New UI strings must be added to both language blocks.

## High Contrast Mode

Toggled by adding/removing the `hc` class on `<html>`. All colour overrides for HC mode are defined at the top of the `<style>` block under `html.hc { ... }`.
