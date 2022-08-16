import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Breadcrumbs from 'renderer/components/Common/Breadcrumbs';
import PageHead from 'renderer/components/Common/PageHead';

import MemoList from 'renderer/components/MemoList';
import useMemos from 'renderer/hooks/useMemos';

function Home() {
  const { memos } = useMemos();

  return (
    <>
      <PageHead title="Home" />
      <div className="w-full">
        <header className="w-full">
          <Breadcrumbs />
        </header>
        <article className="flex items-start justify-between w-full">
          <div>
            <Calendar locale="ko-KR" />
          </div>
          <div className="w-[70%] overflow-x-auto">
            <MemoList memos={memos} />
          </div>
        </article>
      </div>
    </>
  );
}

export default Home;
