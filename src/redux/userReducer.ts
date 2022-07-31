import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICostume } from '../components/ClothesCard';

export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  liked?: Array<ICostume>;
  saved?: Array<ICostume>;
}

interface IState {data: IUser};
const initialState = {data: {}} as IState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<{data: any}>) {
      state.data = action.payload.data;
    },
    changeUserCostume(state: any, action: PayloadAction<{
      id: string, data: number, name: string, dataProperty: string
    }>) {
      if (state.data) {
        const { id, name, data, dataProperty } = action.payload;
        const suit = state.data[dataProperty].find((item: ICostume) => item._id === id);
       
        if (suit) {
          suit[name] = data;
        }
      }
    }
  }
});

export const { setUserData, changeUserCostume } = userSlice.actions;
export default userSlice.reducer;