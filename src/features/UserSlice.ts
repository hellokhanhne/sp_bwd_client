import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
  infor: null | any;
}
const initialState: IinitialState = {
  infor: null,
};

const auth = createSlice({
  name: 'infor',
  initialState,
  reducers: {
    setInfor: (state: IinitialState, action: any) => {
      return { ...state, infor: action.payload };
    },
  },
});

export const { setInfor } = auth.actions;
export default auth.reducer;
