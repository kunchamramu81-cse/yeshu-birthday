import { motion } from 'framer-motion';
import { epilogue } from '../../data/story';
import { fadeUp, staggerContainer } from '../../utils/animations';

export default function EpilogueSection() {
  const paragraphs = epilogue.text.split('\n\n').filter(Boolean);

  return (
    <section className="relative py-24 md:py-36 px-6 overflow-hidden">
      {/* Ambient blur */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--text-muted)] font-body mb-3">
            Epilogue
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {epilogue.title}
          </h2>
          <div className="divider mt-6" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5 text-center"
        >
          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className={`
                font-editorial leading-relaxed
                ${i === paragraphs.length - 1
                  ? 'text-xl md:text-2xl gradient-text-violet font-semibold'
                  : 'text-lg md:text-xl text-[var(--text-secondary)] italic'}
              `}
              style={{ fontFamily: 'var(--font-editorial)' }}
            >
              {para}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
