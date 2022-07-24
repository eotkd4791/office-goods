import { useEffect } from 'react';
import persistStore from 'renderer/utils/persistStore';

interface Params<T> {
  key: string;
  setter: (data: T) => void;
}

export default function usePersistStore<T>({ key, setter }: Params<T>) {
  useEffect(() => {
    const persistedData = persistStore.get(key) as T;
    setter(persistedData);
  }, []);
}
