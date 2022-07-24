import { NextPage } from 'next';
import NotReady from 'renderer/components/Common/NotReady';
import PageHead from 'renderer/components/Common/PageHead';
import { Route, pathNames } from 'renderer/types/route';

const HiringAnalysis: NextPage = () => {
  return (
    <>
      <PageHead title={pathNames[Route.ANALYSIS]} />
      <NotReady />
    </>
  );
};

export default HiringAnalysis;
