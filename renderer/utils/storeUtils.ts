import produce from 'immer';
import persistStore from './persistStore';

interface MutateCallback<T> {
  (state: T): void;
}

export const persistProduce =
  (type: string) =>
  <T>(mutate: MutateCallback<T>) =>
    produce((state: T) => {
      mutate(state);
      persistStore.set(type, state);
    });
