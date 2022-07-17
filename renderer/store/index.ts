import create from 'zustand';
import produce from 'immer';

interface VisibilityUI {
  drawer: boolean;
  memo: boolean;
}
export interface UI {
  visible: VisibilityUI;
  toggleDrawer: () => void;
  toggleMemo: () => void;
  closeAll: () => void;
}

const useStore = create<UI>((set) => ({
  visible: {
    drawer: false,
    memo: false,
  },
  toggleDrawer: () =>
    set(
      produce((state) => {
        state.visible.drawer = !state.visible.drawer;
      })
    ),
  toggleMemo: () =>
    set(
      produce((state) => {
        state.visible.memo = !state.visible.memo;
      })
    ),
  closeAll: () =>
    set(
      produce((state) => {
        for (const key in state.visible) {
          state.visible[key] = false;
        }
      })
    ),
}));

export default useStore;
