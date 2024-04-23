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
  "riders/approved",
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
      });
  },
});

export const { reset, updateRiders } = riderSlice.actions;
export default riderSlice.reducer;
