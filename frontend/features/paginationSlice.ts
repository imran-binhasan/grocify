// src/redux/slices/pageNavSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageNav: [],
  newStyle: false,
};

const pageNavSlice = createSlice({
  name: 'pageNav',
  initialState,
  reducers: {
    setPageNav: (state, action) => {
      state.pageNav = action.payload;
    },
    setNewStyle: (state, action) => {
      state.newStyle = action.payload;
    },
  },
});

export const { setPageNav, setNewStyle } = pageNavSlice.actions;
export default pageNavSlice.reducer;
