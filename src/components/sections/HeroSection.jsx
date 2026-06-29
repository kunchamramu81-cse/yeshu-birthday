import Aurora from "../ui/Aurora";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import ParticleField from '../ui/ParticleField';
import { meta } from '../../data/story';
import useMouseParallax from "../../hooks/useMouseParallax";

// Use Srijan night photo as the cinematic cover — most visually striking
const COVER_SRC = '/photos/ch14/photo_03.jpg';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const { x, y: mouseY } = useMouseParallax(18);

  const scrollDown = () => {
    document.getElementById('narration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax cover image */}
      <motion.div
    style={{
        y,
        scale,
        x,
        rotateY: x / 12,
        rotateX: -mouseY / 12
    }} className="absolute inset-0 will-change-transform">
        <img
          src={COVER_SRC}
          alt="Cover"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-[var(--ink)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        {/* Extra cinematic vignette */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)' }}
        />
      </motion.div>
      <Aurora />
      {/* Particles */}
      <div className="absolute inset-0 z-10">
        <ParticleField count={45} />
      </div>

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-10 md:h-14 bg-black z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--ink)] to-transparent z-20" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        {/* Genre pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {meta.genres.map(g => (
            <span key={g.label} className="text-xs px-3 py-1 rounded-full glass text-[var(--text-secondary)] tracking-wider uppercase font-body">
              {g.emoji} {g.label}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="block text-white text-glow">The Story</span>
          <span className="block gradient-text italic font-bold">We Never Planned</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-editorial text-lg md:text-xl text-[var(--text-secondary)] italic mb-2 mt-4"
          style={{ fontFamily: 'var(--font-editorial)' }}
        >
          {meta.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)] font-body mb-10"
        >
          Written by <span className="text-[var(--violet-soft)]">{meta.writtenBy}</span>
          &nbsp;·&nbsp;
          Starring <span className="text-[var(--rose-soft)]">{meta.birthday.person}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center gap-6 text-xs text-[var(--text-muted)] uppercase tracking-widest font-body mb-12"
        >
          <span>{meta.runtime.chapters} Chapters</span>
          <span className="text-[var(--violet)]">·</span>
          <span>{meta.runtime.photographs} Photographs</span>
          <span className="text-[var(--violet)]">·</span>
          <span>Countless Memories</span>
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollDown}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-medium text-white cursor-pointer overflow-hidden"
          style={{
            background: 'linear-gradient(135deg,rgba(139,92,246,0.8),rgba(244,114,182,0.6))',
            border: '1px solid rgba(139,92,246,0.4)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: 'linear-gradient(135deg,rgba(139,92,246,1),rgba(244,114,182,0.9))' }} />
          <Play size={16} className="relative z-10 fill-white" />
          <span className="relative z-10 tracking-wide">Begin the Story</span>
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        onClick={scrollDown}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--violet-soft)] transition-colors cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-body">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}
