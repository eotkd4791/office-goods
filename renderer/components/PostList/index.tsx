import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { fieldNames, HirePost, platformNames } from 'renderer/types/post';
import { FcPlus as Plus } from 'react-icons/fc';

interface Props {
  post: HirePost;
}

const PostList: FC<Props> = ({
  post: { id, platform, title, field, type, from, to, price, isActive, countOfApplicants },
}) => {
  return (
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
        {field && (
          <span className="mr-1 badge badge-secondary text-secondary-content badge-sm">
            {fieldNames[field]}
          </span>
        )}
        {type && <span className="mr-1 badge badge-info badge-sm text-info-content">{type}</span>}
      </td>
      <td>
        <time dateTime={dayjs(from).format('YYYY년 MM월 DD일')}>
          {dayjs(from).format('YYYY년 MM월 DD일')}
        </time>
      </td>
      <td>
        <time dateTime={dayjs(to).format('YYYY년 MM월 DD일')}>
          {dayjs(to).format('YYYY년 MM월 DD일')}
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
            보기
          </a>
        </Link>
      </td>
      <td>
        <button className="flex items-center px-1 btn btn-ghost" onClick={() => alert('11')}>
          <h3 className="mr-2 hover:underline">{countOfApplicants ? countOfApplicants : 1000}</h3>
          <Plus className="w-[1.8rem] h-full" />
        </button>
      </td>
      <td>
        {isActive ? (
          <div className="badge badge-success">활성</div>
        ) : (
          <div className="badge badge-error">비활성</div>
        )}
      </td>
    </tr>
  );
};

export default PostList;
