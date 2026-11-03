# darus.com
Personal site for Darus Trutna. Plain static HTML/CSS/JS, hosted on Firebase Hosting.

## Add an entry
Edit `public/data/entries.json` and add an object to `building`, `useful`, `tools`, `games`, or `ideas`:
`{"title": "...", "note": "...", "url": "https://..."}`. Entries marked `"example": true` are placeholders; replace them.

## Run locally
`npx serve public`  ·  Deploy: `firebase deploy --only hosting`
