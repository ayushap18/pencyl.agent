# Pencyl

Pencyl is a browser-based design-agent workspace for turning product ideas into editable interfaces. This repository contains a polished, dependency-free MVP inspired by modern collaborative design tools.

## Features

- Prompt-driven design-agent input with suggestion starters
- Editable canvas workspace with layers, inspector controls, tokens, and responsive preview
- Prototype preview mode
- Publish and command-menu interactions
- Responsive layout for desktop and mobile

## Run locally

No build step is required. Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 4173
```

Then visit <http://localhost:4173>.

## Structure

- `index.html` — application markup
- `styles.css` — visual system and responsive layout
- `app.js` — lightweight interactions

## License

MIT
