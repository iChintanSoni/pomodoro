import "./App.css";
import useAudio from "./hooks/useAudio";
import { Home } from "./home/Home";
import IconButton from "./components/IconButton";
import { useState } from "react";

export default function App() {
  const { isPlaying, play, pause } = useAudio(
    "https://cdn.pixabay.com/download/audio/2021/09/06/audio_37aad22374.mp3"
  );
  const [musicIcon, setMusicIcon] = useState("music_off");
  return (
    <div className="App">
      <div className="Header">
        <IconButton
          icon={musicIcon}
          onClick={() => {
            if (isPlaying()) {
              pause();
              setMusicIcon("music_off");
            } else {
              play();
              setMusicIcon("music_note");
            }
          }}
        ></IconButton>
      </div>
      <div className="home">
        <Home />
      </div>
    </div>
  );
}
