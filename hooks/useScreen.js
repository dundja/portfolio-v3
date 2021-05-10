import { useState, useEffect } from 'react';

function useScreen() {
  const [windowWidth, setWindowWidth] = useState(undefined);
  useEffect(() => {
    function handleWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWidth);
    handleWidth();

    return () => window.removeEventListener('resize', handleWidth);
  }, []);

  return {
    desktop: windowWidth >= 1280,
  };
}

export default useScreen;
