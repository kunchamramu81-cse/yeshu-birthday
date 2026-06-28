import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { endCredits } from '../../data/story';
import { fadeUp, staggerContainer } from '../../utils/animations';

function LoadingBar() {
  const [step, setStep] = useState(-1);
  const steps = ['0%', ...endCredits.finalScene.loadingSteps];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const pct = step >= 0 ? parseInt(steps[step]) : 0;

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex justify-between text-xs text-[var(--text-muted)] font-body mb-2">
        <span>Creating New Memories…</span>
        <span className="text-[var(--violet-soft)]">{pct}%</span>
      </div>
      <div className="w-full h-0.5 bg-[var(--card)] rounded-full overflow-hidden">
        <motion.div
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--violet), var(--rose))' }}
        />
      </div>
    </div>
  );
}

export default function CreditsSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setVisible(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="credits"
      ref={ref}
      className="relative py-32 md:py-48 px-6 overflow-hidden"
    >
      {/* Gradient fade from top */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, var(--ink), transparent)' }}
      />

      {/* Deep starfield feel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-[var(--text-muted)] font-body mb-4">
            End Credits
          </p>
          <div className="divider" />
        </motion.div>

        {/* Cast */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-body mb-6">
            Cast
          </motion.p>
          <div className="space-y-3">
            {endCredits.cast.map((name, i) => (
              <motion.p
                key={name}
                variants={fadeUp}
                className={`font-display text-xl font-bold ${i === 0 ? 'gradient-text text-2xl' : 'text-[var(--text-secondary)]'}`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {i === 0 ? '⭐ ' : ''}{name}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="divider-full mb-16"
        />

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 space-y-3"
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-body mb-6">
            Statistics
          </motion.p>
          {endCredits.stats.map(stat => (
            <motion.p
              key={stat.label}
              variants={fadeUp}
              className="font-editorial text-xl text-[var(--text-secondary)] italic"
              style={{ fontFamily: 'var(--font-editorial)' }}
            >
              {stat.emoji} {stat.label}
            </motion.p>
          ))}
        </motion.div>

        {/* Special Thanks */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-body mb-4">
            Special Thanks
          </p>
          <p
            className="font-editorial text-xl italic text-[var(--text-secondary)]"
            style={{ fontFamily: 'var(--font-editorial)' }}
          >
            {endCredits.specialThanks}
          </p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          {visible && <LoadingBar />}
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <p
            className="font-display text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {endCredits.finalScene.closing}
          </p>
          <p
            className="font-editorial text-lg italic gradient-text-violet"
            style={{ fontFamily: 'var(--font-editorial)' }}
          >
            {endCredits.finalScene.epilogue}
          </p>
        </motion.div>

        {/* Bottom fade */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-20 text-xs text-[var(--text-muted)] font-body tracking-widest uppercase"
        >
          💜 Made with love by Ramu &nbsp;·&nbsp; {new Date().getFullYear()}
        </motion.div>
      </div>
    </section>
  );
}
