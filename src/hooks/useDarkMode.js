import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {

    const [value, setValues] = useLocalStorage(key, initialValue);

    return [value, setValues];
}