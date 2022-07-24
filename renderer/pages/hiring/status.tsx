import { NextPage } from 'next';
import NotReady from 'renderer/components/Common/NotReady';

import PageHead from 'renderer/components/Common/PageHead';
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
