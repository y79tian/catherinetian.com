import { MouseEvent, PropsWithChildren, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';

import useKeyPress from '../../hooks/useKeyPress';

import { OverlayContainer, StyledContent } from './modal.styles';

type ModalProps = PropsWithChildren<{
  height?: string;
  width?: string;
  noPadding?: boolean;
  noScroll?: boolean;
  onMarginClick?: (e: MouseEvent<HTMLDivElement>) => void;
  onEscapeKeyDown?: () => void;
  onPanelClick?: (e: MouseEvent<HTMLDivElement>) => void;
}>;
export const Modal = ({
  height = 'auto',
  width = '21rem',
  noPadding = false,
  noScroll = false,
  onMarginClick = () => {},
  onEscapeKeyDown = () => {},
  onPanelClick = () => {},
  children,
}: ModalProps) => {
  const bodyClassName = useRef(`modal-open-${uuid()}`);
  useEffect(() => {
    const className = bodyClassName.current;
    document.body.classList.add(className);
    return () => {
      document.body.classList.remove(className);
    };
  }, []);

  useKeyPress('Escape', onEscapeKeyDown);
  const handleMarginClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onMarginClick(e);
  };

  const handlePanelClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onPanelClick(e);
  };

  return (
    <OverlayContainer onClick={handleMarginClick}>
      <StyledContent
        $height={height}
        $width={width}
        $noPadding={noPadding}
        $noScroll={noScroll}
        onClick={handlePanelClick}
      >
        {children}
      </StyledContent>
    </OverlayContainer>
  );
};
