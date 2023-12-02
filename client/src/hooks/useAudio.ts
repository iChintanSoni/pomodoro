import { useEffect, useRef, useState } from "react";

const useAudio = (source: string) => {
  const { current: audio } = useRef(new Audio());
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);

  useEffect(() => {
    audio.loop = true;
    audio.src = source;

    function pauseListener() {
      setPlaying(false);
    }

    function playListener() {
      setPlaying(true);
    }

    audio.addEventListener("play", playListener);
    audio.addEventListener("pause", pauseListener);

    return () => {
      setPlaying(false);
      audio.pause();
      audio.removeEventListener("play", playListener);
      audio.removeEventListener("pause", pauseListener);
      audio.remove();
    };
  }, [audio, source]);

  useEffect(() => {
    audio.volume = volume;
  }, [audio, volume]);

  const play = () => {
    audio.play();
  };

  const pause = () => {
    audio.pause();
  };

  const togglePlay = () => {
    isPlaying ? pause() : play();
  };

  return {
    isPlaying,
    volume,
    setVolume,
    togglePlay,
  };
};

export default useAudio;
