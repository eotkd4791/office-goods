import { ChangeEventHandler, FC, useCallback, useState } from 'react';
import { Memo } from 'renderer/types/memo';
import MemoContent from './MemoContent';

interface Props {
  memo: Memo;
  toggleMemo(id: string): void;
  updateMemo(memo: Memo): void;
  deleteMemo(id: string): void;
}

const EachMemo: FC<Props> = ({
  memo: { id, memo, checked, createdAt, startDate, endDate },
  toggleMemo,
  updateMemo,
  deleteMemo,
}) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [newMemo, setNewMemo] = useState<string>(memo);

  const startUpdate = useCallback(() => {
    setIsUpdating(true);
  }, []);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setNewMemo(e.target.value);
  }, []);

  const onUpdate = useCallback(() => {
    updateMemo({ id, memo: newMemo, checked, createdAt, startDate, endDate });
    setIsUpdating(false);
  }, [newMemo]);

  return (
    <tr>
      <td>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            id={id}
            checked={checked}
            onChange={() => toggleMemo(id)}
          />
        </label>
      </td>
      <td className="max-w-[500px] w-full whitespace-pre-wrap break-words break-all">
        {isUpdating ? (
          <MemoContent value={newMemo} onChange={onChange} />
        ) : (
          <article className={`${checked ? 'line-through' : 'no-underline'}`}>{memo}</article>
        )}
      </td>
      <td className="w-full text-right">
        {isUpdating ? (
          <button className="btn btn-accent" onClick={onUpdate}>
            확인
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={startUpdate}>
            수정
          </button>
        )}
      </td>
      <td className="w-full text-right">
        <button className="btn btn-warning" onClick={() => deleteMemo(id)}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default EachMemo;
