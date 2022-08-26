import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import useUIStore from 'renderer/store/ui';
import { pathNames, paths, Route } from 'renderer/types/route';

interface Menu {
  title: string;
  key: number;
  url: string;
}

const menuList: Menu[] = [
  {
    key: 1,
    title: pathNames[Route.HIRING],
    url: paths[Route.HIRING],
  },
  {
    key: 2,
    title: pathNames[Route.POST],
    url: paths[Route.POST],
  },
  {
    key: 3,
    title: pathNames[Route.STATUS],
    url: paths[Route.STATUS],
  },
  {
    key: 4,
    title: pathNames[Route.ANALYSIS],
    url: paths[Route.ANALYSIS],
  },
];

interface Props {
  children: ReactNode;
}

const Drawer: FC<Props> = ({ children }) => {
  const { pathname } = useRouter();
  const { visibleDrawer, closeAll } = useUIStore((state) => ({
    visibleDrawer: state.visible.drawer,
    closeAll: state.toggleDrawer,
  }));

  const onClick = () => {
    closeAll();
  };

  return (
    <div className="drawer">
      <input
        id="drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={visibleDrawer}
        onChange={() => {}}
      />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay" onClick={onClick} />
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
          <li>
            <details open>
              <summary className="text-lg font-bold">{pathNames[Route.HIRING]}</summary>
              <ol onClick={onClick}>
                {menuList.map(({ key, title, url }) => (
                  <li key={key} className={`mb-2 ${url === pathname ? 'link-active' : ''}`}>
                    <Link href={url} passHref>
                      <a className="flex items-center justify-between w-full h-full group">
                        <h3>{title}</h3>
                        <div className="invisible group-hover:visible">
                          <kbd className="kbd kbd-sm">ctrl</kbd> +{' '}
                          <kbd className="kbd kbd-sm">{key}</kbd>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ol>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
