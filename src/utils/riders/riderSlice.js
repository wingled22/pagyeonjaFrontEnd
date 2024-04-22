import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { riderService } from "./riderService";

const initialState = {
  riders: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create global state for approved riders
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
  },
  extraReducers: (builder) => {
    builder
      // topic creation
      .addCase(getApproveRiders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getApproveRiders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.materials.push(action.payload);
      })
      .addCase(getApproveRiders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = riderSlice.actions;
export default riderSlice.reducer;
