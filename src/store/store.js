import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import RecordsSlice from "./Slices/RecordsSlice";
import AllRecordsSlice from "./Slices/AllRecordsSlice";

export const store = configureStore({
  reducer: {
    AuthState: AuthSlice,
    RecordsState: RecordsSlice,
    AllRecordsState: AllRecordsSlice,
  },
});
