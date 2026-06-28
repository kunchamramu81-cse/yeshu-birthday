import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { birthdaySurprise } from '../../data/story';
import { fadeUp, staggerContainerSlow } from '../../utils/animations';

function Confetti({ containerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef?.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const resize = () => {
      canvas.width = container ? container.offsetWidth : window.innerWidth;
      canvas.height = container ? container.offsetHeight : window.innerHeight;
    };
    resize();

    const colors = ['#8b5cf6', '#a78bfa', '#f472b6', '#fca5d4', '#f59e0b', '#fcd34d', '#818cf8'];
    const pieces = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 100,
      w: 6 + Math.random() * 8,
      h: 3 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 1.5,
      vy: 1 + Math.random() * 2.5,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.1,
      opacity: 0.7 + Math.random() * 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        p.vx *= 0.999;

        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}

export default function FinaleSection() {
  const containerRef = useRef(null);

  return (
    <section
      id="finale"
      ref={containerRef}
      className="relative py-32 md:py-48 px-6 overflow-hidden text-center"
    >
      {/* Deep background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, rgba(244,114,182,0.06) 40%, transparent 70%)',
        }}
      />

      {/* Confetti animation */}
      <Confetti containerRef={containerRef} />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Cake emoji */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
          className="text-7xl md:text-8xl mb-8 block"
        >
          🎂
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="gradient-text">Happy Birthday,</span>
          <br />
          <span className="text-white text-glow">Yeshu!</span>
        </motion.h2>

        {/* Wishes list */}
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 mt-12 max-w-2xl mx-auto"
        >
          {birthdaySurprise.wishes.map((wish, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-start gap-3 text-left p-4 rounded-2xl glass"
            >
              <span className="text-lg mt-0.5">✨</span>
              <p
                className="font-editorial text-lg text-[var(--text-secondary)] italic"
                style={{ fontFamily: 'var(--font-editorial)' }}
              >
                {wish}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-16 font-editorial text-2xl md:text-3xl italic text-[var(--text-primary)] text-glow"
          style={{ fontFamily: 'var(--font-editorial)' }}
        >
          And may this story… <span className="gradient-text font-semibold">never stop growing.</span>
        </motion.p>
      </div>
    </section>
  );
}
