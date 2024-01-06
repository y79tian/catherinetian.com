import { useEffect, useState } from 'react';

const getWindowsDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowsDimension = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowsDimensions(),
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowsDimensions());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowsDimension;
