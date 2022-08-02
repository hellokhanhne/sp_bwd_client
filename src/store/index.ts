import { configureStore } from '@reduxjs/toolkit';
import statusReducer from '../features/RemoveBackground';
import authReducer from '../features/AuthSlice';
export const store = configureStore({
  reducer: {
    status: statusReducer,
    auth: authReducer,
  },
});
