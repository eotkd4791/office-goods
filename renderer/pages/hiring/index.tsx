import { NextPage } from 'next';
import Breadcrumbs from 'renderer/components/Common/Breadcrumbs';
import PageHead from 'renderer/components/Common/PageHead';
import Dashboard from 'renderer/components/Hiring/Dashboard';
import { Route, pathNames } from 'renderer/types/route';

const Hiring: NextPage = () => {
  return (
    <>
      <PageHead title={pathNames[Route.HOME]} />
      <div>
        <header className="w-full">
          <Breadcrumbs />
        </header>
        <article>
          <Dashboard />
        </article>
      </div>
    </>
  );
};

export default Hiring;
