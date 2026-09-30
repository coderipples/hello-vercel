# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page "Hello" site in plain HTML, CSS and JavaScript. There are no frameworks, no package manager, no build step, no linter and no tests. Vercel serves the files as-is.

To preview, run `open index.html`, or serve the folder with `python3 -m http.server`.

## Preferences

- Use plain HTML, CSS and JavaScript unless told otherwise.
- Design mobile-first, targeting iPhone Safari.
- Use CSS variables for all colours and spacing.
- Make small commits.
- Explain each change briefly.

## Architecture

Three files that depend on each other by element ID and class name:

- `index.html` defines the card. `script.js` looks up the elements `#greeting`, `#language` and `#cycle` by ID, so renaming them in the HTML breaks the script.
- `script.js` holds the `greetings` array (20 entries) and a click handler that advances an index modulo the array length. Each entry is `{ text, name?, language, lang, dir? }`; `name` is Linda written in that language's script, and falls back to `defaultName` where it is spelled the same. The handler sets `lang` and `dir` on `#greeting` (`dir` defaults to `"ltr"`; Arabic and Hebrew set `"rtl"`) so screen readers and text direction are correct. It restarts the `.swap` animation by removing the class, forcing a reflow, and re-adding it.
- `styles.css` holds all styling. The design tokens are CSS variables in `:root` at the top of the file: colours, spacing, radius, fonts, glow shadows, touch-target size and per-element treatments (heading fill, button shadow, nav colours, animation easing). Use these tokens instead of hard-coding values elsewhere.

### Themes

Five themes (`neon`, `ios`, `claude`, `spy`, `kids`) switch via `data-theme` on `<html>`. `:root` is Neon; the `[data-theme="…"]` blocks under it override tokens only, so the rules below them are shared by every theme. To restyle a theme or add a token, edit the token blocks, not the component rules. Adding a theme means:

1. a `[data-theme]` token block in `styles.css`;
2. a text-only button with `data-theme-choice` in the `<nav class="themes">` in `index.html` (keep the switcher minimal: no icons);
3. its name in the `themes` array in `script.js`.

The choice is saved in `localStorage` (`theme`). A small inline script in `<head>` applies it before first paint to avoid a flash, and `script.js` also updates `<meta name="theme-color">` from `--color-bg`. Colours are named `--color-accent-1` to `--color-accent-5` rather than by hue, because the hues differ per theme.

## Conventions

- Mobile-first: base styles target phones, and the `min-width: 40rem` media query enhances for wider screens.
- Buttons must keep a touch target of at least `--touch-target` (3.5rem, 4rem in Kids).
- Hover styles go inside `@media (hover: hover)` so they don't stick after a tap on iPhone.
- The fixed theme bar reserves space via `--nav-height` and `env(safe-area-inset-bottom)`; keep the bottom padding on `main` in sync.
- Animations and hover transforms need a matching override in the `prefers-reduced-motion` block at the bottom of `styles.css`.
- Update the intro text in `index.html` ("In twenty languages") when adding or removing greetings.
- The system font stack covers all the scripts in use, so don't add web fonts.
