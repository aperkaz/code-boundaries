import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fibonacci, pell } from "../math";

export interface CalculatorSlice {
  result: number;
}

const initialState: CalculatorSlice = {
  result: 0,
};

export const calculatorSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    calculateFibonacciNumber: (state, action: PayloadAction<number>) => {
      state.result = fibonacci(action.payload);
    },
    calculatePellNumber: (state, action: PayloadAction<number>) => {
      state.result = pell(action.payload);
    },
  },
});

export const actions = calculatorSlice.actions;

export default calculatorSlice.reducer;
