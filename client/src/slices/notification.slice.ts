import { createSlice } from "@reduxjs/toolkit";

type NotificationState = {
  enabled: boolean;
};

const initialState: NotificationState = { enabled: false };

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    toggleEnabled(state) {
      state.enabled = !state.enabled;
    },
  },
});

export const { toggleEnabled } = notificationSlice.actions;
export default notificationSlice.reducer;
