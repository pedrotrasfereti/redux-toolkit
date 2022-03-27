import { createSlice } from '@reduxjs/toolkit';

interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  value: [], // reservations array
};

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
});

export default reservationsSlice.reducer;
