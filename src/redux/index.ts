import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from "react-redux";
import generateReducer from './generateReducer';

const store = configureStore({
  reducer: {
    generate: generateReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;