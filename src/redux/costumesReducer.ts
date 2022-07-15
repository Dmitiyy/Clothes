import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICostume } from '../components/ClothesCard';

interface IState {data: ICostume[]};
const initialState = {data: []} as IState;

const costumesSlice = createSlice({
  name: 'costumes',
  initialState,
  reducers: {
    setCostumesData(state, action: PayloadAction<{data: any}>) {
      state.data = action.payload.data;
    }
  }
});

export const { setCostumesData } = costumesSlice.actions;
export default costumesSlice.reducer;