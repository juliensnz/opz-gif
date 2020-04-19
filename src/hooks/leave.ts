import {useEffect, useCallback} from 'react';

const beforeUnloadMessage = 'By leaving the app you will loose your changes. Are you sure you want to leave?';
const useBeforeLeave = (canLeave: () => boolean) => {
  const handleUnload = useCallback(
    (event: BeforeUnloadEvent) => {
      if (canLeave()) {
        return;
      }

      event.preventDefault();
      event.returnValue = beforeUnloadMessage;

      return beforeUnloadMessage;
    },
    [canLeave]
  );
  useEffect(() => {
    window.addEventListener('beforeunload', handleUnload);

    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [handleUnload]);
};

export {useBeforeLeave};
