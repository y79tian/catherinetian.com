import { useCallback, useEffect } from 'react';

const useKeyPress = (targetKey: string, onKeyPress: () => void) => {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        event.preventDefault();
        event.stopPropagation();
        onKeyPress();
      }
    },
    [onKeyPress, targetKey],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
};

export default useKeyPress;
