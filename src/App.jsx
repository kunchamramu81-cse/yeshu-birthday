import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Loader from "./components/Loader";
import Intro from "./components/Intro/Intro";
import BackgroundMusic from "./components/BackgroundMusic";

import HeroSection from "./components/sections/HeroSection";
import NarrationSection from "./components/sections/NarrationSection";
import StatsSection from "./components/sections/StatsSection";
import ActSection from "./components/sections/ActSection";
import EpilogueSection from "./components/sections/EpilogueSection";
import LetterSection from "./components/sections/LetterSection";
import FinaleSection from "./components/sections/FinaleSection";
import CreditsSection from "./components/sections/CreditsSection";
import TimelineNav from "./components/sections/TimelineNav";
import SideNav from "./components/ui/SideNav";

import { acts } from "./data/story";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background:
          "linear-gradient(90deg,#8b5cf6 0%,#f472b6 50%,#f59e0b 100%)",
        zIndex: 100,
      }}
    />
  );
}

function SectionDivider() {
  return (
    <div className="py-4 px-6">
      <div className="divider-full max-w-4xl mx-auto" />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);

  const musicRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("film-grain");

    return () => {
      document.body.classList.remove("film-grain");
    };
  }, []);

  return (
    <>
      {/* Music mounted only once */}
      <BackgroundMusic ref={musicRef} />

      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : !started ? (
        <Intro
          onStart={async () => {
            try {
              await musicRef.current.play();
            } catch (err) {
              console.log(err);
            }

            setStarted(true);
          }}
        />
      ) : (
        <div className="min-h-screen bg-[var(--ink)] text-[var(--text-primary)] overflow-x-hidden">

          <ScrollProgressBar />

          <SideNav />

          <HeroSection />

          <NarrationSection />

          <SectionDivider />

          <StatsSection />

          <SectionDivider />

          <TimelineNav />

          {acts.map((act, i) => (
            <div key={act.id}>
              {i > 0 && <SectionDivider />}
              <ActSection act={act} />
            </div>
          ))}

          <SectionDivider />

          <EpilogueSection />

          <SectionDivider />

          <LetterSection />

          <SectionDivider />

          <FinaleSection />

          <SectionDivider />

          <CreditsSection />

        </div>
      )}
    </>
  );
}