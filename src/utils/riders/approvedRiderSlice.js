import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { riderService } from "./approvedRiderService.js";

const initialState = {
  approvedRiders: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getApproveRiders = createAsyncThunk(
  "approvedRiders/approved",
  async (_, thunkAPI) => {
    try {
      return await riderService.getRidersApproved();
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

export const updateApprovedRiders = createAsyncThunk(
  "approvedRiders/update",
  async (rider, thunkAPI) => {
    try {
      return await riderService.updateRidersApproved(rider);
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

export const getApprovedRiderSuspension = createAsyncThunk(
  "approvedRiders/suspension",
  async (riderId, thunkAPI) => {
    try {
      return await riderService.getRiderSuspension(riderId);
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

export const addRiderSuspension = createAsyncThunk(
  "approvedRiders/addSuspension",
  async (rider, thunkAPI) => {
    try {
      return await riderService.addRiderSuspension(rider);
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

export const updateRiderSuspension = createAsyncThunk(
  "approvedRiders/updateSuspension",
  async ({ updateFormData, suspensionId }, thunkAPI) => {
    try {
      return await riderService.updateRiderSuspension(
        updateFormData,
        suspensionId
      );
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

// create global state for approved riders
export const riderSlice = createSlice({
  name: "approvedRiders",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    updateRiders: (state, action) => {
      const { rider, isForDetailsUpdate, isForRevoke } = action.payload;

      // pag update sa approved riders global state
      state.approvedRiders = state.approvedRiders.map((item) => {
        if (rider.riderId === item.riderId) {
          if (isForDetailsUpdate && !isForRevoke) {
            return { ...item, ...rider };
          } else if (!isForDetailsUpdate && !isForRevoke) {
            return {
              ...item,
              ...rider,
              suspensionStatus: rider.suspensionStatus,
            };
          }
          return {
            ...item,
            ...rider,
            suspensionStatus: !rider.suspensionStatus,
          };
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      // getting riders
      .addCase(getApproveRiders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getApproveRiders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.approvedRiders = action.payload;
      })
      .addCase(getApproveRiders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // update rider
      .addCase(updateApprovedRiders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateApprovedRiders.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateApprovedRiders.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      // get rider suspension
      .addCase(getApprovedRiderSuspension.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getApprovedRiderSuspension.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getApprovedRiderSuspension.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      // add rider suspension
      .addCase(addRiderSuspension.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRiderSuspension.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addRiderSuspension.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      // update rider suspension
      .addCase(updateRiderSuspension.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateRiderSuspension.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateRiderSuspension.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset, updateRiders } = riderSlice.actions;
export default riderSlice.reducer;
