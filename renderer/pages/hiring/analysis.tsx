import { NextPage } from 'next';
import { useEffect, useMemo } from 'react';
import Breadcrumbs from 'renderer/components/Common/Breadcrumbs';
import PageHead from 'renderer/components/Common/PageHead';
import PieChart from 'renderer/components/PieChart';
import usePostStore from 'renderer/store/post';
import { pathNames } from 'renderer/types/route';
import { Route } from 'renderer/types/route';

const HiringAnalysis: NextPage = () => {
  const { posts } = usePostStore();

  const postDatasetForChart = useMemo(() => posts?.map(({ price }) => price) || [], [posts]);

  useEffect(() => {
    console.log(postDatasetForChart);
  }, []);

  return (
    <>
      <PageHead title={pathNames[Route.ANALYSIS]} />
      <header className="w-full">
        <Breadcrumbs />
      </header>
      <div className="w-full">
        <form className="form-control">
          <select name="chartType" id="chartType" className="select select-bordered">
            <option value="stick">막대그래프</option>
            <option value="pie">원형그래프</option>
          </select>
          <select name="" id="" className="select select-bordered">
            <option value="quater">분기별</option>
            <option value="half">반기별</option>
            <option value="yearly">연간</option>
          </select>
          <select name="" id="" className="select select-bordered">
            <option value="quater">분기별</option>
            <option value="half">반기별</option>
            <option value="yearly">연간</option>
          </select>
          <input type="text" className="input input-bordered" />
        </form>
      </div>

      {/* <PieChart /> */}
    </>
  );
};

export default HiringAnalysis;
