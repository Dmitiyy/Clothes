import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICostume } from '../components/ClothesCard';

export const fetchGenerateStep = createAsyncThunk(
  'generate/fetchStep', 
  async ({sex, color, mood}: {sex?: string, color?: string, mood?: string}) => {
    const response = await axios.get('http://localhost:3000/costumes/step', {
      params: {sex, color, mood}
    });
    return response.data;
  }
); 

interface IDefaultPayload { data: any; ini: string; suit?: boolean, id?: string; name?: string };
interface IStep {
  description: string;
  options?: string[];
  step: number;
}

export type TGenerateParams = {sex: string, color: string, mood: string, event: string};

interface IState {
  data: {sex: IStep, color: IStep, mood: IStep, event: IStep};
  params: TGenerateParams,
  status: string; //* error, loading, success
  suitsData: ICostume[]
};

const initialState = {
  data: {
    sex: {description: 'Select your gender', options: ['man', 'woman'], step: 1}, 
    color: {description: 'Pick a color', options: [], step: 2}, 
    mood: {description: 'Your current mood', options: [], step: 3}, 
    event: {description: 'Where are you going?', options: [], step: 4}
  },
  params: {sex: '', color: '', mood: '', event: ''},
  status: '',
  suitsData: []
} as IState;

const generateSlice = createSlice({
  name: 'generate',
  initialState,
  reducers: {
    setDataDefault(state: any, action: PayloadAction<IDefaultPayload>) {
      const { ini, data, suit, id, name } = action.payload;
      if (suit) {
        const costume = state.suitsData.find((item: ICostume) => item._id === id);
        if (costume) {costume[name!] = data};
      } else {
        state[ini] = data;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGenerateStep.fulfilled, (state, action) => {
        const { color, mood, event } = action.payload;
        const { color: dataColor, mood: dataMood, event: dataEvent } = state.data;

        dataColor.options = color;
        dataMood.options = mood;
        dataEvent.options = event;
        state.status = 'success';
      })
      .addCase(fetchGenerateStep.pending, (state, action) => {state.status = 'loading'})
      .addCase(fetchGenerateStep.rejected, (state, action) => {state.status = 'error'})
  },
});

export const { setDataDefault } = generateSlice.actions;
export default generateSlice.reducer;