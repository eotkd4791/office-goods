import create from 'zustand';
import { persistProduce } from 'renderer/utils/storeUtils';

interface VisibilityUI {
  drawer: boolean;
  memo: boolean;
}
export interface UIState {
  visible: VisibilityUI;
  toggleDrawer: () => void;
  toggleMemo: () => void;
  closeAll: () => void;
}

const uiPersistProduce = persistProduce('ui');

const useUIStore = create<UIState>((set) => ({
  visible: {
    drawer: false,
    memo: false,
  },
  toggleDrawer: () =>
    set(
      uiPersistProduce((state) => {
        if (state.visible) {
          state.visible.drawer = !state.visible.drawer;
        }
      })
    ),
  toggleMemo: () =>
    set(
      uiPersistProduce((state) => {
        if (state.visible) {
          state.visible.memo = !state.visible.memo;
        }
      })
    ),
  closeAll: () =>
    set(
      uiPersistProduce((state) => {
        if (state.visible) {
          for (const key in state.visible) {
            state.visible[<keyof VisibilityUI>key] = false;
          }
        }
      })
    ),
}));

export default useUIStore;
