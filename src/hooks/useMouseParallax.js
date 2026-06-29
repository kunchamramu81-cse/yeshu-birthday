import { useEffect, useState } from "react";

export default function useMouseParallax(strength = 25) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * strength;

      setOffset({ x, y });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [strength]);

  return offset;
}