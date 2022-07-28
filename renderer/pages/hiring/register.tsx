import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MouseEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import Breadcrumbs from 'renderer/components/Common/Breadcrumbs';
import PageHead from 'renderer/components/Common/PageHead';
import { HirePost, Platform, platformNames, Category } from 'renderer/types/post';
import { postSchema } from 'renderer/schemas/post';
import usePostStore from 'renderer/store/post';

const categories: Category[] = [
  {
    name: '의사',
    picked: false,
  },
  {
    name: '간호사',
    picked: false,
  },
  {
    name: '행정직',
    picked: false,
  },
  {
    name: '계약직',
    picked: false,
  },
];

const HiringRegister: NextPage = () => {
  const { back } = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { createPost } = usePostStore();
  const { handleSubmit, register } = useForm<Omit<HirePost, 'id'>>({
    mode: 'onBlur',
    resolver: yupResolver(postSchema),
  });

  const onSubmit = handleSubmit((post) => {
    createPost({ ...post, isActive: checkIfActive(post.from, post.to) });
    back();
  });

  const checkIfActive = (from: string | dayjs.Dayjs, to: string | dayjs.Dayjs) => {
    const current = dayjs();
    const start = dayjs(from).format('YYYY-MM-DD');
    const end = dayjs(to).format('YYYY-MM-DD');
    return current.isSameOrAfter(start) && current.isSameOrBefore(end);
  };

  const toggleCategoryMenu: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <PageHead title="채용공고 등록" />
      <Breadcrumbs />
      <div className="divider" />
      <div className="overflow-visible shadow-xl card">
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-5 card-body">
          <div className="mb-8">
            <label htmlFor="platform" className="mb-2 card-title">
              채용 플랫폼
            </label>
            <select
              className="w-full select outline"
              id="platform"
              defaultValue="*"
              {...register('platform')}
            >
              <option value="*" disabled>
                채용 플랫폼 선택
              </option>
              <option value={Platform.SARAMIN}>{platformNames[Platform.SARAMIN]}</option>
              <option value={Platform.JOBKOREA}>{platformNames[Platform.JOBKOREA]}</option>
              <option value={Platform.MEDIGATE}>{platformNames[Platform.MEDIGATE]}</option>
              <option value={Platform.MEDIJOB}>{platformNames[Platform.MEDIJOB]}</option>
              <option value={Platform.NURSCAPE}>{platformNames[Platform.NURSCAPE]}</option>
              <option value={Platform.NURSEJOB}>{platformNames[Platform.NURSEJOB]}</option>
              <option value={Platform.BRIC}>{platformNames[Platform.BRIC]}</option>
            </select>
          </div>
          <div className="mb-8">
            <label className="mb-2 card-title" htmlFor="title">
              공고 제목
            </label>
            <input
              type="text"
              className="w-full rounded-md input outline"
              id="title"
              placeholder="제목"
              {...register('title')}
            />
          </div>
          <div className="mb-8">
            <label className="mb-2 card-title" htmlFor="url">
              공고 URL
            </label>
            <input
              className="w-full outline input"
              type="text"
              placeholder="URL"
              {...register('url')}
            />
          </div>
          <div className="mb-8">
            <label className="mb-2 card-title" htmlFor="title">
              가격
            </label>
            <input
              type="text"
              className="w-full rounded-md input outline"
              id="price"
              placeholder="등록비"
              {...register('price')}
            />
          </div>
          <div className="mb-8">
            <label className="mb-2 card-title" htmlFor="from">
              등록 일시
            </label>
            <input type="datetime-local" className="w-full input outline" {...register('from')} />
          </div>
          <div className="mb-8">
            <label className="mb-2 card-title" htmlFor="to">
              종료 일시
            </label>
            <input className="w-full outline input" type="datetime-local" {...register('to')} />
          </div>
          <div className="relative z-50 mb-8">
            <label className="mb-2 card-title" htmlFor="categories">
              카테고리
            </label>
            <button
              type="button"
              className="w-full outline btn btn-ghost"
              id="categories"
              onClick={toggleCategoryMenu}
            >
              카테고리 {isOpen ? '닫기' : '열기'}
            </button>
            {isOpen && (
              <ul className="absolute z-50 w-full py-2 rounded-lg outline menu bg-base-100 top-35">
                {categories.map(({ name, picked }, index) => {
                  return (
                    <li
                      key={index}
                      className={'flex flex-row items-center justify-between px-2'.concat(
                        picked ? 'bordered' : ''
                      )}
                    >
                      <label className="w-full cursor-pointer label">
                        <span className="label-text">{name}</span>
                        <input
                          type="checkbox"
                          className="toggle toggle-secondary"
                          value={name}
                          {...register('categories')}
                        />
                      </label>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="flex items-center justify-between w-full card-action">
            <button type="submit" className="w-[48%] btn btn-primary">
              등록
            </button>
            <button
              type="button"
              className="w-[48%] btn btn-ghost btn-outline"
              onClick={() => back()}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HiringRegister;
