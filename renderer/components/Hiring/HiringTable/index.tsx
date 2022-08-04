import { FC } from 'react';

import { HirePost } from 'renderer/types/post';
import TableMetaInfo from '../TableMetaInfo';
import PostList from 'renderer/components/PostList';

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
          {posts.map((post) => (
            <PostList key={post.id} post={post} />
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
