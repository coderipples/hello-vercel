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
- `script.js` holds the `greetings` array (20 entries) and a click handler that advances an index modulo the array length. Each entry is `{ text, language, lang, dir? }`. The handler sets `lang` and `dir` on `#greeting` (`dir` defaults to `"ltr"`; Arabic and Hebrew set `"rtl"`) so screen readers and text direction are correct. It restarts the `.swap` animation by removing the class, forcing a reflow, and re-adding it.
- `styles.css` holds all styling. The design tokens are CSS variables in `:root` at the top of the file: colours, spacing, radius, fonts, glow shadows and touch-target size. Use these tokens instead of hard-coding values elsewhere.

## Conventions

- Mobile-first: base styles target phones, and the `min-width: 40rem` media query enhances for wider screens.
- Buttons must keep a touch target of at least `--touch-target` (3.5rem).
- Animations and hover transforms need a matching override in the `prefers-reduced-motion` block at the bottom of `styles.css`.
- Update the intro text in `index.html` ("twenty languages") when adding or removing greetings.
- The system font stack covers all the scripts in use, so don't add web fonts.
