import { persistProduce } from 'renderer/utils/storeUtils';
import create from 'zustand';

interface VisibilityUI {
  drawer: boolean;
  memo: boolean;
  alert: boolean;
}

export type AlertType = 'info' | 'success' | 'error';

interface Alert {
  type: AlertType;
  message: string;
}
export interface UIState {
  visible: VisibilityUI;
  alert: Alert;
  toggleDrawer: () => void;
  toggleMemo: () => void;
  toggleAlert: () => void;
  setAlert: (type: AlertType, message: string) => void;
  closeAll: () => void;
}

const uiPersistProduce = persistProduce('ui');

const useUIStore = create<UIState>((set) => ({
  visible: {
    drawer: false,
    memo: false,
    alert: false,
  },
  alert: {
    type: 'info',
    message: '',
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
  toggleAlert: () =>
    set(
      uiPersistProduce((state) => {
        if (state.visible) {
          state.visible.alert = !state.visible.alert;
        }
      })
    ),
  setAlert: (type: AlertType, message: string) =>
    set(
      uiPersistProduce((state) => {
        if (state.alert) {
          state.alert.type = type;
          state.alert.message = message;
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
