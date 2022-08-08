import { useEffect, useState } from 'react';

import usePersistStore from 'renderer/hooks/usePersistStore';
import useMemoStore from 'renderer/store/memo';
import { Memo } from 'renderer/types/memo';

export default function useMemos() {
  const { memos: storedMemos, setMemos: setStoredMemos } = useMemoStore();
  const [memos, setMemos] = useState<Memo[]>(storedMemos);

  usePersistStore<Memo[]>({ key: 'memo.memos', setter: setStoredMemos });

  useEffect(() => {
    setMemos(storedMemos);
  }, [storedMemos]);

  return { memos, setMemos };
}
// TODO:  usePost 와 중복되는 부분이 많음 제거할 것.
