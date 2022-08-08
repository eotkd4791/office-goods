import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';

import Breadcrumbs from 'renderer/components/Common/Breadcrumbs';
import HiringPostTable from 'renderer/components/Hiring/HiringTable';
import PageHead from 'renderer/components/Common/PageHead';
import {
  Contract,
  Field,
  HirePost,
  OrderPriority,
  OrderValues,
  Platform,
} from 'renderer/types/post';
import OrderPosts from 'renderer/components/Hiring/OrderPosts';
import EmptyPost from 'renderer/components/Hiring/EmptyPost';
import usePost from 'renderer/hooks/usePost';

const HiringPost: NextPage = () => {
  const { register, handleSubmit } = useForm<OrderValues>();

  const { posts } = usePost();
  const [orderedPosts, setOrderedPosts] = useState<HirePost[]>(posts || ([] as HirePost[]));

  const sortAll = () => [...posts].sort(({ isActive }) => (isActive ? -1 : 1));

  const sortActiveFirst = (posts: HirePost[] = []) =>
    [...posts].sort(({ isActive }) => (isActive ? -1 : 1));

  const sortInctiveFirst = (posts: HirePost[] = []) =>
    [...posts].sort(({ isActive }) => (!isActive ? -1 : 1));

  const sortFromASC = (posts: HirePost[] = []) =>
    [...posts].sort((a, b) => (dayjs(a.from).isBefore(dayjs(b.from)) ? -1 : 1));

  const sortFromDESC = (posts: HirePost[] = []) =>
    [...posts].sort((a, b) => (dayjs(a.from).isAfter(dayjs(b.from)) ? -1 : 1));

  const sortToASC = (posts: HirePost[] = []) =>
    [...posts].sort((a, b) => (dayjs(a.to).isBefore(dayjs(b.to)) ? -1 : 1));

  const sortToDESC = (posts: HirePost[] = []) =>
    [...posts].sort((a, b) => (dayjs(a.to).isAfter(dayjs(b.to)) ? -1 : 1));

  const sortPriceASC = (posts: HirePost[] = []) => [...posts].sort((a, b) => a.price - b.price);

  const sortPriceDESC = (posts: HirePost[] = []) => [...posts].sort((a, b) => b.price - a.price);

  const orderPosts = handleSubmit(
    ({ orderPriority, platform, field, department, type, contract }) => {
      const postsFilteredByEmployeeType = [...posts].filter(
        (post) =>
          (platform === post.platform || platform === Platform.ALL) &&
          (field === post.field || field === Field.ALL) &&
          (department === post.department || department === 'all') &&
          (type === post.type || type === 'all') &&
          (contract === post.contract || contract === Contract.ALL)
      ) as HirePost[];

      setOrderedPosts(sortByOrderPriority(orderPriority, postsFilteredByEmployeeType));
    }
  );

  const sortByOrderPriority = (orderPriority: OrderPriority, posts: HirePost[]) => {
    switch (orderPriority) {
      case 'all':
        return sortAll();
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
