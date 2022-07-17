import { useRouter } from 'next/router';
import { FC } from 'react';
import { GiStopSign as StopSign } from 'react-icons/gi';
import { ImPointRight as PointRight } from 'react-icons/im';

const NotReady: FC = () => {
  const { back } = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <StopSign className="w-[10rem] h-[10rem] text-[red] mb-[5rem] animate-ping" />
      <h1 className="text-[3rem] mb-[5rem] text-warning">아직 준비중인 페이지 입니다.</h1>
      <div className="flex">
        <label htmlFor="go-back" className="mr-[2rem] text-[3rem] animate-bounce text-info">
          <PointRight />
        </label>
        <button className="px-8 btn btn-primary" onClick={() => back()} id="go-back">
          뒤로가기
        </button>
      </div>
    </div>
  );
};

export default NotReady;
