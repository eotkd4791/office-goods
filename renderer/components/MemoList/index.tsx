import { FC, memo } from 'react';
import useMemoStore from 'renderer/store/memo';
import { Memo } from 'renderer/types/memo';
import EachMemo from 'renderer/components/Memo';

interface Props {
  memos: Memo[];
}

const MemoList: FC<Props> = ({ memos }) => {
  const { toggleMemo, updateMemo, deleteMemo } = useMemoStore((state) => ({
    toggleMemo: state.toggleMemo,
    updateMemo: state.updateMemo,
    deleteMemo: state.deleteMemo,
  }));

  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>완료</th>
          <th>내용</th>
          <th className="text-center">수정</th>
          <th className="text-center">삭제</th>
        </tr>
      </thead>
      <tbody>
        {memos.length > 0 ? (
          memos.map((memo) => (
            <EachMemo
              key={memo.id}
              memo={memo}
              toggleMemo={toggleMemo}
              updateMemo={updateMemo}
              deleteMemo={deleteMemo}
            />
          ))
        ) : (
          <tr className="flex justify-center">
            <td className="font-bold text-secondary">⚠️ 등록된 메모가 없습니다.</td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <th>완료</th>
          <th>내용</th>
          <th className="text-center">수정</th>
          <th className="text-center">삭제</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default memo(MemoList);
