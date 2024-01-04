import { PropsWithChildren, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container, StyledTooltipWrapper } from './tooltipWrapper.styles';
type PlacesType =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

type TooltipBaseProps = {
  place?: PlacesType;
  offset?: number;
  delayShow?: number;
  delayHide?: number;
  hidden?: boolean;
  noArrow?: boolean;
  clickable?: boolean;
  afterShow?: () => void;
  afterHide?: () => void;
};

type TooltipWithText = {
  text: string;
  component?: never;
};

type TooltipWithComponent = {
  text?: never;
  component: ReactNode;
};

type TooltipProps = PropsWithChildren<
  TooltipBaseProps & (TooltipWithText | TooltipWithComponent)
>;

export const TooltipWrapper = ({
  text = '',
  component = null,
  place = 'top',
  offset = 10,
  delayShow = 300,
  delayHide = 300,
  hidden = false,
  noArrow = true,
  clickable = false,
  afterShow = () => {},
  afterHide = () => {},

  children,
}: TooltipProps) => {
  const [id] = useState(uuidv4());

  const renderTooltipWrapper = () => {
    return (
      <StyledTooltipWrapper
        id={id}
        place={place}
        offset={offset}
        delayShow={delayShow}
        delayHide={delayHide}
        hidden={hidden}
        noArrow={noArrow}
        clickable={clickable}
        content={text}
        afterShow={afterShow}
        afterHide={afterHide}
      >
        {component}
      </StyledTooltipWrapper>
    );
  };

  return (
    <Container data-tooltip-id={id}>
      {children}
      {renderTooltipWrapper()}
    </Container>
  );
};
