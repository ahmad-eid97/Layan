import { createSlice } from '@reduxjs/toolkit';

var initialState = { user: null }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
})

export const userActions = userSlice.actions;

export default userSlice.reducer;