import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../utils/animations';
import CinematicQuote from '../ui/CinematicQuote';
import PhotoGallery from '../ui/PhotoGallery';
import { photoManifest } from '../../data/photoManifest';

function parseStoryText(text) {
  return text.split('\n\n').filter(Boolean);
}

export default function ChapterCard({ chapter }) {
  const paragraphs = parseStoryText(chapter.story);
  const photos = photoManifest[chapter.id] || [];

  return (
    <motion.article
      id={`chapter-${chapter.id}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
      className="relative"
    >
      <div className="glass rounded-3xl overflow-hidden violet-glow">
        {/* ── Chapter Hero image (first photo, full-bleed top) ── */}
        {photos.length > 0 && (
          <motion.div
            variants={fadeUp}
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: photos[0].aspect > 1.4 ? '21/8' : photos[0].aspect > 1 ? '16/9' : '4/3', maxHeight: '420px' }}
          >
            <img
              src={photos[0].src}
              alt={`Chapter ${chapter.id} hero`}
              loading="eager"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.85)' }}
            />
            {/* gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,15,0.85)] via-[rgba(10,10,15,0.25)] to-transparent" />

            {/* Chapter ID watermark */}
            <div
              className="absolute top-4 left-6 text-7xl font-black leading-none select-none pointer-events-none"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'rgba(255,255,255,0.07)',
              }}
            >
              {String(chapter.id).padStart(2, '0')}
            </div>

            {/* Chapter label over image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--violet-soft)] font-body mb-2">
                Chapter {chapter.id}
              </p>
              <h3
                className="font-display text-2xl md:text-4xl font-bold text-white leading-tight mb-3"
                style={{ fontFamily: 'var(--font-display)', textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}
              >
                {chapter.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 font-body">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} strokeWidth={1.5} className="text-[var(--rose-soft)]" />
                  {chapter.date}
                </span>
                {chapter.location && (
                  <>
                    <span className="text-white/25">·</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} strokeWidth={1.5} className="text-[var(--gold-soft)]" />
                      {chapter.location}
                    </span>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* ── No photo: text header ── */}
        {photos.length === 0 && (
          <motion.div variants={fadeUp} className="relative p-8 md:p-12 pb-0">
            <div
              className="absolute top-6 right-8 text-8xl font-black pointer-events-none select-none"
              style={{ fontFamily: 'var(--font-display)', color: 'rgba(139,92,246,0.05)', lineHeight: 1 }}
            >
              {String(chapter.id).padStart(2, '0')}
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--violet-soft)] font-body mb-3">
              Chapter {chapter.id}
            </p>
            <h3
              className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {chapter.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)] font-body">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} strokeWidth={1.5} className="text-[var(--rose-soft)]" />
                {chapter.date}
              </span>
              {chapter.location && (
                <>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} strokeWidth={1.5} className="text-[var(--gold-soft)]" />
                    {chapter.location}
                  </span>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* ── Body ── */}
        <div className="p-6 md:p-10">
          {/* Story text */}
          <motion.div variants={staggerContainer} className="space-y-4 mb-8">
            {paragraphs.map((para, i) => {
              const isShort = para.length < 60 && !para.includes('.');
              return (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className={`font-editorial leading-relaxed ${
                    isShort
                      ? 'text-xl md:text-2xl text-[var(--text-primary)] font-medium'
                      : 'text-base md:text-lg text-[var(--text-secondary)]'
                  }`}
                  style={{ fontFamily: 'var(--font-editorial)' }}
                >
                  {para}
                </motion.p>
              );
            })}
          </motion.div>

          {/* Quote */}
          {chapter.quote && <CinematicQuote quote={chapter.quote} />}

          {/* Gallery — skip first photo (already used as hero banner) */}
          {photos.length > 1 && (
            <motion.div variants={fadeUp}>
              <PhotoGallery
                photos={photos.slice(1)}
                chapterId={chapter.id}
                label={chapter.placeholderLabel || 'Memories'}
              />
            </motion.div>
          )}

          {/* Single photo chapters: still show lightbox via gallery */}
          {photos.length === 1 && (
            <motion.div variants={fadeUp}>
              <PhotoGallery
                photos={photos}
                chapterId={chapter.id}
                label={chapter.placeholderLabel || 'Memory'}
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
