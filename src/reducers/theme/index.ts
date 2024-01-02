/* eslint-disable import/no-unused-modules */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeConsumer } from 'styled-components';

import { ThemeMode, THEMES_MODE } from '../../theme';
import type { RootState } from '../store';

// Define a type for the slice state
interface themeState {
  theme: ThemeMode;
}

// Define the initial state using that type
const initialState: themeState = {
  theme: THEMES_MODE.light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.theme =
        state.theme === THEMES_MODE.light
          ? THEMES_MODE.dark
          : THEMES_MODE.light;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
