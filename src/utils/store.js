import { configureStore } from "@reduxjs/toolkit";
import approvedRiderReducer from "./riders/approvedRiderSlice";

export const store = configureStore({
  reducer: {
    approvedRiders: approvedRiderReducer,
  },
});
