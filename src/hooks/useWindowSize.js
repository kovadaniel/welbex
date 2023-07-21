import { useLayoutEffect, useState } from 'react';

/**
 * this hooks sets an eventListener on screen window size
 * and reflects it in 'size' state
 * @returns [screenWidth, screenHeight]
 */
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default useWindowSize;