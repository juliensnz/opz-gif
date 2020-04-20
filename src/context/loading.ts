import {createContext} from 'react';

const LoadingContext = createContext<[boolean, (newValue: boolean) => void]>([false, () => {}]);

export {LoadingContext};
