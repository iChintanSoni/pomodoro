import { createContext } from "react";

export interface Theme {
  label: string;
  imageUrl: string;
  soundUrl: string;
}

export const themes: Theme[] = [
  {
    label: "Ocean",
    imageUrl:
      "https://images.pexels.com/photos/3569950/pexels-photo-3569950.jpeg",
    soundUrl:
      "https://cdn.pixabay.com/download/audio/2021/09/06/audio_37aad22374.mp3",
  },
  {
    label: "Forest",
    imageUrl:
      "https://images.pexels.com/photos/1068508/pexels-photo-1068508.jpeg",
    soundUrl:
      "https://cdn.pixabay.com/download/audio/2021/08/09/audio_6b294070f5.mp3",
  },
  {
    label: "River",
    imageUrl:
      "https://images.pexels.com/photos/281000/pexels-photo-281000.jpeg",
    soundUrl:
      "https://cdn.pixabay.com/download/audio/2022/11/05/audio_a90e44eb25.mp3",
  },
];

export const ThemeContext = createContext(themes[0]);
