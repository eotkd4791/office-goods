import Link from 'next/link';
import { FC } from 'react';

const Drawer: FC = () => {
  return (
    <div className="drawer">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay" />
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
          <li>
            <details open={false}>
              <summary>채용</summary>
              <ol>
                <li>
                  <Link href="/hiring" passHref>
                    <a className="w-full h-full">채용공고 관리</a>
                  </Link>
                </li>
              </ol>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
