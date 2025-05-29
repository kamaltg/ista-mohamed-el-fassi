import { apiSlice } from "@/features/api/apiSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Manages cache lifetime and expirations, required when using RTK Query in apiSlice
    getDefaultMiddleware().concat(apiSlice.middleware),
});
