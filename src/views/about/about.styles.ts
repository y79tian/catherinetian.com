import { styled } from 'styled-components';

import { backgroundColorTransitionStyle } from '../../shared/styles/transitions';
import Breakpoints from '../../theme/breakpoints';
type PageSectionProps = {
  $backgroundColor: string;
};
export const PageContainer = styled.div`
  width: 100%;
  padding: 60px 0 0;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.cardBackgroundPrimary};
  ${backgroundColorTransitionStyle}
`;
export const PageSection = styled.div<PageSectionProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: ${(props) => props.$backgroundColor};
  padding-top: 5rem;
  padding-bottom: 5rem;
  user-select: none;
  ${backgroundColorTransitionStyle}
`;

type ContentContainerProps = {
  $isColumn: boolean;
};
export const ContentContainer = styled.div<ContentContainerProps>`
  width: 75%;
  display: flex;
  flex-direction: ${(props) => (props.$isColumn ? 'column' : 'row')};

  @media (max-width: ${Breakpoints.largeWidth}) {
    flex-direction: column;
    width: 80%;
  }
  gap: 2rem;
`;
type StyledImageProps = {
  $maxWidth: string;
};
export const StyledImage = styled.img<StyledImageProps>`
  max-width: ${(props) => props.$maxWidth};
  aspect-ratio: 5 / 4;
  border-radius: 0.8rem;
  @media (max-width: ${Breakpoints.mediumWidth}) {
    max-width: initial;
    width: 100%;
  }
  ${(props) => props.theme.shadows.d3}
`;
export const StyledImageAnimation = styled(StyledImage)`
  transition: 0.5s;
  -webkit-box-reflect: below 1px
    linear-gradient(transparent, rgba(0, 0, 0, 0.3));
  @media (max-width: ${Breakpoints.mediumWidth}) {
    -webkit-box-reflect: initial;
  }
`;
type StyledImageWrapperProps = {
  $maxWidth: string;
};
export const ImageWrapper = styled.div<StyledImageWrapperProps>`
  position: relative;
  /* width: 100%; */
  max-width: ${(props) => props.$maxWidth};
  @media (max-width: ${Breakpoints.mediumWidth}) {
    max-width: initial;
    width: 100%;
  }
  aspect-ratio: 5 / 4;
  overflow: hidden;
  border-radius: 0.8rem;
  ${(props) => props.theme.shadows.d3}

  &:hover .overlay {
    opacity: 1;
  }
`;

export const StyledTravelImage = styled.img`
  border-radius: 0.8rem;
  height: 100%;
  width: 100%;
`;

export const StyledIntro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  column-gap: 2rem;
  row-gap: 13rem;
  @media (max-width: ${Breakpoints.mediumWidth}) {
    row-gap: 4rem;
    padding-bottom: 0rem;
  }
  transform-style: preserve-3d;
  &:hover ${StyledImageAnimation}:not(:hover) {
    margin: 0 -20px;
    filter: drop-shadow(0 0 15px ${(props) => props.theme.colors.gray2});
    transform: perspective(600px) rotateY(45deg) scale(0.95);
  }

  &:hover ${StyledImageAnimation}:hover ~ ${StyledImageAnimation}:not(:hover) {
    transform: perspective(600px) rotateY(-45deg) scale(0.95);
  }
  padding-bottom: 12rem;
`;

export const TravelImageContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  column-gap: 2rem;
  row-gap: 3rem;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 0 0 0.8rem 0.8rem;
`;
