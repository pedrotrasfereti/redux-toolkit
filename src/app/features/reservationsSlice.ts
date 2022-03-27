import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [], // reservations array
};

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
});

export default reservationsSlice.reducer;
