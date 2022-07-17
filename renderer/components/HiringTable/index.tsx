import Link from 'next/link';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { HirePost, Platform, platformNames } from 'renderer/types/post';

const HiringPostTable: FC = () => {
  const [posts, setPosts] = useState<HirePost[]>([]);

  useEffect(() => {
    setPosts([
      {
        id: 1,
        platform: Platform.JOBKOREA,
        title: '소아과 전문의 채용 공고',
        categories: ['의사', '소아과'],
        from: dayjs(),
        to: dayjs(),
        isActive: true,
      },
      {
        id: 2,
        platform: Platform.SARAMIN,
        title: '산부인과 전문의 채용 공고',
        categories: ['의사', '산부인과'],
        from: dayjs(),
        to: dayjs(),
        isActive: false,
      },
      {
        id: 3,
        platform: Platform.MEDIGATE,
        title: '소아과 간호사 채용 공고',
        categories: ['간호사', '소아과'],
        from: dayjs(),
        to: dayjs(),
        isActive: true,
      },
      {
        id: 4,
        platform: Platform.MEDIJOB,
        title: '치과 전문의 채용 공고',
        categories: ['의사', '치과'],
        from: dayjs(),
        to: dayjs(),
        isActive: false,
      },
      {
        id: 5,
        platform: Platform.NURSCAPE,
        title: '중환자실 간호사 채용 공고',
        categories: ['간호사', '중환자실'],
        from: dayjs(),
        to: dayjs(),
        isActive: true,
      },
      {
        id: 6,
        platform: Platform.NURSEJOB,
        title: '간호조무사 채용 공고',
        categories: ['간호조무사', '계약직'],
        from: dayjs(),
        to: dayjs(),
        isActive: true,
      },
    ] as HirePost[]);
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>플랫폼</th>
            <th>공고명</th>
            <th>등록 일시</th>
            <th>종료 일시</th>
            <th>공고</th>
            <th>활성 여부</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(({ id, platform, title, categories, from, to, isActive }) => (
            <tr className="hover:active" key={id}>
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
                <time dateTime={from.format('YYYY년 MM월 DD일 HH시 mm분')}>
                  {from.format('YYYY년 MM월 DD일 HH시 mm분')}
                </time>
              </td>
              <td>
                <time dateTime={to.format('YYYY년 MM월 DD일 HH시 mm분')}>
                  {to.format('YYYY년 MM월 DD일 HH시 mm분')}
                </time>
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
          <tr>
            <th>플랫폼</th>
            <th>공고명</th>
            <th>등록 일시</th>
            <th>종료 일시</th>
            <th>공고</th>
            <th>활성 여부</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default HiringPostTable;
