import { createSlice } from "@reduxjs/toolkit";

const AllRecordsSlice = createSlice({
  name: "All-Records",
  initialState: {
    loading: false,
    data: [],
    isError: false,
  },
  reducers: {
    SendMessage: (state, action) => {},
  },
});

export const { SendMessage } = AllRecordsSlice.actions;

export default AllRecordsSlice.reducer;
