import { PropsWithChildren } from 'react';

import { Footer } from '../footer/footer';
import Navbar from '../navbar/navbar';

import { PageContainer } from './page.styles';

type PageProps = PropsWithChildren<{
  canScroll?: boolean;
  showNavBar?: boolean;
}>;

export const Page = ({
  canScroll = true,
  showNavBar = true,
  children,
}: PageProps) => {
  return (
    <PageContainer canScroll={canScroll}>
      {showNavBar && <Navbar />}
      {children}
      <Footer />
    </PageContainer>
  );
};
