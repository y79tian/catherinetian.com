import { PropsWithChildren } from 'react';

import { StyledLink } from './link.styles';

type LinkProps = PropsWithChildren<{
  link: string;
}>;
export const Link = ({ link, children }: LinkProps) => {
  return (
    <StyledLink href={link} target='_blank' rel='noopener noreferrer'>
      {children}
    </StyledLink>
  );
};
