import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import dayjs from 'dayjs';

import { HirePost, platformNames } from 'renderer/types/post';
import TableMetaInfo from '../TableMetaInfo';

interface Props {
  posts: HirePost[];
}

const HiringPostTable: FC<Props> = ({ posts }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full">
        <thead>
          <TableMetaInfo />
        </thead>
        <tbody>
          {posts.map(({ id, platform, title, categories, price, from, to, isActive }) => (
            <tr className="cursor-pointer hover:active" key={id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <Image src={`/images/${platform}.webp`} alt={platform} layout="fill" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{platformNames[platform]}</div>
                  </div>
                </div>
              </td>
              <td>
                {title}
                <br />
                {categories &&
                  categories.slice(0, 3).map((categories, index) => (
                    <span className="mr-1 badge badge-ghost badge-outline badge-sm" key={index}>
                      {categories}
                    </span>
                  ))}
              </td>
              <td>
                <time dateTime={dayjs(from).format('YYYY년 MM월 DD일 HH시 mm분')}>
                  {dayjs(from).format('YYYY년 MM월 DD일 HH시 mm분')}
                </time>
              </td>
              <td>
                <time dateTime={dayjs(to).format('YYYY년 MM월 DD일 HH시 mm분')}>
                  {dayjs(to).format('YYYY년 MM월 DD일 HH시 mm분')}
                </time>
              </td>
              <td>
                <span className="hover:underline hover:underline-offset-4 hover:decoration-double">
                  ₩ {price.toLocaleString()}
                </span>
              </td>
              <td>
                <Link href="https://www.naver.com">
                  <a target="_blank" className="link link-secondary">
                    공고 보기
                  </a>
                </Link>
              </td>
              <td>
                {isActive ? (
                  <div className="badge badge-success">활성</div>
                ) : (
                  <div className="badge badge-error">비활성</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <TableMetaInfo />
        </tfoot>
      </table>
    </div>
  );
};

export default HiringPostTable;
