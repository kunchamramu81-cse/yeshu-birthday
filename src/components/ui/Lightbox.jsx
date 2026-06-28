import { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Lightbox({ photos, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const [loaded, setLoaded] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const photo = photos[index];

  const prev = useCallback(() => {
    setLoaded(false);
    setZoomed(false);
    setIndex(i => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const next = useCallback(() => {
    setLoaded(false);
    setZoomed(false);
    setIndex(i => (i + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [prev, next, onClose]);

  // Swipe support
  let touchStart = null;
  const onTouchStart = (e) => { touchStart = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStart = null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: 'rgba(5,5,10,0.96)', backdropFilter: 'blur(24px)' }}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-[var(--rose-soft)] transition-colors cursor-pointer"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-xs text-[var(--text-muted)] font-body tracking-widest">
        {index + 1} / {photos.length}
      </div>

      {/* Prev */}
      {photos.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-[var(--violet-soft)] transition-colors cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.97, x: -20 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-[90vw] max-h-[88vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Blur placeholder shown while loading */}
          {!loaded && (
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(244,114,182,0.06))',
                animation: 'pulse 1.5s ease-in-out infinite',
              }}
            />
          )}
          <motion.img
            src={photo.src}
            alt={photo.alt || `Memory ${index + 1}`}
            onLoad={() => setLoaded(true)}
            animate={{ scale: zoomed ? 1.6 : 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-[90vw] max-h-[88vh] object-contain rounded-xl shadow-2xl cursor-zoom-in"
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.3s ease',
              boxShadow: '0 0 80px rgba(0,0,0,0.8)',
            }}
            onClick={(e) => { e.stopPropagation(); setZoomed(z => !z); }}
            draggable={false}
          />

          {/* Dot strip */}
          {photos.length > 1 && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLoaded(false); setIndex(i); }}
                  className="transition-all duration-200 rounded-full cursor-pointer"
                  style={{
                    width: i === index ? '20px' : '6px',
                    height: '6px',
                    background: i === index ? 'var(--violet-soft)' : 'rgba(255,255,255,0.25)',
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      {photos.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-[var(--violet-soft)] transition-colors cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </motion.div>
  );
}
