import { NextPage } from 'next';
import Breadcrumbs from 'renderer/components/Common/Breadcrumbs';
import PageHead from 'renderer/components/Common/PageHead';
import Dashboard from 'renderer/components/Hiring/Dashboard';
import { pathNames, Route } from 'renderer/types/route';

const Hiring: NextPage = () => {
  return (
    <>
      <PageHead title={pathNames[Route.HIRING] + ' 홈'} />
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
