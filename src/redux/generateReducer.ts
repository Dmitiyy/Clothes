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
  choice: string;
  params: {}
};

const initialState = {
  data: {
    sex: {description: 'Select your gender', options: ['man', 'woman'], step: 1}, 
    color: {description: '', options: [], step: 2}, 
    mood: {description: '', options: [], step: 3}, 
    event: {description: '', options: [], step: 4}
  },
  choice: '',
  params: []
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
    builder.addCase(fetchGenerateStep.fulfilled, (state, action) => {
      console.log(action.payload);
    })
  },
});

export const { setDataDefault } = generateSlice.actions;
export default generateSlice.reducer;