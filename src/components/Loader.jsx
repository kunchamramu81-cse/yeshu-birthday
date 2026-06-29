import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onFinish();
          }, 1200);

          return 100;
        }

        return p + 2;
      });
    }, 55);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="loader">

      <div className="loader-content">

        <p className="loader-small">
          EVERY BEAUTIFUL FRIENDSHIP...
        </p>

        <h1>Loading Memories</h1>

        <div className="loader-bar">

          <div
            className="loader-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <span>{progress}%</span>

      </div>

    </div>
  );
}