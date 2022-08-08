import { persistProduce } from 'renderer/utils/storeUtils';
import create from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Memo } from 'renderer/types/memo';
import dayjs from 'dayjs';

interface MemoState {
  memos: Memo[];
  createMemo: (memo: string) => void;
  updateMemo: (memo: Memo) => void;
  deleteMemo: (id: string) => void;
  toggleMemo: (id: string) => void;
  setMemos: (memo: Memo[]) => void;
}

const persistMemoProduce = persistProduce('memo');

const useMemoStore = create<MemoState>((set) => ({
  memos: [],
  createMemo: (memo) =>
    set(
      persistMemoProduce((state) => {
        if (state.memos) {
          state.memos.push({
            id: uuidv4(),
            memo,
            createdAt: dayjs(),
            checked: false,
          });
        } else {
          state.memos = [];
        }
      })
    ),
  updateMemo: (newMemo) =>
    set(
      persistMemoProduce((state) => {
        state.memos = state.memos?.map((memo) => (memo.id === newMemo.id ? newMemo : memo));
      })
    ),
  deleteMemo: (id) =>
    set(
      persistMemoProduce((state) => {
        state.memos = state.memos?.filter((memo) => memo.id !== id);
      })
    ),
  toggleMemo: (id) =>
    set(
      persistMemoProduce((state) => {
        const memo = state.memos?.find((memo) => memo.id === id);
        if (memo) {
          memo.checked = !memo.checked;
        }
      })
    ),
  setMemos: (memos) =>
    set(
      persistMemoProduce((state) => {
        state.memos = memos;
      })
    ),
}));

export default useMemoStore;
