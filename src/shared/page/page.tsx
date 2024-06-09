import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import useKeyPress from '../../hooks/useKeyPress';
import { Footer } from '../footer/footer';
import Navbar from '../navbar/navbar';
import { pathMap, viewsMetadata } from '../navbar/navbar.metadata';
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
  const [position, setPosition] = useState<'before' | 'after' | null>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onNavigate = (isPrev: boolean) => {
    const currentIndex = pathMap.get(pathname);
    if (currentIndex !== undefined) {
      let nextIndex;
      if (isPrev) {
        nextIndex =
          (currentIndex - 1 + viewsMetadata.length) % viewsMetadata.length;
      } else {
        nextIndex = (currentIndex + 1) % viewsMetadata.length;
      }
      const nextPath = viewsMetadata[nextIndex].pathname;
      navigate(nextPath);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const scrollPosition = container.scrollTop + rect.top;
        const containerMidpoint = rect.top + rect.height / 2;

        if (scrollPosition < containerMidpoint) {
          setPosition('before');
        } else {
          setPosition('after');
        }
      }
    };
    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
      {showNavBar && <Navbar />}
      {children}
      <Footer showSocialMedias={showSocialMedias} />
      {canScroll && renderScrollButton()}
    </PageContainer>
  );
};
