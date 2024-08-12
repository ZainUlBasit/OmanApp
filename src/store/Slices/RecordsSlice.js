import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUsersAPI } from "../../Api_Requests/Api_Requests";

export const fetchRecords = createAsyncThunk("records/fetch", async () => {
  try {
    const response = await GetUsersAPI();
    console.log(response.data);
    return response.data.data || c[];
  } catch (error) {
    console.log(error);
    throw error; // Throw error to trigger the rejected case
  }
});

const RecordsSlice = createSlice({
  name: "Records",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecords.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchRecords.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchRecords.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
    });
  },
});

export default RecordsSlice.reducer;
