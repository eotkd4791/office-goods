import { FC, useEffect, useState } from 'react';
import NotReady from 'renderer/components/Common/NotReady';
import usePost from 'renderer/hooks/usePost';

const Dashboard: FC = () => {
  const { posts } = usePost();
  const [totalCountOfApplicants, setTotalCountOfApplicants] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setTotalCountOfApplicants(
      posts?.reduce(
        (countOfApplicants, post) =>
          countOfApplicants + post.countOfApplicants ? post.countOfApplicants : 0,
        0
      ) || 0
    );
  }, [posts]);

  useEffect(() => {
    setTotalPrice(posts?.reduce((sumOfPrice, post) => sumOfPrice + post.price, 0) || 0);
  }, [posts]);

  return (
    <>
      <div className="shadow stats">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="stat-title">활성 채용공고 수</div>
          <div className="stat-value">{posts?.filter(({ isActive }) => isActive).length || 0}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <div className="stat-title">채용공고 등록비 총합</div>
          <div className="stat-value">{totalPrice.toLocaleString()} 원</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          </div>
          <div className="stat-title">전체 지원자 수</div>
          <div className="stat-value">{totalCountOfApplicants}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <NotReady />
    </>
  );
};

export default Dashboard;
