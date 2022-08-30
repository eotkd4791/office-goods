import { FC, memo } from 'react';
import EachMemo from 'renderer/components/Memo';
import useMemoStore from 'renderer/store/memo';
import { Memo } from 'renderer/types/memo';
import { FcAddRow as AddRow } from 'react-icons/fc';

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
            <td className="w-full font-bold text-center bg-slate-100" colSpan={4}>
              <div className="flex items-center justify-center h-16">
                <AddRow style={{ fontSize: '5rem' }} />
                <h2 className="ml-8 text-[1.2rem] underline">등록된 메모가 없습니다.</h2>
              </div>
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
