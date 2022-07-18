import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICostume } from '../components/ClothesCard';

interface IState {
  data: ICostume[], filterValue: string, page: number, 
  isFilter: boolean, isNextBtn: boolean, isLoading: boolean
};

const initialState = {
  data: [], filterValue: '', page: 1, isFilter: false, isNextBtn: true, isLoading: true
} as IState;

const costumesSlice = createSlice({
  name: 'costumes',
  initialState,
  reducers: {
    setCostumesData(state: any, action: PayloadAction<{data: any, name: string}>) {
      state[action.payload.name] = action.payload.data;
    },
    launchFilter(state, action: PayloadAction<{value: string}>) {
      state.page = 1;
      state.isFilter = true;
      state.isNextBtn = true;
      state.filterValue = action.payload.value;
    }
  }
});

export const { setCostumesData, launchFilter } = costumesSlice.actions;
export default costumesSlice.reducer;