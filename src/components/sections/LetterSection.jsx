import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { birthdayLetter } from '../../data/story';
import { fadeUp, staggerContainer } from '../../utils/animations';

export default function LetterSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const paragraphs = birthdayLetter.body.split('\n\n').filter(Boolean);

  return (
    <section id="letter" ref={ref} className="relative py-28 md:py-44 px-6 overflow-hidden">
      {/* Deep background glow */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, rgba(244,114,182,0.04) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </motion.div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--rose-soft)] font-body mb-3">
            {birthdayLetter.chapter}
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold gradient-text"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            A Letter
          </h2>
          <div className="divider mt-6" />
        </motion.div>

        {/* Letter card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(26,26,40,0.9) 0%, rgba(20,14,30,0.95) 100%)',
            border: '1px solid rgba(139,92,246,0.15)',
            boxShadow: '0 0 60px rgba(139,92,246,0.08), 0 0 120px rgba(244,114,182,0.04)',
          }}
        >
          {/* Decorative corner ornaments */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-[var(--violet)] opacity-30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-[var(--violet)] opacity-30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-[var(--violet)] opacity-30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[var(--violet)] opacity-30 rounded-br-lg" />

          <div className="p-10 md:p-14">
            {/* Salutation */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-2xl md:text-3xl font-bold text-[var(--violet-soft)] mb-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {birthdayLetter.to}
            </motion.p>

            {/* Letter body */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="space-y-5"
            >
              {paragraphs.map((para, i) => {
                const isThankYou = para.startsWith('Thank you');
                return (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className={`
                      font-editorial leading-relaxed
                      ${isThankYou
                        ? 'text-base text-[var(--text-secondary)] pl-4 border-l border-[var(--violet)] border-opacity-30'
                        : 'text-lg text-[var(--text-secondary)] italic'}
                    `}
                    style={{ fontFamily: 'var(--font-editorial)' }}
                  >
                    {para}
                  </motion.p>
                );
              })}
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pt-8"
              style={{ borderTop: '1px solid rgba(139,92,246,0.12)' }}
            >
              <p className="text-2xl md:text-3xl font-bold gradient-text font-display mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                Happy Birthday, Yeshu. 🎂💜
              </p>
              <p
                className="font-editorial italic text-[var(--text-muted)] mt-4 text-lg"
                style={{ fontFamily: 'var(--font-editorial)' }}
              >
                Thank you… for being part of my story.
              </p>
              <p className="text-sm text-[var(--violet-soft)] font-body mt-4 tracking-widest">
                {birthdayLetter.from}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
