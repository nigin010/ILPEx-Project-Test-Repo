import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TokenSlice {
  token : string;
  userid : string;
}
const initialState: TokenSlice = {
  token : '',
  userid : '',
};
export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    userToken(state: {token : string, userid : string}, action: PayloadAction<TokenSlice>) {
      state.token = action.payload.token;
      state.userid = action.payload.userid;
    },
  },
});

export const {userToken} = tokenSlice.actions;
export default tokenSlice.reducer;
