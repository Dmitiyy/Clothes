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
    changeLikes(state, action: PayloadAction<{id: string, data: number}>) {
      if (state.data) {
        state.data
          .find(item => item._id === action.payload.id)!.likes = action.payload.data;
      }
    },
    changeSaved(state, action: PayloadAction<{id: string, data: number}>) {
      if (state.data) {
        state.data
          .find(item => item._id === action.payload.id)!.savedTimes = action.payload.data;
      }
    }
  }
});

export const { setCostumesData, launchFilter, changeLikes, changeSaved } = costumesSlice.actions;
export default costumesSlice.reducer;