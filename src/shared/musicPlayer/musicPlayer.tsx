import { useEffect, useRef } from 'react';

import { useAppSelector } from '../../hooks';

import { StyledAudio } from './musicPlayer.styles';

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isPlaying, musicIndex, playlist } = useAppSelector(
    (state) => state.music,
  );

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, musicIndex]);

  return (
    <StyledAudio ref={audioRef} controls src={playlist[musicIndex].src} loop />
  );
};
