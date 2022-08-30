import dayjs from 'dayjs';
import { Memo } from 'renderer/types/memo';
import { persistProduce } from 'renderer/utils/storeUtils';
import { v4 as uuidv4 } from 'uuid';
import create from 'zustand';

interface MemoState {
  memos: Memo[];
  date: string[];
  createMemo: (memo: Memo) => void;
  updateMemo: (memo: Memo) => void;
  deleteMemo: (id: string) => void;
  toggleMemo: (id: string) => void;
  setMemos: (memo: Memo[]) => void;
  setMemoDate: (from: string, to?: string) => void;
}

const persistMemoProduce = persistProduce('memo');

const useMemoStore = create<MemoState>((set) => ({
  date: [],
  memos: [],
  createMemo: ({ memo, startDate, endDate }) =>
    set(
      persistMemoProduce((state) => {
        if (state.memos) {
          const newMemo = {
            id: uuidv4(),
            memo,
            createdAt: dayjs(),
            startDate: startDate ? startDate : dayjs().format('YYYY-MM-DD'),
            endDate: endDate ? endDate : dayjs().format('YYYY-MM-DD'),
            checked: false,
          };
          state.memos.push(newMemo);
        } else {
          state.memos = [];
        }
      })
    ),
  updateMemo: (newMemo) =>
    set(
      persistMemoProduce((state) => {
        state.memos = state.memos?.map((memo) => (memo.id === newMemo.id ? newMemo : memo)) || [];
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
  setMemoDate: (from, to) => {
    set(
      persistMemoProduce((state) => {
        state.date = [from, to || from];
      })
    );
  },
}));

export default useMemoStore;
