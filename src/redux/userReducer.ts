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
      id: string, data: number, name: string, dataProperty: boolean
    }>) {
      if (state.data) {
        const { id, name, data } = action.payload;

        const findCostume = (arr: Array<ICostume>) => arr.find((item: ICostume) => item._id === id);

        const liked: any = findCostume(state.data.liked);
        const saved: any = findCostume(state.data.saved);
    
        if (liked) {liked[name] = data};
        if (saved) {saved[name] = data};
      }
    }
  }
});

export const { setUserData, changeUserCostume } = userSlice.actions;
export default userSlice.reducer;