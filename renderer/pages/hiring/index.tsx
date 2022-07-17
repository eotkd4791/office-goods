import { NextPage } from 'next';
import Breadcrumbs from 'renderer/components/Breadcrumbs';
import PageHead from 'renderer/components/PageHead';
import { Route, pathNames } from 'renderer/types/route';

const Hiring: NextPage = () => {
  return (
    <>
      <PageHead title={pathNames[Route.HOME]} />
      <div>
        <header className="w-full">
          <Breadcrumbs />
        </header>
      </div>
    </>
  );
};

export default Hiring;
