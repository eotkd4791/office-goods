import { FC, MouseEventHandler } from 'react';
import { useForm } from 'react-hook-form';
import useMemoStore from 'renderer/store/memo';
import useUIStore from 'renderer/store/ui';
import { Memo } from 'renderer/types/memo';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  toggleMemo: () => void;
}

type MemoContent = Omit<Memo, 'id' | 'createdAt'>;

const MemoForm: FC<Props> = ({ onClick, toggleMemo }) => {
  const closeAll = useUIStore((state) => state.closeAll);
  const createMemo = useMemoStore((state) => state.createMemo);

  const { handleSubmit, register } = useForm<MemoContent>();

  const closeMemo = () => {
    closeAll();
  };

  const onSubmit = handleSubmit(({ memo }) => {
    createMemo(memo);
    toggleMemo();
  });

  return (
    <div className="flex flex-col w-[25rem]">
      <aside className="fixed w-[100vw] h-[100vh] top-0 left-0" onClick={closeMemo} />
      <form onSubmit={onSubmit} className="relative z-10 flex flex-col form-control">
        <header>
          <label
            htmlFor="memo"
            className="flex items-center justify-between p-2 rounded-t-lg bg-primary text-primary-content focus:w-[404px]"
          >
            <h3 className="pl-4 text-xl select-none">Memo</h3>
            <button className="flex items-center justify-center btn btn-ghost" onClick={onClick}>
              __
            </button>
          </label>
        </header>
        <textarea
          id="memo"
          placeholder="메모를 입력해주세요."
          className="w-full rounded-t-none resize-none textarea textarea-primary"
          cols={30}
          rows={10}
          {...register('memo')}
        />
        <footer className="self-end w-[10rem] mt-4 flex justify-between">
          <button type="submit" className="w-[48%] btn btn-info">
            저장
          </button>
          <button
            type="button"
            onClick={closeMemo}
            className="w-[48%] btn btn-ghost btn-outline bg-neutral text-neutral-content"
          >
            취소
          </button>
        </footer>
      </form>
    </div>
  );
};

export default MemoForm;
