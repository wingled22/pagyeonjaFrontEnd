import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commuterApprovalService } from "./commuterApprovalService";

const initialState = {
  commuterApprovalRequests: [],
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getCommuterApprovalRequests = createAsyncThunk(
  "commuterApproval/getCommuterApprovalRequests",
  async (_, thunkAPI) => {
    try {
      return await commuterApprovalService.getCommuterApprovalRequests();
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

export const getCommuter = createAsyncThunk(
  "commuterApproval/getCommuter",
  async (userId, thunkAPI) => {
    try {
      return await commuterApprovalService.getCommuter(userId);
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

export const respondCommuterApprovalRequest = createAsyncThunk(
  "commuterApproval/respondCommuterApprovalRequest",
  async ({ userId, approvalResponse, rejectionMessage }, thunkAPI) => {
    try {
      return await commuterApprovalService.respondCommuterApprovalRequest(
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

// export const getcommuterApprovalRequirements = createAsyncThunk(
//   "commuterApproval/getcommuterApprovalRequirements",
//   async (userId, thunkAPI) => {
//     try {
//       return await commuterApprovalService.getcommuterApprovalRequirements(userId);
//     } catch (error) {
//       const messsage =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(messsage);
//     }
//   }
// );

// create global state for approved commuters
export const commuterApprovalSlice = createSlice({
  name: "commuterApproval",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
    updateCommuterApprovalList: (state, action) => {
      const { userId, isApprove } = action.payload;

      if (isApprove) {
        state.commuterApprovalRequests = state.commuterApprovalRequests.filter(
          (item) => item.userId !== userId
        );
      } else {
        state.commuterApprovalRequests = state.commuterApprovalRequests.map(
          (item) => {
            if (item.userId === userId)
              return { ...item, approvalStatus: isApprove };
          }
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // getting rider approval requests
      .addCase(getCommuterApprovalRequests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCommuterApprovalRequests.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.commuterApprovalRequests = action.payload;
      })
      .addCase(getCommuterApprovalRequests.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.payload;
      })

      // get commuter
      .addCase(getCommuter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCommuter.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getCommuter.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })

      // respond commuter approval request
      .addCase(respondCommuterApprovalRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(respondCommuterApprovalRequest.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(respondCommuterApprovalRequest.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      });

    // // get rider approval requiremnts
    // .addCase(getcommuterApprovalRequirements.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(getcommuterApprovalRequirements.fulfilled, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    // })
    // .addCase(getcommuterApprovalRequirements.rejected, (state) => {
    //   state.isLoading = false;
    //   state.isSuccess = false;
    // });
  },
});

export const { reset, updateCommuterApprovalList } =
  commuterApprovalSlice.actions;
export default commuterApprovalSlice.reducer;
