import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme.slice";
import soundReducer from "./slices/sound.slice";
import notificationReducer from "./slices/notification.slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    sound: soundReducer,
    notification: notificationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
