import { ipcRenderer } from 'electron';
import { MouseEventHandler } from 'react';
import Calendar from 'renderer/components/Calendar';

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
        <article className="flex flex-col items-start justify-between w-full">
          <div className="w-full mb-[1rem]">
            <Calendar
              events={
                memos?.map(({ id, memo, startDate, endDate }) => ({
                  id,
                  title: memo,
                  start: startDate,
                  end: endDate,
                })) || []
              }
            />
          </div>
          <div className="text-xl font-bold divider">메모 목록</div>
          <div className="w-full overflow-x-auto">
            <MemoList memos={memos} />
          </div>
        </article>
      </div>
    </>
  );
}

export default Home;
