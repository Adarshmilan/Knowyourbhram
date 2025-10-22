# Know Your Bharm

A small, static, educational web project that shows short kid-friendly science Q&A cards and includes a simple in-browser chatbot UI. This repository is a client-side web app — no server-side code is required or included.

## What this is

- A static site that displays question cards (front = question, back = short answer). Cards are loaded from JSON files in the `question/` folder and shuffled each time.
- A category bar lets users switch between topic files (`physics.json`, `biology.json`, `neuro.json`, `earth.json`, and `allques.json`).
- A small chat UI (in `chatbot/`) can query an in-browser chatbot fallback. The chatbot currently calls a client-side SDK if present; if you don't want that, the client will still work as a simple local Q→A fallback.

## Files and folders

- `index.html` — Main site: category bar, card grid and UI.
- `style.css` — Desktop and general styling.
- `mobilestyle.css` — Mobile-specific overrides (applies at small widths).
- `script.js` — Client logic: fetch JSON, shuffle, render cards, card flip behavior, and category buttons.
- `chatbot/` — Chat UI and supporting assets:
  - `chatbot.html` — Simple chat page.
  - `chatbotlog.js` — Chat client code with a loading indicator and a client-side fallback.
  - `chatst.css` — Chat styles.
- `question/` — JSON data files used as the content source. Examples:
  - `allques.json` — General questions (object mapping question -> answer).
  - `physics.json`, `biology.json`, `neuro.json`, `earth.json` — Topic-specific question files.

## How it works

- On page load the main page (`index.html`) calls `script.js` which fetches `question/allques.json` by default.
- The code in `script.js` accepts either a JSON object (mapping question→answer) or an array-like structure and will convert either into an internal array of [question, answer] pairs.
- Cards are shuffled using Fisher–Yates and up to 15 cards are rendered into the `.mainbody` container.
- Clicking a card toggles its flip (front/back) using CSS 3D transforms.
- Clicking a category button fetches the corresponding `question/*.json` file and updates the cards. The active category button receives the `.active` class.

## JSON format

The `script.js` consumer supports two simple formats for each `question/*.json` file:

1. Object format (recommended):

```
{
  "Why is the sky blue?": "Because air scatters blue light more than other colors.",
  "How do plants make food?": "Plants use sunlight to turn water and CO2 into sugar."
}
```

2. Array format (also supported):

```
[
  ["Why is the sky blue?", "Because air scatters blue light..."],
  ["How do plants make food?", "Plants use sunlight..."]
]
```

When you add or edit files in `question/`, keep valid JSON syntax (use a JSON validator if unsure).

## Chatbot behavior (client-only)

- The chat UI in `chatbot/` can use a client-side SDK if included in the page. If that SDK isn't available or fails, the chat page will fall back to a simple in-browser response strategy using the available JSON datasets.
- The chat UI shows a typing/loading indicator while waiting for a reply.

Notes: This project is intentionally static. There is no server code included in this repository. If you later decide to add server-side features (for example to route requests to an external AI service), add server code in a separate branch or folder and keep API keys out of the client.

## Run locally (static)

Because this is a static site, you can open `index.html` in a browser — however, modern browsers restrict `fetch()` when pages are loaded via the `file://` protocol. To ensure JSON is loaded correctly, serve the folder over a local HTTP server.

Recommended simple options (choose one):

PowerShell (Windows):

```powershell
# Python 3 built-in server (if Python is installed)
python -m http.server 8000

# or using Node.js http-server (if you have npm and http-server installed)
npx http-server -p 8000
```

Then open http://localhost:8000 in your browser and navigate to the project folder.

## Mobile notes

- Mobile-specific styles are included in `mobilestyle.css`. At small widths the category bar becomes a fixed bottom navigation and cards stack vertically.

## Customization

- Add new topic JSON files under `question/` and wire them to the category buttons in `index.html` and `script.js` (button id and the `fetchAndShowFromFile(...)` call).
- Edit `style.css` to change the card appearance, colors, and responsive breakpoints.

## Troubleshooting

- If cards don't appear: make sure you're serving the site over HTTP (see Run locally).
- If a JSON file doesn't load: open DevTools → Network to see the fetch errors and validate the JSON file's syntax.

## Placeholders / Links

- Live demo: https://adarshmilan.github.io/Knowyourbhram/
- Repository: https://github.com/Adarshmilan/Knowyourbhram

## License & Contact

This is a personal project. Feel free to reuse the ideas and code for learning and personal projects. For questions or suggestions contact: adarshmilan92@gmail.com
