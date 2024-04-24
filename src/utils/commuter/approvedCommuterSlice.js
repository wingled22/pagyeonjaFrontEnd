import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commuterService } from "./approvedCommuterService";

const initialState = {
  approvedCommuters: [],
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getApprovedCommuters = createAsyncThunk(
  "approvedCommuters/getApprovedCommuters",
  async (_, thunkAPI) => {
    try {
      return await commuterService.getCommutersApproved();
    } catch (error) {
      const messsage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(messsage);
    }
  }
);

// create global state for approved commuters
export const commuterSlice = createSlice({
  name: "approvedCommuters",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
    updateCommuters: (state, action) => {
      const { commuter, isForDetailsUpdate, isForRevoke } = action.payload;

      // pag update sa approved commuters global state
      state.approvedCommuters = state.approvedCommuters.map((item) => {
        if (item.commuterId === commuter.commuterId) {
          if (isForDetailsUpdate && !isForRevoke) {
            return { ...item, ...commuter };
          } else if (!isForDetailsUpdate && !isForRevoke) {
            return {
              ...item,
              ...commuter,
              suspensionStatus: commuter.suspensionStatus,
            };
          }
          return {
            ...item,
            ...commuter,
            suspensionStatus: !commuter.suspensionStatus,
          };
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      // getting commuters
      .addCase(getApprovedCommuters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getApprovedCommuters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.approvedCommuters = action.payload;
      })
      .addCase(getApprovedCommuters.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      });

    // // update rider
    // .addCase(updateApprovedRiders.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(updateApprovedRiders.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(updateApprovedRiders.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // })

    // // get rider suspension
    // .addCase(getApprovedRiderSuspension.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getApprovedRiderSuspension.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(getApprovedRiderSuspension.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // })

    // // add rider suspension
    // .addCase(addRiderSuspension.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(addRiderSuspension.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(addRiderSuspension.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // })

    // // update rider suspension
    // .addCase(updateRiderSuspension.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(updateRiderSuspension.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(updateRiderSuspension.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // })

    // // revoke rider suspension
    // .addCase(revokeRiderSuspension.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(revokeRiderSuspension.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(revokeRiderSuspension.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // })

    // // get documents
    // .addCase(getApprovedRiderDocuments.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getApprovedRiderDocuments.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(getApprovedRiderDocuments.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // })

    // // get topup history
    // .addCase(getTopUpHistory.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getTopUpHistory.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(getTopUpHistory.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // });
  },
});

export const { reset, updateCommuters } = commuterSlice.actions;
export default commuterSlice.reducer;
