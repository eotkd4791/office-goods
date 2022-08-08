import { ChangeEventHandler, FC, useState } from 'react';
import { Memo } from 'renderer/types/memo';

interface Props {
  memo: Memo;
  toggleMemo(id: string): void;
  updateMemo(memo: Memo): void;
  deleteMemo(id: string): void;
}

const EachMemo: FC<Props> = ({
  memo: { id, memo, checked, createdAt },
  toggleMemo,
  updateMemo,
  deleteMemo,
}) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [newMemo, setNewMemo] = useState<string>(memo);

  const startUpdate = () => {
    setIsUpdating(true);
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewMemo(e.target.value);
  };

  const onUpdate = () => {
    updateMemo({ id, memo: newMemo, checked, createdAt });
    setIsUpdating(false);
  };

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
          <input
            placeholder="수정 내용을 입력하세요."
            className="w-full input input-bordered"
            onChange={onChange}
            value={newMemo}
          />
        ) : (
          memo
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
