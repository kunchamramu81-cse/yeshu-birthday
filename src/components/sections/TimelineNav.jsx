import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { acts, chapters } from '../../data/story';
import { ChevronDown } from 'lucide-react';

export default function TimelineNav() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const scrollToChapter = (chapterId) => {
    document.getElementById(`chapter-${chapterId}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  const scrollToAct = (actId) => {
    document.getElementById(actId)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <div className="relative py-8 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <button
            onClick={() => setOpen(v => !v)}
            className="group flex items-center gap-3 glass rounded-full px-6 py-3 text-sm font-body text-[var(--text-secondary)] hover:text-white transition-all cursor-pointer"
            style={{ border: '1px solid rgba(139,92,246,0.2)' }}
          >
            <span className="text-[var(--violet-soft)]">🗓</span>
            <span>Jump to Chapter</span>
            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={14} />
            </motion.div>
          </button>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 glass rounded-2xl p-6 overflow-hidden"
              style={{ transformOrigin: 'top center' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {acts.map(act => (
                  <div key={act.id}>
                    <button
                      onClick={() => scrollToAct(act.id)}
                      className="text-xs uppercase tracking-widest text-[var(--violet-soft)] font-body mb-3 hover:text-white transition-colors cursor-pointer text-left"
                    >
                      Act {act.number} · {act.title}
                    </button>
                    <div className="space-y-1.5">
                      {act.chapters.map(chId => {
                        const ch = chapters.find(c => c.id === chId);
                        if (!ch) return null;
                        return (
                          <button
                            key={chId}
                            onClick={() => scrollToChapter(chId)}
                            className="w-full text-left flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors py-1 group cursor-pointer"
                          >
                            <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--violet-soft)] transition-colors w-5 flex-shrink-0">
                              {String(chId).padStart(2, '0')}
                            </span>
                            <span className="font-body truncate">{ch.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
