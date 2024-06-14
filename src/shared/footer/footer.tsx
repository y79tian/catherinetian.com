import { useTheme } from 'styled-components';

import { CommonUtils } from '../../utils';
import { IconButton } from '../iconButton/iconButton';
import { AppFooterBody } from '../typography/typography';

import { FooterContainer, SocialMediaWrapper } from './footer.styles';

type FooterProps = {
  showSocialMedias?: boolean;
};
export const Footer = ({ showSocialMedias = true }: FooterProps) => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const { handleIconClick } = CommonUtils;
  const renderSocialMediaIcons = () => {
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
        © {currentYear} Developed By Catherine Tian. All rights reserved.
      </AppFooterBody>
      {showSocialMedias && renderSocialMediaIcons()}
    </FooterContainer>
  );
};
