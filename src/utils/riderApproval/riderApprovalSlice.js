import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { riderApprovalService } from "./riderApprovalService";

const initialState = {
  riderApprovalRequests: [],
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getRiderApprovalRequests = createAsyncThunk(
  "riderApproval/getRiderApprovalRequests",
  async (_, thunkAPI) => {
    try {
      return await riderApprovalService.getRiderApprovalRequests();
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

export const getRider = createAsyncThunk(
  "riderApproval/getRider",
  async (userId, thunkAPI) => {
    try {
      return await riderApprovalService.getRider(userId);
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

export const respondRiderApprovalRequest = createAsyncThunk(
  "riderApproval/respondRiderApprovalRequest",
  async ({ userId, approvalResponse, rejectionMessage }, thunkAPI) => {
    try {
      return await riderApprovalService.respondRiderApprovalRequest(
        userId,
        approvalResponse,
        rejectionMessage
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

export const getRiderApprovalRequirements = createAsyncThunk(
  "riderApproval/getRiderApprovalRequirements",
  async (userId, thunkAPI) => {
    try {
      return await riderApprovalService.getRiderApprovalRequirements(userId);
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

      if (isApprove) {
        state.riderApprovalRequests = state.riderApprovalRequests.filter(
          (item) => item.userId !== userId
        );
      } else {
        state.riderApprovalRequests = state.riderApprovalRequests.map(
          (item) => {
            if (item.userId === userId)
              return { ...item, approvalStatus: isApprove };
            return item;
          }
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // getting rider approval requests
      .addCase(getRiderApprovalRequests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRiderApprovalRequests.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.riderApprovalRequests = action.payload;
      })
      .addCase(getRiderApprovalRequests.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      })

      // get rider
      .addCase(getRider.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRider.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getRider.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })

      // respond rider approval request
      .addCase(respondRiderApprovalRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(respondRiderApprovalRequest.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(respondRiderApprovalRequest.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })

      // get rider approval requiremnts
      .addCase(getRiderApprovalRequirements.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRiderApprovalRequirements.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getRiderApprovalRequirements.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

export const { reset, updateRiderApprovalList } = riderApprovalSlice.actions;
export default riderApprovalSlice.reducer;
