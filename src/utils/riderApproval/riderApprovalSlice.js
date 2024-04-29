import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { riderApprovalService } from "./riderApprovalService";

const initialState = {
  riderApprovalRequests: [],
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create global state for approved commuters
export const riderApprovalSlice = createSlice({
  name: "riderApproval",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
    updateRiderApprovalList: (state, action) => {
      const { userId, isApprove } = action.payload;

      // pag update sa approved commuters global state
      state.riderApprovalRequests = state.riderApprovalRequests.map(() => {
        if (isApprove) {
          return state.riderApprovalRequests.filter(
            (item) => item.userId !== userId
          );
        }
        return state.riderApprovalRequests.map((item) => {
          if (item.userId === userId)
            return { ...item, approvalStatus: isApprove };
        });
      });
    },
  },
  extraReducers: (builder) => {
    // builder
    //   // getting commuters
    //   .addCase(getApprovedCommuters.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getApprovedCommuters.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccess = true;
    //     state.approvedCommuters = action.payload;
    //   })
    //   .addCase(getApprovedCommuters.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.isSuccess = false;
    //     state.message = action.payload;
    //   })
    // // get approved commuter
    // .addCase(getApprovedCommuter.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getApprovedCommuter.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(getApprovedCommuter.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // })
    // // update commuter
    // .addCase(updateApprovedCommuter.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(updateApprovedCommuter.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(updateApprovedCommuter.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // })
    // // get commuter suspension
    // .addCase(getCommuterSuspension.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getCommuterSuspension.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(getCommuterSuspension.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // })
    // // add rider suspension
    // .addCase(addCommuterSuspension.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(addCommuterSuspension.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(addCommuterSuspension.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // })
    // // update commuter suspension
    // .addCase(updateCommuterSuspension.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(updateCommuterSuspension.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(updateCommuterSuspension.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // })
    // // revoke rider suspension
    // .addCase(revokeCommuterSuspension.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(revokeCommuterSuspension.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(revokeCommuterSuspension.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // })
    // // get documents
    // .addCase(getCommuterDocuments.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getCommuterDocuments.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(getCommuterDocuments.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // })
    // // get ride history
    // .addCase(getCommuterRideHistory.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getCommuterRideHistory.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(getCommuterRideHistory.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // });
  },
});

export const { reset, updateRiderApprovalList } = riderApprovalSlice.actions;
export default riderApprovalSlice.reducer;
