import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUsersAPI } from "../../Api_Requests/Api_Requests";

export const fetchRecords = createAsyncThunk("records/fetch", async () => {
  try {
    const response = await GetUsersAPI();
    console.log(response.data);
    return [];
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
  reducers: {
    SendMessage: (state, action) => {},
  },
});

export const { SendMessage } = RecordsSlice.actions;

export default RecordsSlice.reducer;
