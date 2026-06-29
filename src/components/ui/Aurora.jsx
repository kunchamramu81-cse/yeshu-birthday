import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      animate={{
        background: [
          "radial-gradient(circle at 20% 30%, rgba(168,85,247,.30), transparent 45%), radial-gradient(circle at 80% 70%, rgba(236,72,153,.25), transparent 45%)",

          "radial-gradient(circle at 70% 25%, rgba(168,85,247,.35), transparent 45%), radial-gradient(circle at 25% 80%, rgba(59,130,246,.20), transparent 45%)",

          "radial-gradient(circle at 20% 30%, rgba(168,85,247,.30), transparent 45%), radial-gradient(circle at 80% 70%, rgba(236,72,153,.25), transparent 45%)"
        ]
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}