import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICostume } from '../components/ClothesCard';

interface IState {data: ICostume[], filterValue: string, page: number};
const initialState = {data: [], filterValue: '', page: 1} as IState;

const costumesSlice = createSlice({
  name: 'costumes',
  initialState,
  reducers: {
    setCostumesData(state: any, action: PayloadAction<{data: any, name: string}>) {
      state[action.payload.name] = action.payload.data;
    }
  }
});

export const { setCostumesData } = costumesSlice.actions;
export default costumesSlice.reducer;