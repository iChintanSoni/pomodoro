import "./App.css";
import IconButton from "./components/IconButton";
import { useEffect, useRef, useState } from "react";
import Surroundings from "./surroundings";
import { Close, MusicNote, MusicOff } from "./components/Icons";
import Pomodoro from "./pomodoro/Pomodoro";
import SideNav from "./components/SideNav";
import SideNavHeader from "./components/SideNav/SideNavHeader";
import SideNavContent from "./components/SideNav/SideNavContent";
import Notifications from "./notifications";
import { useAppDispatch, useAppSelector } from "./app.hooks";
import { toggleEnabled } from "./slices/sound.slice";

export default function App() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { theme } = useAppSelector((state) => state.theme);
  const { enabled: soundEnabled, volume } = useAppSelector(
    (state) => state.sound
  );
  const dispatch = useAppDispatch();
  const { current: audio } = useRef(new Audio());

  useEffect(() => {
    audio.loop = true;
  }, [audio]);

  useEffect(() => {
    soundEnabled ? audio.play() : audio.pause();
  }, [audio, soundEnabled]);

  useEffect(() => {
    audio.volume = volume;
  }, [audio, volume]);

  useEffect(() => {
    audio.src = theme.soundUrl;
    dispatch(toggleEnabled());
  }, [dispatch, audio, theme]);

  return (
    <div className="App" style={{ backgroundImage: `url(${theme.imageUrl})` }}>
      <div className="header">
        <IconButton
          icon={soundEnabled ? MusicOff : MusicNote}
          onClick={() => dispatch(toggleEnabled())}
        />
        <IconButton icon="menu" onClick={() => setOpen(!isOpen)} />
      </div>
      <SideNav open={isOpen} onClose={() => setOpen(false)}>
        <SideNavHeader>
          <IconButton icon={Close} onClick={() => setOpen(false)} />
        </SideNavHeader>
        <SideNavContent>
          <Surroundings />
          <Notifications />
        </SideNavContent>
      </SideNav>
      <div className="content">
        <Pomodoro />
      </div>
    </div>
  );
}
