# 🎬 The Story We Never Planned

A cinematic birthday surprise website for Yeshu, built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📦 Build & Deploy to GitHub Pages

1. In `vite.config.js`, set `base` to your GitHub repo name (already set to `/yeshu-birthday/`).
2. In `package.json`, update `homepage` with your GitHub username.
3. Run:

```bash
npm run deploy
```

## 🖼 Adding Your Photos

### Cover Image
Replace `src/assets/cover-placeholder.svg` with your actual cover by importing it in `HeroSection.jsx`:
```js
import coverImg from '../../assets/cover.jpg';
```
Then use `coverImg` as the `backgroundImage` URL.

### Profile Image
In `NarrationSection.jsx`, find the profile div and replace with:
```jsx
<img src={profileImg} alt="Yeshu" className="w-full h-full object-cover" />
```

### Chapter Photos (92 photos)
In `src/data/story.js`, for each chapter, populate the `photos` array:
```js
photos: [
  { src: '/photos/ch1-01.jpg', alt: 'Campus tour', caption: 'Our first day' },
  { src: '/photos/ch1-02.jpg', alt: 'Yellow dress moment' },
]
```

Place all photos inside `public/photos/` folder, organized by chapter if desired.

## 🎨 Project Structure

```
src/
├── data/          story.js — all story content
├── utils/         animations.js — shared Framer Motion variants
├── hooks/         useScrollProgress.js — scroll utilities
├── assets/        cover-placeholder.svg
└── components/
    ├── ui/        ProgressBar, SideNav, PhotoGallery, CinematicQuote, ParticleField
    ├── sections/  Hero, Narration, Stats, Act, Epilogue, Letter, Finale, Credits, TimelineNav
    └── chapter/   ChapterCard — reusable chapter renderer
```
