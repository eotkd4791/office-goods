import { FC, MouseEventHandler } from 'react';
import { BsPencilSquare as Pencil } from 'react-icons/bs';
import useStore from 'renderer/store';
import MemoForm from 'renderer/components/QuickMemo/MemoForm';

const ButtonAddMemo: FC = () => {
  const { visibleMemo, toggleMemo } = useStore((state) => ({
    visibleMemo: state.visible.memo,
    toggleMemo: state.toggleMemo,
  }));

  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    toggleMemo();
  };

  return (
    <>
      <aside className="fixed bottom-8 right-8">
        {visibleMemo ? (
          <MemoForm onClick={onClick} toggleMemo={toggleMemo} />
        ) : (
          <div className="tooltip hover:tooltip-open" data-tip="ctrl + n">
            <button
              className="flex items-center justify-center w-16 h-16 btn-primary text-primary-content btn-circle"
              onClick={onClick}
            >
              <Pencil className="w-7 h-7" />
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default ButtonAddMemo;
