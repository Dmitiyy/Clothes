import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGenerateStep = createAsyncThunk(
  'generate/fetchStep', 
  async ({sex, color, mood}: {sex?: string, color?: string, mood?: string}) => {
    const response = await axios.get('http://localhost:3000/costumes/step', {
      params: {sex, color, mood}
    });
    return response.data;
  }
); 

interface IDefaultPayload {
  data: any;
  ini: string;
}

interface IStep {
  description: string;
  options?: string[];
  step: number;
}

interface IState {
  data: {sex: IStep, color: IStep, mood: IStep, event: IStep};
  params: {sex: string, color: string, mood: string, event: string};
  status: string; //* error, loading, success
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
} as IState;

const generateSlice = createSlice({
  name: 'generate',
  initialState,
  reducers: {
    setDataDefault(state: any, action: PayloadAction<IDefaultPayload>) {
      state[action.payload.ini] = action.payload.data;
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
      })
      .addCase(fetchGenerateStep.pending, (state, action) => {state.status = 'loading'})
      .addCase(fetchGenerateStep.rejected, (state, action) => {state.status = 'error'})
  },
});

export const { setDataDefault } = generateSlice.actions;
export default generateSlice.reducer;