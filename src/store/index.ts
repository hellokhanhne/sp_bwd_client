import { configureStore } from '@reduxjs/toolkit';
import statusReducer from '../features/RemoveBackground';

export const store = configureStore({
  reducer: {
    status: statusReducer
  },
});