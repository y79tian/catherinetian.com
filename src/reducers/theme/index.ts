import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { ThemeMode, THEMES_MODE } from '../../theme';
import { ThemeConsumer } from 'styled-components';

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
