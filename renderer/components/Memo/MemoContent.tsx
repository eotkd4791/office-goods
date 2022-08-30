import { ChangeEventHandler, FC, useEffect, useRef } from 'react';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const MemoContent: FC<Props> = ({ value, onChange }) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.select();
    }
  }, []);

  return (
    <input
      ref={ref}
      placeholder="수정 내용을 입력하세요."
      className="w-full input input-bordered"
      onChange={onChange}
      value={value}
    />
  );
};

export default MemoContent;
