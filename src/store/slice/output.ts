import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '..';
import { Output } from '../interface';

// Define a type for the slice state
interface OutputState {
  value: Output | null;
}

// Define the initial state using that type
const initialState: OutputState = {
  value: null,
};

export const outputSlice = createSlice({
  name: 'Output',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setOutput: (state, action: PayloadAction<Output>) => {
      state.value = action.payload;
    },
    clearOutput: (state) => {
      state.value = null;
    },
  },
});

export const { setOutput, clearOutput } = outputSlice.actions;

export const selectOutput = (state: RootState) => state.outputs.value;

export default outputSlice.reducer;
