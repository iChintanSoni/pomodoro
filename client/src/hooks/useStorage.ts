import { useState } from "react";

const key = "Theme";

const useTheme = <T>(initialValue: T) => {
  const [theme, setTheme] = useState<T>(() => {
    const fromLocal = window.localStorage.getItem(key);
    if (fromLocal) {
      return JSON.parse(fromLocal) as T;
    } else {
      return initialValue;
    }
  });

  const updateTheme = (newValue: T) => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
    setTheme(() => {
      return newValue;
    });
  };

  return { theme, updateTheme };
};

export default useTheme;
