import { useRouter } from 'next/router';
import { FC } from 'react';
import { FcAddDatabase as AddData } from 'react-icons/fc';

const EmptyPost: FC = () => {
  const { push } = useRouter();

  return (
    <div className="w-full h-full hero bg-base-200 rounded-xl">
      <div className="flex-col hero-content lg:flex-row">
        <AddData style={{ fontSize: '10rem' }} />
        <div>
          <h1 className="text-5xl font-bold">등록된 채용공고가 없습니다.</h1>
          <p className="py-6 underline">
            존재하는 채용공고가 없습니다. 채용공고를 등록하려면 아래 버튼을 눌러주세요.
          </p>
          <button className="btn btn-primary" onClick={() => push('/hiring/register')}>
            채용공고 등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmptyPost;
