import {useState} from 'react';

const useBooleanState = (defaultValue: boolean): [boolean, () => void, () => void] => {
  const [value, setValue] = useState(defaultValue);

  return [value, () => setValue(true), () => setValue(false)];
};

export {useBooleanState};
