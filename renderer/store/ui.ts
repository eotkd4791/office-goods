import { persistProduce } from 'renderer/utils/storeUtils';
import create from 'zustand';

interface VisibilityUI {
  drawer: boolean;
  memo: boolean;
  alert: boolean;
  applicantForm: string | false;
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
  toggleApplicantForm: (id: string | undefined) => void;
  setAlert: (type: AlertType, message: string) => void;
  closeAll: () => void;
}

const uiPersistProduce = persistProduce('ui');

const useUIStore = create<UIState>((set) => ({
  visible: {
    drawer: false,
    memo: false,
    alert: false,
    applicantForm: false,
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
  toggleApplicantForm: (id: string | undefined) =>
    set(
      uiPersistProduce((state) => {
        if (state.visible) {
          const applicantForm = state.visible.applicantForm;
          if (applicantForm || typeof id === 'undefined') {
            state.visible.applicantForm = false;
          } else {
            state.visible.applicantForm = id;
          }
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
