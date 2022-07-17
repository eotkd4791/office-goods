import { NextPage } from 'next';
import NotReady from 'renderer/components/NotReady';
import PageHead from 'renderer/components/PageHead';
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
