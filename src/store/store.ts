import { configureStore } from "@reduxjs/toolkit";
import { openLibraryApi } from "../services/Books";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    [openLibraryApi.reducerPath]: openLibraryApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(openLibraryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
