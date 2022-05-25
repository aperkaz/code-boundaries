import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calculatorSlice";

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

/**
 * Redux store of the application
 */
export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { actions } from "./calculatorSlice";
