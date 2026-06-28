import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'hero', label: 'Begin' },
  { id: 'narration', label: 'Narration' },
  { id: 'stats', label: 'Statistics' },
  { id: 'act-1', label: 'Act I' },
  { id: 'act-2', label: 'Act II' },
  { id: 'act-3', label: 'Act III' },
  { id: 'letter', label: 'Letter' },
  { id: 'finale', label: 'Finale' },
  { id: 'credits', label: 'Credits' },
];

export default function SideNav() {
  const [active, setActive] = useState('hero');
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      let current = 'hero';
      sections.forEach(section => {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          current = section.id;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 hidden lg:flex"
          role="navigation"
          aria-label="Chapter navigation"
        >
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative flex items-center justify-end gap-3"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <AnimatePresence>
                {hovered === item.id && (
                  <motion.span
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs font-body whitespace-nowrap px-2 py-1 rounded glass text-[var(--text-secondary)]"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
              <button
                onClick={() => scrollTo(item.id)}
                aria-label={`Go to ${item.label}`}
                className={`relative w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  active === item.id
                    ? 'bg-[var(--violet-soft)] scale-150'
                    : 'bg-[var(--text-muted)] hover:bg-[var(--text-secondary)] hover:scale-125'
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-glow"
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: '0 0 8px 3px rgba(139,92,246,0.5)' }}
                  />
                )}
              </button>
            </div>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
