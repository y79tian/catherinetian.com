import { useEffect, useState } from 'react';

const useScrollPosition = (ref: React.RefObject<HTMLDivElement>) => {
  const [position, setPosition] = useState<'before' | 'after' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const container = ref.current;
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

    const container = ref.current;
    container?.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return position;
};

export default useScrollPosition;
