import {useRef, useEffect} from 'react';

const useMounted = (beforeUnmount: () => void = () => {}): (() => boolean) => {
  const isMountedRef = useRef(true);
  useEffect(() => {
    return () => {
      beforeUnmount();
      isMountedRef.current = false;
    };
    // eslint-disable-next-line
  }, []);

  return () => isMountedRef.current;
};

export {useMounted};
