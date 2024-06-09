import { styled } from 'styled-components';

import { backgroundColorTransitionStyle } from '../../shared/styles/transitions';

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const OverlayContent = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  z-index: 2;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 80%;
  gap: 1.5rem;
`;

export const Tag = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.375rem;
  color: ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.elevatedBackgroundTertiary};
  padding: 0.4rem 0.8rem;
  border-radius: 0.3rem;
  opacity: 0.8;
  user-select: none;
  ${backgroundColorTransitionStyle}
`;

export const InfoIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 80%;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.infoIconBackgroundPrimary};
  opacity: 0.7;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
  ${backgroundColorTransitionStyle}
`;
export const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
