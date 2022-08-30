import Link from 'next/link';
import { useRouter } from 'next/router';

import { FC, useEffect, useState } from 'react';

import { pathNames, paths } from 'renderer/types/route';

export interface BreadCrumb {
  key: number;
  url: string;
  title: string;
}

const Breadcrumbs: FC = () => {
  const { asPath } = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadCrumb[]>([]);

  useEffect(() => {
    const tempBreadcrumbs = (asPath.split('/') as (keyof typeof paths)[])
      .filter((path) => path.length > 0)
      .map((path, index) => ({
        key: index + 1,
        url: paths[path],
        title: pathNames[path],
      }));

    const nextBreadcrumbs =
      tempBreadcrumbs.length > 0
        ? tempBreadcrumbs
        : ([
            {
              key: 1,
              url: paths.home,
              title: pathNames.home,
            },
          ] as BreadCrumb[]);

    setBreadcrumbs(nextBreadcrumbs);
  }, [asPath]);

  return (
    <div className="w-full font-medium text-md breadcrumbs mb-[2rem]">
      <ul>
        {breadcrumbs.map(({ key, url, title }) => (
          <li key={key}>
            <Link href={url} passHref>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
