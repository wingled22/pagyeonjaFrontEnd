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

export const getCommuterSuspension = createAsyncThunk(
  "approvedCommuters/getCommuterSuspension",
  async (commuterId, thunkAPI) => {
    try {
      return await commuterService.getCommuterSuspension(commuterId);
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

export const revokeCommuterSuspension = createAsyncThunk(
  "approvedCommuters/revokeCommuterSuspension",
  async (formData, thunkAPI) => {
    try {
      return await commuterService.revokeCommuterSuspension(formData);
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

export const getCommuterDocuments = createAsyncThunk(
  "approvedCommuters/getCommuterDocuments",
  async (commuterId, thunkAPI) => {
    try {
      return await commuterService.getCommuterDocuments(commuterId);
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

      // get commuter suspension
      .addCase(getCommuterSuspension.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCommuterSuspension.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getCommuterSuspension.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })

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
      })

      // revoke rider suspension
      .addCase(revokeCommuterSuspension.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(revokeCommuterSuspension.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(revokeCommuterSuspension.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })

      // get documents
      .addCase(getCommuterDocuments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCommuterDocuments.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getCommuterDocuments.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

export const { reset, updateCommuters } = commuterSlice.actions;
export default commuterSlice.reducer;
