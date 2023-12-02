import "./App.css";
import IconButton from "./components/IconButton";
import { useRef, useState } from "react";
import Surroundings from "./surroundings";
import { Close } from "./components/Icons";
import { Pomodoro } from "./pomodoro/Pomodoro";
import useStorage from "./hooks/useStorage";
import { Theme, ThemeContext, themes } from "./theme.context";

export default function App() {
  const sideNavRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleSideNav = () => {
    setOpen(!isOpen);
  };

  const { theme, updateTheme } = useStorage<Theme>(themes[0]);

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="App"
        style={{ backgroundImage: `url(${theme.imageUrl})` }}
      >
        <div className="header">
          <IconButton
            icon="menu"
            onClick={() => {
              toggleSideNav();
            }}
          />
        </div>
        <div
          className="elevatedContainer"
          onClick={toggleSideNav}
          style={{ visibility: isOpen ? "visible" : "hidden" }}
        >
          <div
            className="side-nav"
            onClick={(e) => e.stopPropagation()}
            ref={sideNavRef}
            style={{ width: isOpen ? "100vw" : "0" }}
          >
            <div className="side-nav-header">
              <IconButton icon={Close} onClick={toggleSideNav} />
            </div>
            <div className="side-nav-content">
              <Surroundings theme={theme} onChange={updateTheme} />
            </div>
          </div>
        </div>
        <div className="content">
          <Pomodoro />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
