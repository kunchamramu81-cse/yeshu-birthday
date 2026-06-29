import { motion } from "framer-motion";
import "./Intro.css";
import Stars from "../ui/Stars";

export default function Intro({ onStart }) {

  const startStory = () => {
    if (onStart) {
      onStart();
    }
  };

  return (
    <div className="intro">

      <Stars />

      <div className="stars"></div>

      <div className="intro-content">

        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="intro-top"
        >
          🎉 Happy Birthday 🎉
        </motion.h3>

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
          }}
          className="hero-title"
        >
          YESHU{" "}

          <motion.span
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.3,
            }}
          >
            💛
          </motion.span>

        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.1,
          }}
          className="intro-subtitle"
        >
          Every beautiful friendship has a beginning...
        </motion.p>

        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 1.5,
          }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 40px rgba(168,85,247,.7)",
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="enter-btn"
          onClick={startStory}
        >
          ✨ Begin The Story
        </motion.button>

      </div>

    </div>
  );
}