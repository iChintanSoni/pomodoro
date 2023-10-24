import { configureStore } from "@reduxjs/toolkit";
import pomodoroReducer from "./pomodoro/pomodoro.slice";
import tasksReducer from "./tasks/tasks.slice";

export const store = configureStore({
  reducer: {
    pomodoro: pomodoroReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
