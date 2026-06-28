import { motion } from 'framer-motion';
import { chapters } from '../../data/story';
import ChapterCard from '../chapter/ChapterCard';
import { fadeUp, fadeIn } from '../../utils/animations';

export default function ActSection({ act }) {
  const actChapters = chapters.filter(ch => act.chapters.includes(ch.id));

  return (
    <section id={act.id} className="relative py-20 md:py-32">
      {/* Act header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative text-center px-6 mb-20 md:mb-28"
      >
        {/* Act number — large watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="text-[12rem] md:text-[18rem] font-black leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'rgba(139,92,246,0.03)',
            }}
          >
            {act.number}
          </span>
        </div>

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--violet-soft)] font-body mb-4">
            Act {act.number}
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {act.title}
          </h2>
          <p
            className="font-editorial text-lg md:text-xl italic text-[var(--text-secondary)] max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-editorial)' }}
          >
            "{act.quote}"
          </p>
          <div className="divider mt-8" />
        </div>
      </motion.div>

      {/* Intermission block (Act II and III) */}
      {act.intermission && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto px-6 mb-16"
        >
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(244,114,182,0.05))',
              border: '1px solid rgba(139,92,246,0.12)',
            }}
          >
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-body mb-4">
              Intermission
            </p>
            <div
              className="font-editorial text-lg text-[var(--text-secondary)] italic leading-relaxed"
              style={{ fontFamily: 'var(--font-editorial)' }}
            >
              {act.intermission.split('\n').map((line, i) => (
                <p key={i} className="mb-1">{line}</p>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Chapters */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-10 md:space-y-14">
        {actChapters.map((chapter, i) => (
          <ChapterCard key={chapter.id} chapter={chapter} index={i} />
        ))}
      </div>

      {/* Act epilogue */}
      {act.epilogue && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-2xl mx-auto px-6 mt-20 text-center"
        >
          <div className="divider-full mb-10" />
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--text-muted)] font-body mb-4">
            End of Act {act.number}
          </p>
          <p
            className="font-editorial text-xl italic text-[var(--text-secondary)]"
            style={{ fontFamily: 'var(--font-editorial)' }}
          >
            "{act.epilogue}"
          </p>
        </motion.div>
      )}
    </section>
  );
}
