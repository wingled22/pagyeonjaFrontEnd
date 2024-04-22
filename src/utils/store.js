import { configureStore } from "@reduxjs/toolkit";
import riderReducer from "./riders/riderSlice";

export const store = configureStore({
  reducer: {
    riders: riderReducer,
  },
});
