import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from "react-redux";
import userReducer from './userReducer';

const store = configureStore({
  reducer: {
    user: userReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;