import { motion, useScroll, useSpring } from 'framer-motion';

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[100]"
      css={{
        background: 'linear-gradient(90deg, #8b5cf6, #f472b6, #f59e0b)',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, #8b5cf6 0%, #f472b6 50%, #f59e0b 100%)',
        }}
      />
    </motion.div>
  );
}
