import { createSlice } from '@reduxjs/toolkit';

export interface Customer {
  id: string;
  name: string;
  food: string[];
}

export interface CustomerState {
  value: Customer[];
}

const initialState: CustomerState = {
  value: [], // customers array
};

export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: { },
});

// export const { } = customerSlice.actions;

export default customerSlice.reducer;
