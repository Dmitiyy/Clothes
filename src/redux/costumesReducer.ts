import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICostume } from '../components/ClothesCard';

interface IState {
  data: ICostume[], filterValue: string, page: number, 
  isFilter: boolean, isNextBtn: boolean, isLoading: boolean, isFirstRender: boolean
};

const initialState = {
  data: [], filterValue: '', page: 1, isFilter: false, 
  isNextBtn: true, isLoading: true, isFirstRender: true
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
    },
    changeCostume(state: any, action: PayloadAction<{id: string, data: number, name: string}>) {
      if (state.data) {
        const { id, name, data } = action.payload;
        state.data.find((item: ICostume) => item._id === id)![name] = data;
      }
    }
  }
});

export const { setCostumesData, launchFilter, changeCostume } = costumesSlice.actions;
export default costumesSlice.reducer;