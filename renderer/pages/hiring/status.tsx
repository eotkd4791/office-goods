import { NextPage } from 'next';
import NotReady from 'renderer/components/NotReady';

import PageHead from 'renderer/components/PageHead';
import { pathNames, Route } from 'renderer/types/route';

const HiringStatus: NextPage = () => {
  return (
    <>
      <PageHead title={pathNames[Route.STATUS]} />
      <NotReady />
    </>
  );
};

export default HiringStatus;
