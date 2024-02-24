import React from "react";
import "./index.css";
import Text from "./../components/Text";
import Divider from "./../components/Divider";
import SurroundingItem from "./surrounding-item";
import { useAppDispatch, useAppSelector } from "../app.hooks";
import { Theme, setTheme, themes } from "./../slices/theme.slice";

function Surroundings() {
  const { theme } = useAppSelector((state) => state.theme);
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
    </div>
  );
}

export default Surroundings;
