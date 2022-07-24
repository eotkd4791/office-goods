import { FC, MouseEventHandler } from 'react';
import { useForm } from 'react-hook-form';

import useUIStore from 'renderer/store/ui';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  toggleMemo: () => void;
}

const MemoForm: FC<Props> = ({ onClick, toggleMemo }) => {
  const closeAll = useUIStore((state) => state.closeAll);

  const { handleSubmit } = useForm();

  const closeMemo = () => {
    closeAll();
  };

  const onSubmit = handleSubmit(() => {
    toggleMemo();
  });

  return (
    <div className="flex flex-col w-[25rem]">
      <aside className="fixed w-[100vw] h-[100vh] top-0 left-0" onClick={closeMemo} />
      <form onSubmit={onSubmit} className="relative z-10 flex flex-col form-control">
        <header>
          <label
            htmlFor="memo"
            className="flex items-center justify-between py-2 rounded-t-lg bg-primary text-primary-content focus:w-[404px]"
          >
            <h3 className="pl-4 text-xl select-none">Memo</h3>
            <button className="flex items-center justify-center btn btn-ghost" onClick={onClick}>
              __
            </button>
          </label>
        </header>
        <textarea
          name="memo"
          id="memo"
          placeholder="메모를 입력해주세요."
          className="w-full rounded-t-none resize-none textarea textarea-primary"
          cols={30}
          rows={10}
        />
        <footer className="self-end w-[10rem] mt-4 flex justify-between">
          <button type="submit" className="w-[48%] btn btn-info">
            저장
          </button>
          <button onClick={closeMemo} className="w-[48%] btn btn-ghost btn-outline">
            취소
          </button>
        </footer>
      </form>
    </div>
  );
};

export default MemoForm;
