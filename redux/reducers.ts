import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./types";

const initialState: AppState = {
  // Initial state properties
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    exampleAction: (state, action: PayloadAction<any>) => {
      // Update state based on the action
    },
  },
});

export const { exampleAction } = appSlice.actions;
export default appSlice.reducer;
