import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { authApi } from './authSlice';
import costumesReducer from './costumesReducer';
import generateReducer from './generateReducer';
import userReducer from './userReducer';

const store = configureStore({
  reducer: {
    generate: generateReducer,
    user: userReducer,
    costumes: costumesReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;