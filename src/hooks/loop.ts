import {useState, useCallback} from 'react';
import {Loop} from '../model/loop';

const useLoopState = (): [Loop[], (loop: Loop) => void, (loopToRemove: number) => void] => {
  const [loops, setLoops] = useState<Loop[]>([]);

  const setLoop = useCallback(
    (newLoop: Loop) => {
      const updatedLoops = [...loops].filter((loop) => loop.sprite !== newLoop.sprite);

      setLoops([...updatedLoops, newLoop]);
    },
    [loops, setLoops]
  );
  const removeLoop = useCallback(
    (loopToRemove: number) => {
      const updatedLoops = [...loops].filter((loop) => loop.sprite !== loopToRemove);

      setLoops(updatedLoops);
    },
    [loops, setLoops]
  );

  return [loops, setLoop, removeLoop];
};

export {useLoopState};
