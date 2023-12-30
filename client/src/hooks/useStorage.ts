import { useState } from "react";

const useStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const fromLocal = window.localStorage.getItem(key);
    if (fromLocal) {
      return JSON.parse(fromLocal) as T;
    } else {
      return initialValue;
    }
  });

  const updateValue = (newValue: T) => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return { value, updateValue };
};

export default useStorage;
