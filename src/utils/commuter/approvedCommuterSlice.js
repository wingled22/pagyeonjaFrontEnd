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

export const updateApprovedCommuter = createAsyncThunk(
  "approvedCommuters/updateApprovedCommuter",
  async (formData, thunkAPI) => {
    try {
      return await commuterService.updateApprovedCommuters(formData);
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

export const addCommuterSuspension = createAsyncThunk(
  "approvedCommuters/addCommuterSuspension",
  async (formData, thunkAPI) => {
    try {
      return await commuterService.addCommuterSuspension(formData);
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

export const updateCommuterSuspension = createAsyncThunk(
  "approvedCommuters/updateCommuterSuspension",
  async (formData, thunkAPI) => {
    try {
      return await commuterService.updateCommuterSuspension(formData);
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
      })

      // update commuter
      .addCase(updateApprovedCommuter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateApprovedCommuter.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateApprovedCommuter.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })

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

      // add rider suspension
      .addCase(addCommuterSuspension.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCommuterSuspension.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addCommuterSuspension.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })

      // update commuter suspension
      .addCase(updateCommuterSuspension.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCommuterSuspension.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateCommuterSuspension.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      });

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
