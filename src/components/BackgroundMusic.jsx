import { forwardRef } from "react";

const BackgroundMusic = forwardRef((props, ref) => {
  return (
    <audio
      ref={ref}
      src="/music/piano.mp3"
      preload="auto"
      loop
      hidden
    />
  );
});

export default BackgroundMusic;