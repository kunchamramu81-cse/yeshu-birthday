import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2 } from 'lucide-react';
import Lightbox from './Lightbox';

// ─── Lazy image with blur-up fade ────────────────────────────────────────────
function LazyImage({ src, alt, className, style, onClick, priority = false }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style} onClick={onClick}>
      {/* low-fi blur placeholder */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: 'linear-gradient(135deg,rgba(139,92,246,0.12),rgba(244,114,182,0.07))',
          opacity: loaded ? 0 : 1,
        }}
      />
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 1.04 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full object-cover"
        draggable={false}
      />
      {/* hover shimmer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Maximize2 size={14} className="text-white drop-shadow" />
      </div>
    </div>
  );
}

// ─── Layout 1: Hero + Masonry (6+ photos) ────────────────────────────────────
function HeroMasonryLayout({ photos, onOpen }) {
  const [hero, ...rest] = photos;
  return (
    <div className="space-y-2">
      {/* Hero full-width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full rounded-2xl overflow-hidden cursor-pointer group"
        style={{ aspectRatio: hero.aspect > 1.5 ? '16/7' : '16/9' }}
        onClick={() => onOpen(0)}
      >
        <LazyImage src={hero.src} alt="Chapter hero" className="w-full h-full" priority />
      </motion.div>
      {/* Masonry-style rest */}
      <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
        {rest.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="rounded-xl overflow-hidden cursor-pointer group"
            style={{ aspectRatio: p.aspect > 1 ? '4/3' : '3/4' }}
            onClick={() => onOpen(i + 1)}
          >
            <LazyImage src={p.src} alt={`Memory ${i + 2}`} className="w-full h-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Layout 2: Staggered 2-column masonry ────────────────────────────────────
function StaggeredMasonryLayout({ photos, onOpen }) {
  const col1 = photos.filter((_, i) => i % 2 === 0);
  const col2 = photos.filter((_, i) => i % 2 === 1);

  const renderCol = (col, startIdx) =>
    col.map((p, i) => {
      const globalIdx = startIdx === 0 ? i * 2 : i * 2 + 1;
      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
          className="rounded-xl overflow-hidden cursor-pointer group mb-2"
          style={{ aspectRatio: p.aspect > 1 ? '4/3' : '3/4' }}
          onClick={() => onOpen(globalIdx)}
        >
          <LazyImage src={p.src} alt={`Memory ${globalIdx + 1}`} className="w-full h-full" />
        </motion.div>
      );
    });

  return (
    <div className="grid grid-cols-2 gap-2">
      <div>{renderCol(col1, 0)}</div>
      <div className="mt-6">{renderCol(col2, 1)}</div>
    </div>
  );
}

