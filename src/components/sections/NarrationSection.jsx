import { motion } from 'framer-motion';
import { openingNarration, meta } from '../../data/story';
import { fadeUp, staggerContainerSlow } from '../../utils/animations';

const PROFILE_SRC = '/yeshu-birthday/photos/ch01/photo_01.jpg';

export default function NarrationSection() {
  return (
    <section id="narration" className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(139,92,246,0.07) 0%,transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--violet-soft)] font-body mb-3">
            Opening Narration
          </p>
          <div className="divider" />
        </motion.div>

        {/* Profile photo — "first seen" image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-14"
        >
          <div
            className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden"
            style={{
              border: '2px solid rgba(139,92,246,0.4)',
              boxShadow: '0 0 40px rgba(139,92,246,0.25), 0 0 80px rgba(139,92,246,0.1)',
            }}
          >
            <img
              src={PROFILE_SRC}
              alt="Yeshu"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Narration lines */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-5 text-center"
        >
          {openingNarration.map((line, i) => {
            const isHighlight = i === 3 || i === 10;
            const isItalic = i === 1 || i === 2 || i === 4 || i === 5;
            return (
              <motion.p
                key={i}
                variants={fadeUp}
                className={`font-editorial leading-relaxed
                  ${isHighlight ? 'text-xl md:text-2xl text-[var(--text-primary)] font-semibold gradient-text-violet' : 'text-lg md:text-xl text-[var(--text-secondary)]'}
                  ${isItalic ? 'italic' : ''}`}
                style={{ fontFamily: 'var(--font-editorial)' }}
              >
                {line}
              </motion.p>
            );
          })}
        </motion.div>

        {/* Cast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--text-muted)] font-body mb-6">Starring</p>
          <div className="flex flex-wrap justify-center gap-3">
            {meta.cast.map((name, i) => (
              <span
                key={name}
                className="px-5 py-2 rounded-full glass text-sm font-body"
                style={{
                  color: i === 0 ? 'var(--violet-soft)' : 'var(--text-secondary)',
                  border: i === 0 ? '1px solid rgba(139,92,246,0.3)' : undefined,
                }}
              >
                ⭐ {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
