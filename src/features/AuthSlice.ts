import { createSlice } from '@reduxjs/toolkit';
import { UserRoles } from '~/api/Auth.service';

interface IUserInfo {
  fullname: string;
  email: string;
  avatar: string;
  isVerify: boolean;
  roles:UserRoles
}
interface IinitialState {
  islogin: null | boolean;
  userInfor: null | IUserInfo;
}
const initialState: IinitialState = {
  islogin: false,
  userInfor: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin: (state: IinitialState, action: any) => {
      return { ...state, islogin: action.payload };
    },
    setUserInfor: (state: IinitialState, action: any) => {
      return { ...state, userInfor: action.payload };
    },
  },
});

export const { setIsLogin,setUserInfor } = auth.actions;
export default auth.reducer;
