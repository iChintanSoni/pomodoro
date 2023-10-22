import { createSlice } from "@reduxjs/toolkit";

const pomodoroTime = 1 * 10 * 1000;

export interface PomodoroState {
  value: number;
  status: "idle" | "started" | "paused";
}

const initialState: PomodoroState = {
  value: Number(pomodoroTime),
  status: "idle",
};

export const pomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    start: (state) => {
      state.status = "started";
    },
    pause: (state) => {
      state.status = "paused";
    },
    decrement: (state) => {
      state.value -= 1000;
    },
    reset: (state) => {
      state.status = "idle";
      state.value = Number(pomodoroTime);
    },
  },
});

// Action creators are generated for each case reducer function
export const { start, pause, decrement, reset } = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
