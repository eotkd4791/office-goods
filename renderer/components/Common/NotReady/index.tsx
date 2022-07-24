import { useRouter } from 'next/router';
import { FC } from 'react';
import { GiStopSign as StopSign } from 'react-icons/gi';

const NotReady: FC = () => {
  const { back } = useRouter();

  return (
    <div className="h-[50rem] hero">
      <div className="flex-col hero-content lg:flex-row">
        <StopSign className="w-[10rem] h-[10rem] text-[red]" />
        <div className="mr-[2rem] text-[3rem]">
          <h1 className="text-5xl font-bold">아직 준비중인 페이지 입니다.</h1>
          <button className="w-[10rem] btn btn-warning" onClick={() => back()} id="go-back">
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotReady;
