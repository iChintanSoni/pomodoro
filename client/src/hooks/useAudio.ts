import { useEffect, useRef } from "react";

const useAudio = (source: string) => {
  const { current: audio } = useRef(new Audio(source));
  audio.loop = true;

  useEffect(() => {
    return () => {
      audio.pause();
      audio.remove();
    };
  }, [audio]);

  const play = () => {
    audio.play();
  };

  const pause = () => {
    audio.pause();
  };

  const isPlaying = () => {
    return !audio.paused;
  };

  return {
    isPlaying,
    play,
    pause,
  };
};

export default useAudio;
