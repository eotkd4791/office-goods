import { FC, memo } from 'react';
import EachMemo from 'renderer/components/Memo';
import useMemoStore from 'renderer/store/memo';
import { Memo } from 'renderer/types/memo';

interface Props {
  memos: Memo[];
}

const MemoList: FC<Props> = ({ memos }) => {
  const memoActions = useMemoStore();

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
        {memos && memos.length > 0 ? (
          memos.map((memo) => <EachMemo key={memo.id} memo={memo} {...memoActions} />)
        ) : (
          <tr className="w-full">
            <td className="w-full font-bold text-center text-secondary" colSpan={3}>
              ⚠️ 등록된 메모가 없습니다.
            </td>
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
