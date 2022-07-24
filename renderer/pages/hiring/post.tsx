import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Breadcrumbs from 'renderer/components/Common/Breadcrumbs';
import HiringPostTable from 'renderer/components/Hiring/HiringTable';
import PageHead from 'renderer/components/Common/PageHead';
import { employeeTypeNames, HirePost, OrderValues } from 'renderer/types/post';
import usePostStore from 'renderer/store/post';
import usePersistStore from 'renderer/hooks/usePersistStore';
import OrderPosts from 'renderer/components/Hiring/OrderPosts';
import EmptyPost from 'renderer/components/Hiring/EmptyPost';

const HiringPost: NextPage = () => {
  const { register, handleSubmit } = useForm<OrderValues>();

  const { posts, setPosts } = usePostStore();
  const [orderedPosts, setOrderedPosts] = useState<HirePost[]>(posts);

  usePersistStore<HirePost[]>({ key: 'post.posts', setter: setPosts });

  const activeSort = () => [...posts].sort((a) => (a.isActive ? -1 : 1));

  const orderPosts = handleSubmit(({ orderPriority, platform, ...employeeTypes }) => {
    setOrderedPosts(
      [...posts].filter((post) =>
        Object.keys(employeeTypes).some(
          (type) =>
            employeeTypes[type] &&
            post.categories &&
            post.categories.includes(employeeTypeNames[type])
        )
      )
    );
  });

  useEffect(() => {
    setOrderedPosts(activeSort());
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
