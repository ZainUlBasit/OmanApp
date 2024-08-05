import { createSlice } from "@reduxjs/toolkit";

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
