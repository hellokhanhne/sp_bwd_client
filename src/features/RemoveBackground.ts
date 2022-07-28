import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
  bgRemoved: null | boolean;
}
const initialState: IinitialState = {
  bgRemoved: null,
};

const removeBackground = createSlice({
  name: 'removeBg',
  initialState,
  reducers: {
    setActionStatus: (state: IinitialState, action: any) => {
      return { ...state, bgRemoved: action.payload };
    },
  },
});

export const { setActionStatus } = removeBackground.actions;
export default removeBackground.reducer;
