import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Breadcrumbs from 'renderer/components/Common/Breadcrumbs';
import HiringPostTable from 'renderer/components/Hiring/HiringTable';
import PageHead from 'renderer/components/Common/PageHead';
import {
  employeeTypeNames,
  HirePost,
  OrderPriority,
  OrderValues,
  Platform,
} from 'renderer/types/post';
import usePostStore from 'renderer/store/post';
import usePersistStore from 'renderer/hooks/usePersistStore';
import OrderPosts from 'renderer/components/Hiring/OrderPosts';
import EmptyPost from 'renderer/components/Hiring/EmptyPost';
import dayjs from 'dayjs';

type EmployeeTypes = 'doctor' | 'nurse' | 'office' | 'temporary';

const HiringPost: NextPage = () => {
  const { register, handleSubmit } = useForm<OrderValues>();

  const { posts, setPosts } = usePostStore();
  const [orderedPosts, setOrderedPosts] = useState<HirePost[]>(posts || ([] as HirePost[]));

  usePersistStore<HirePost[]>({ key: 'post.posts', setter: setPosts });

  const sortActiveFirst = (posts: HirePost[] = []) =>
    [...posts].sort(({ isActive }) => (isActive ? -1 : 1));
  const sortInctiveFirst = (posts: HirePost[] = []) =>
    [...posts].sort(({ isActive }) => (!isActive ? -1 : 1));
  const sortFromASC = (posts: HirePost[] = []) =>
    [...posts].sort((a, b) => (dayjs(a.from).isBefore(dayjs(b.from)) ? -1 : 1));
  const sortFromDESC = (posts: HirePost[] = []) =>
    [...posts].sort((a, b) => (dayjs(a.from).isAfter(dayjs(b.from)) ? -1 : 1));
  const sortToASC = (posts: HirePost[] = []) =>
    [...posts].sort((a, b) => (dayjs(a.to).isBefore(dayjs(b.to)) ? 1 : -1));
  const sortToDESC = (posts: HirePost[] = []) =>
    [...posts].sort((a, b) => (dayjs(a.to).isAfter(dayjs(b.to)) ? -1 : 1));
  const sortPriceASC = (posts: HirePost[] = []) => [...posts].sort((a, b) => a.price - b.price);
  const sortPriceDESC = (posts: HirePost[] = []) => [...posts].sort((a, b) => b.price - a.price);

  const orderPosts = handleSubmit(({ orderPriority, platform, ...employeeTypes }) => {
    const postsFilteredByEmployeeType = [...posts].filter((post) =>
      (Object.keys(employeeTypes) as EmployeeTypes[]).some(
        (type) =>
          employeeTypes[type] &&
          post.categories &&
          post.categories.includes(employeeTypeNames[type]) &&
          (platform === post.platform || platform === Platform.ALL)
      )
    ) as HirePost[];

    setOrderedPosts(sortByOrderPriority(orderPriority, postsFilteredByEmployeeType));
  });

  const sortByOrderPriority = (orderPriority: OrderPriority, posts: HirePost[]) => {
    switch (orderPriority) {
      case 'active':
        return sortActiveFirst(posts);
      case 'inactive':
        return sortInctiveFirst(posts);
      case 'from_asc':
        return sortFromASC(posts);
      case 'from_desc':
        return sortFromDESC(posts);
      case 'to_asc':
        return sortToASC(posts);
      case 'to_desc':
        return sortToDESC(posts);
      case 'price_asc':
        return sortPriceASC(posts);
      case 'price_desc':
        return sortPriceDESC(posts);
    }
  };

  useEffect(() => {
    setOrderedPosts(sortActiveFirst(sortToASC(posts)));
  }, [posts]);

  return (
    <>
      <PageHead title="채용공고 관리" />
      <div>
        <header className="flex flex-col mb-8">
          <Breadcrumbs />
          <div className="divider" />
          <div className="flex-row justify-center form-control">
            <OrderPosts onSubmit={orderPosts} register={register} />
            <Link href="/hiring/register" passHref>
              <button className="btn btn-priamry">채용공고 등록</button>
            </Link>
          </div>
        </header>
        <article>
          {orderedPosts.length > 0 ? <HiringPostTable posts={orderedPosts} /> : <EmptyPost />}
        </article>
      </div>
    </>
  );
};

export default HiringPost;
