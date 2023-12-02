import React from "react";
import "./index.css";
import useAudio from "../hooks/useAudio";
import { MusicNote, MusicOff } from "../components/Icons";
import Text from "./../components/Text";
import IconButton from "./../components/IconButton";
import Divider from "./../components/Divider";
import Slider from "./../components/Slider";
import { Theme, themes } from "../theme.context";
import SurroundingItem from "./surrounding-item";

interface SurroundingsProps {
  theme: Theme;
  onChange: (value: Theme) => void;
}

function Surroundings({ theme, onChange }: SurroundingsProps) {
  const { isPlaying, volume, setVolume, togglePlay } = useAudio(theme.soundUrl);

  return (
    <div className="Surroundings">
      <Text variant="h5" className="surrounding-theme">
        Theme
      </Text>
      {themes.map((surrounding, index) => (
        <React.Fragment key={surrounding.label}>
          <SurroundingItem
            selected={theme.label === surrounding.label}
            theme={surrounding}
            onSelected={onChange}
          />
          {index < themes.length - 1 && <Divider />}
        </React.Fragment>
      ))}
      <div className="theme-sound">
        <IconButton
          icon={isPlaying ? MusicOff : MusicNote}
          onClick={togglePlay}
        />
        {isPlaying && (
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(e.target.value as unknown as number)}
          />
        )}
      </div>
    </div>
  );
}

export default Surroundings;
