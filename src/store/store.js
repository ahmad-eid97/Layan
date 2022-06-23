import { configureStore } from '@reduxjs/toolkit';

import userSliceReducer from './slices/userSlice/userSlice';

const store = configureStore({
  reducer: {
    user: userSliceReducer
  }
})

export default store;