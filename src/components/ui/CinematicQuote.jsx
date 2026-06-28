import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

export default function CinematicQuote({ quote, className = '' }) {
  return (
    <motion.blockquote
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      className={`relative my-10 text-center ${className}`}
    >
      <div className="divider mb-6" />
      <p
        className="font-editorial text-xl md:text-2xl italic text-[var(--text-secondary)] leading-relaxed px-4"
        style={{ fontFamily: 'var(--font-editorial)' }}
      >
        "{quote}"
      </p>
      <div className="divider mt-6" />
    </motion.blockquote>
  );
}
