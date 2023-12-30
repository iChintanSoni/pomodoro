import React from "react";
import "./index.css";
import { MusicNote, MusicOff } from "../components/Icons";
import Text from "./../components/Text";
import IconButton from "./../components/IconButton";
import Divider from "./../components/Divider";
import Slider from "./../components/Slider";
import SurroundingItem from "./surrounding-item";
import { useAppDispatch, useAppSelector } from "../app.hooks";
import { toggleEnabled, changeVolume } from "./../slices/sound.slice";
import { Theme, setTheme, themes } from "./../slices/theme.slice";

function Surroundings() {
  const { theme } = useAppSelector((state) => state.theme);
  const { enabled: soundEnabled, volume } = useAppSelector(
    (state) => state.sound
  );
  const dispatch = useAppDispatch();

  const updateTheme = (theme: Theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <div className="Surroundings">
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <Text variant="h5" className="surrounding-theme-section-label">
            Theme
          </Text>
        </div>
        <div>
          {themes.map((surrounding, index) => (
            <React.Fragment key={surrounding.label}>
              <SurroundingItem
                selected={theme.label === surrounding.label}
                theme={surrounding}
                onSelected={updateTheme}
              />
              {index < themes.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Text variant="h5" className="surrounding-theme">
          Sound
        </Text>
        <div className="theme-sound">
          <IconButton
            icon={soundEnabled ? MusicOff : MusicNote}
            onClick={() => dispatch(toggleEnabled())}
          />
          {soundEnabled && (
            <Slider
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) =>
                dispatch(changeVolume(e.target.value as unknown as number))
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Surroundings;
