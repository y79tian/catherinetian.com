import { useScroll, useSpring } from 'framer-motion';
import { PropsWithChildren, useRef } from 'react';
import { useTheme } from 'styled-components';

import { useOnNavigate } from '../../hooks';
import useKeyPress from '../../hooks/useKeyPress';
import useScrollPosition from '../../hooks/useScrollPosition';
import { Footer } from '../footer/footer';
import Navbar from '../navbar/navbar';
import { ScrollButton } from '../scrollButton/scrollButton';
import { Subtitle1 } from '../typography/typography';

import { PageContainer } from './page.styles';

type PageProps = PropsWithChildren<{
  canScroll?: boolean;
  showNavBar?: boolean;
  showSocialMedias?: boolean;
}>;

export const Page = ({
  canScroll = true,
  showNavBar = true,
  showSocialMedias = true,
  children,
}: PageProps) => {
  const theme = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const onNavigate = useOnNavigate();
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  const yProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const position = useScrollPosition(containerRef);
  const scrollToTop = () =>
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () =>
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  useKeyPress('ArrowUp', scrollToTop);
  useKeyPress('ArrowDown', scrollToBottom);
  useKeyPress('ArrowRight', () => onNavigate(false));
  useKeyPress('ArrowLeft', () => onNavigate(true));

  const Icon =
    position === 'after' ? theme.icons['arrowUp'] : theme.icons['arrowDown'];
  const renderScrollButton = () => {
    return (
      <ScrollButton
        onClick={position === 'after' ? scrollToTop : scrollToBottom}
      >
        <Icon size='1.3rem' />
        <Subtitle1>{position === 'after' ? 'Top' : 'Bottom'}</Subtitle1>
      </ScrollButton>
    );
  };
  return (
    <PageContainer ref={containerRef} $canScroll={canScroll}>
      {showNavBar && <Navbar canScroll={canScroll} yProgress={yProgress} />}
      {children}
      <Footer showSocialMedias={showSocialMedias} />
      {canScroll && renderScrollButton()}
    </PageContainer>
  );
};
