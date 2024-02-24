import { createSlice } from "@reduxjs/toolkit";

const themes: Theme[] = [
  {
    label: "Ocean",
    imageUrl:
      "https://images.unsplash.com/photo-1565733293285-77aa342b22dd",
    soundUrl:
      "https://cdn.pixabay.com/download/audio/2021/09/06/audio_37aad22374.mp3",
  },
  {
    label: "Forest",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b",
    soundUrl:
      "https://cdn.pixabay.com/download/audio/2021/08/09/audio_6b294070f5.mp3",
  },
  {
    label: "River",
    imageUrl:
      "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2",
    soundUrl:
      "https://cdn.pixabay.com/download/audio/2022/11/05/audio_a90e44eb25.mp3",
  },
  // {
  //   label: "Fire",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1533575770077-052fa2c609fc",
  //   soundUrl:
  //     "https://cdn.pixabay.com/download/audio/2022/11/05/audio_a90e44eb25.mp3",
  // },
];

type Theme = {
  label: string;
  imageUrl: string;
  soundUrl: string;
};

type ThemeState = {
  theme: Theme;
};

const initialState: ThemeState = { theme: themes[0] };

const soundSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = soundSlice.actions;
export { themes };
export type { Theme };
export default soundSlice.reducer;
