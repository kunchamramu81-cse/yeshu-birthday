import { motion } from 'framer-motion';
import { friendshipStats } from '../../data/story';
import { fadeUp, staggerContainer, scaleIn } from '../../utils/animations';

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative py-24 md:py-36 px-6 overflow-hidden"
    >
      {/* Background gradient band */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.04) 50%, transparent 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--rose-soft)] font-body mb-3">
            By the Numbers
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Friendship Statistics
          </h2>
          <p
            className="font-editorial text-lg text-[var(--text-secondary)] italic mt-3"
            style={{ fontFamily: 'var(--font-editorial)' }}
          >
            What one year of friendship looks like in numbers
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {friendshipStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`glass rounded-2xl p-6 flex gap-4 items-start violet-glow
                ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
              `}
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{stat.icon}</span>
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-body mb-1.5">
                  {stat.label}
                </p>
                <p
                  className={`font-display font-bold leading-tight
                    ${stat.label === 'Friendship' ? 'gradient-text text-xl' : 'text-[var(--text-primary)] text-lg'}
                  `}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stat.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="divider-full mt-16"
        />
      </div>
    </section>
  );
}
