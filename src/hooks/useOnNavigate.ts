import { useLocation, useNavigate } from 'react-router-dom';

import { pathMap, viewsMetadata } from '../shared/navbar/navbar.metadata';

export const useOnNavigate = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
  return onNavigate;
};
