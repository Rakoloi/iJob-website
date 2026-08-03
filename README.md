# iJob Landing Page

Single-page marketing website for the iJob local services marketplace.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Static GitHub Pages build

```bash
npm run build
```

Next.js creates an `out` folder. Deploy the contents of `out` to GitHub Pages.

The project uses:
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

The Android download URL is defined as `BUILD_URL` in `HeroSection.tsx` and `DownloadSection.tsx`.
