# What's My Villain Origin Story?

A single-page React app that turns a mundane grievance into a dramatic, cinematic villain origin story using the Anthropic Claude API.

## Run locally

```bash
cd villain-app
npm install
cp .env.example .env
```

Add your Anthropic API key to `.env`:

```
VITE_ANTHROPIC_API_KEY=your_key_here
```

Then:

```bash
npm run dev
```

Open the URL shown (default http://localhost:3001).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Create a new Vercel project and set the **root directory** to `villain-app` (or deploy from inside the `villain-app` folder).
2. Add the environment variable **VITE_ANTHROPIC_API_KEY** in Vercel: Project → Settings → Environment Variables.
3. Deploy. Build command: `npm run build`. Output directory: `dist`.

No backend is required; the app calls the Anthropic API directly from the browser.
