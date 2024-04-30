import { configureStore } from "@reduxjs/toolkit";
import approvedRiderReducer from "./riders/approvedRiderSlice";
import approvedCommuterReducer from "./commuter/approvedCommuterSlice";
import riderApprovalReducer from "./riderApproval/riderApprovalSlice";

export const store = configureStore({
  reducer: {
    approvedRiders: approvedRiderReducer,
    approvedCommuters: approvedCommuterReducer,
    riderApprovals: riderApprovalReducer,
  },
});
