import { styled } from 'styled-components';

import Breakpoints from '../../theme/breakpoints';

export const ContentContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: ${Breakpoints.mediumWidth}) {
    width: 70%;
  }
  @media (max-width: ${Breakpoints.smallWidth}) {
    width: 80%;
  }
`;

export const ColorBar = styled.div`
  background-color: ${(props) => props.theme.colors.indigoDark};
  width: 4rem;
  height: 8px;
  border-radius: 1rem 0 1rem 0;
`;

export const TitleTag = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-direction: column;
  user-select: none;
`;
type StyledImageProps = {
  $maxWidth: string;
};

export const StyledImage = styled.img<StyledImageProps>`
  width: 65%;
  max-width: ${(props) => props.$maxWidth};
  aspect-ratio: 5 / 3;
  border-radius: 0.8rem;
  @media (max-width: ${Breakpoints.mediumWidth}) {
    width: 100%;
  }
  ${(props) => props.theme.shadows.d3}
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ImageSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  @media (max-width: ${Breakpoints.mediumWidth}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledIframe = styled.iframe`
  margin: 2rem 0 0;
  width: 100%;
  aspect-ratio: 5 / 3;
  border: none;
`;

export const TextWrapperInRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  align-items: baseline;
  @media (max-width: ${Breakpoints.smallWidth}) {
    flex-direction: column;
    gap: 0rem;
  }
`;
