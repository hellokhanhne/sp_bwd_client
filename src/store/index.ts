import { configureStore } from '@reduxjs/toolkit';
import statusSlice from '../features/RemoveBackground';
import authSlice from '../features/AuthSlice';
import UserSlice from '~/features/UserSlice';
export const store = configureStore({
  reducer: {
    status: statusSlice,
    auth: authSlice,
    infor: UserSlice,
  },
});