// ─── Layout 3: Cinematic widescreen strip ────────────────────────────────────
function CinematicStripLayout({ photos, onOpen }) {
  return (
    <div className="space-y-2">
      {photos.map((p, i) => {
        const isWide = p.aspect > 1.2;
        const isPortrait = p.aspect < 0.8;
        if (isWide) {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="w-full rounded-2xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: '21/8' }}
              onClick={() => onOpen(i)}
            >
              <LazyImage src={p.src} alt={`Memory ${i + 1}`} className="w-full h-full" />
            </motion.div>
          );
        }
        return null;
      })}
      {/* portraits in a row */}
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(photos.filter(p => p.aspect < 0.8).length, 3)},1fr)` }}>
        {photos.map((p, i) => {
          if (p.aspect >= 0.8) return null;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="rounded-xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: '3/4' }}
              onClick={() => onOpen(i)}
            >
              <LazyImage src={p.src} alt={`Memory ${i + 1}`} className="w-full h-full" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Layout 4: Featured duo (2 photos) ───────────────────────────────────────
function DuoLayout({ photos, onOpen }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {photos.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: i * 0.12 }}
          className="rounded-2xl overflow-hidden cursor-pointer group"
          style={{ aspectRatio: p.aspect > 1 ? '4/3' : '3/4' }}
          onClick={() => onOpen(i)}
        >
          <LazyImage src={p.src} alt={`Memory ${i + 1}`} className="w-full h-full" priority={i === 0} />
        </motion.div>
      ))}
    </div>
  );
}

// ─── Layout 5: Single hero (1 photo) ─────────────────────────────────────────
function SingleHeroLayout({ photos, onOpen }) {
  const p = photos[0];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: p.aspect > 1 ? '16/9' : '4/5', maxHeight: '70vh' }}
      onClick={() => onOpen(0)}
    >
      <LazyImage src={p.src} alt="Chapter memory" className="w-full h-full" priority />
    </motion.div>
  );
}

// ─── Layout 6: Triptych (3 equal photos) ─────────────────────────────────────
function TriptychLayout({ photos, onOpen }) {
  const [hero, ...rest] = photos;
  const hasHero = photos.some(p => p.aspect > 1.5);

  if (photos.length === 3 && !hasHero) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {photos.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: i % 2 === 1 ? 20 : 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-xl overflow-hidden cursor-pointer group"
            style={{ aspectRatio: '3/4' }}
            onClick={() => onOpen(i)}
          >
            <LazyImage src={p.src} alt={`Memory ${i + 1}`} className="w-full h-full" />
          </motion.div>
        ))}
      </div>
    );
  }

  // mixed: hero on left, stack on right
  return (
    <div className="grid grid-cols-5 gap-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="col-span-3 rounded-2xl overflow-hidden cursor-pointer group"
        style={{ aspectRatio: '4/5' }}
        onClick={() => onOpen(0)}
      >
        <LazyImage src={hero.src} alt="Featured memory" className="w-full h-full" priority />
      </motion.div>
      <div className="col-span-2 flex flex-col gap-2">
        {rest.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            className="flex-1 rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => onOpen(i + 1)}
          >
            <LazyImage src={p.src} alt={`Memory ${i + 2}`} className="w-full h-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Layout 7: Grid (4 equal squares) ────────────────────────────────────────
function GridLayout({ photos, onOpen }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {photos.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: i * 0.07 }}
          className="rounded-xl overflow-hidden cursor-pointer group aspect-square"
          onClick={() => onOpen(i)}
        >
          <LazyImage src={p.src} alt={`Memory ${i + 1}`} className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
}

// ─── Layout 8: Panoramic banner for wide shots ───────────────────────────────
function PanoramaLayout({ photos, onOpen }) {
  return (
    <div className="space-y-2">
      {photos.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.08 }}
          className="w-full rounded-2xl overflow-hidden cursor-pointer group"
          style={{ aspectRatio: '21/9' }}
          onClick={() => onOpen(i)}
        >
          <LazyImage src={p.src} alt={`Memory ${i + 1}`} className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
}

// ─── Smart layout picker ──────────────────────────────────────────────────────
function pickLayout(photos, chapterId) {
  const n = photos.length;
  const allWide = photos.every(p => p.aspect > 1.2);
  const allPortrait = photos.every(p => p.aspect < 0.85);
  const mixed = !allWide && !allPortrait;

  if (n === 1) return 'single';
  if (n === 2) return 'duo';
  if (n === 3) return 'triptych';
  if (n === 4 && allPortrait) return 'grid';
  if (n === 4) return 'staggered';
  if (allWide) return 'panorama';
  if (n >= 6 && mixed) return chapterId % 3 === 0 ? 'heroMasonry' : 'staggered';
  if (n >= 5) return chapterId % 2 === 0 ? 'cinematic' : 'heroMasonry';
  return 'staggered';
}

// ─── Main Gallery component ───────────────────────────────────────────────────
export default function PhotoGallery({ photos = [], chapterId = 1, label = 'Memories' }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  if (!photos || photos.length === 0) return null;

  const layout = pickLayout(photos, chapterId);

  const LayoutComponent = {
    single: SingleHeroLayout,
    duo: DuoLayout,
    triptych: TriptychLayout,
    grid: GridLayout,
    staggered: StaggeredMasonryLayout,
    heroMasonry: HeroMasonryLayout,
    cinematic: CinematicStripLayout,
    panorama: PanoramaLayout,
  }[layout] || HeroMasonryLayout;

  return (
    <div className="mt-8">
      {/* Gallery header */}
      <div className="flex items-center gap-3 mb-5">
        <Camera size={15} className="text-[var(--violet-soft)]" strokeWidth={1.5} />
        <span className="text-xs uppercase tracking-widest font-body text-[var(--text-muted)]">
          {label}
        </span>
        <span className="ml-auto text-xs font-body text-[var(--text-muted)] tabular-nums">
          {photos.length} {photos.length === 1 ? 'photo' : 'photos'}
        </span>
      </div>

      {/* Gallery */}
      <LayoutComponent photos={photos} onOpen={openLightbox} />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={photos}
            initialIndex={lightboxIndex}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
