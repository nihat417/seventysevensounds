import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import musicReducer from './slices/musicSlice'
import { tokenMiddleware } from "../middlewares/tokenMiddleware";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    music:musicReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenMiddleware),
});
