/* eslint-disable import/no-unused-modules */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeConsumer } from 'styled-components';

import { ThemeMode, THEMES_MODE } from '../../theme';
import { MusicsSrcs, ThemeMusicSrcs } from '../../theme/musics';
import type { RootState } from '../store';

interface musicState {
  isPlaying: boolean;
  playlist: ThemeMusicSrcs;
  musicIndex: number;
}
// Define the initial state using that type
const initialState: musicState = {
  isPlaying: false,
  playlist: MusicsSrcs,
  musicIndex: 0,
};

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    toggleMusic: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    switchMusic: (state) => {
      state.musicIndex = (state.musicIndex + 1) % MusicsSrcs.length;
    },
  },
});

export const { toggleMusic, switchMusic } = musicSlice.actions;

export default musicSlice.reducer;
