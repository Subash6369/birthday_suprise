# Dreamy Pink Princess Birthday Website 💗

A responsive 15-section birthday surprise website built with React, Vite, Framer Motion, Tailwind CSS v4 and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Personalize before sharing

Open `src/sections/BirthdaySections.jsx`:
- Change `name` from `Your Princess` to her name or nickname.
- Change `birthdayDate` to her birthday in `YYYY-MM-DDTHH:mm:ss` format.
- Edit the wishes, story memories, reasons, promises and dreams to make them personal.

Add your own photos in `public/images/` with these exact names:
- `photo-1.jpg`
- `photo-2.jpg`
- `photo-3.jpg`
- `photo-4.jpg`
- `photo-5.jpg`
- `photo-6.jpg`

Add a music file at `public/music/romantic.mp3`. Music starts only after the visitor presses the Music button because browsers generally block autoplay with sound.

## Production build

```bash
npm run build
npm run preview
```

## Publish to GitHub

Create an empty GitHub repository, then run:

```bash
git init
git add .
git commit -m "Create birthday surprise website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/birthday-surprise.git
git push -u origin main
```

Replace the remote URL with your own repository URL.

## Deploy to Vercel

1. Sign in at https://vercel.com using GitHub.
2. Choose **Add New → Project**.
3. Import your `birthday-surprise` repository.
4. Vercel detects Vite automatically.
5. Keep build command `npm run build` and output directory `dist`.
6. Select **Deploy**.

After deployment, Vercel gives you a shareable website URL. Every push to the connected main branch triggers a new deployment.

## Notes

- This is a frontend-only project; no backend or database is needed.
- Use photos and music that you have permission to share.
- Replace all sample text with real memories before sending the link.
