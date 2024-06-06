import { useTheme } from 'styled-components';
import { IconButton } from '../iconButton/iconButton';
import { AppFooterBody } from '../typography/typography';

import { FooterContainer, SocialMediaWrapper } from './footer.styles';

type FooterProps = {
  showSocialMedias?: boolean;
};
export const Footer = ({ showSocialMedias = true }: FooterProps) => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const renderSocialMediaIcons = () => {
    const handleIconClick = (link: string) => {
      window.open(link, '_blank', 'noopener,noreferrer');
    };
    return (
      <SocialMediaWrapper>
        <IconButton
          icon='linkedin'
          iconColor='#0072b1'
          onClick={() => handleIconClick(theme.links.linkedin)}
        />
        <IconButton
          icon='github'
          onClick={() => handleIconClick(theme.links.github)}
        />
        <IconButton
          icon='resume'
          onClick={() => handleIconClick(theme.links.resume)}
        />
        <IconButton
          icon='email'
          iconColor='#c71610'
          onClick={() => handleIconClick(theme.links.gmail)}
        />
      </SocialMediaWrapper>
    );
  };
  return (
    <FooterContainer>
      <AppFooterBody>
        © {currentYear} Catherine (Yang) Tian. All rights reserved.
      </AppFooterBody>
      {showSocialMedias && renderSocialMediaIcons()}
    </FooterContainer>
  );
};