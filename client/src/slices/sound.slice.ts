import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type SoundState = {
  enabled: boolean;
  volume: number;
};

const initialState: SoundState = { enabled: false, volume: 0.5 };

const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    toggleEnabled(state) {
      state.enabled = !state.enabled;
    },
    changeVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
  },
});

export const { toggleEnabled, changeVolume } = soundSlice.actions;
export default soundSlice.reducer;
