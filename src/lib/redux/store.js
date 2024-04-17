import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import { tokenMiddleware } from "../middlewares/tokenMiddleware";


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenMiddleware),
});
