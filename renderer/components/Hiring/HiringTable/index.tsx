import { FC } from 'react';

import PostList from 'renderer/components/PostList';
import RegisterApplicantForm from 'renderer/components/RegisterApplicantForm';
import useApplicantStore from 'renderer/store/applicant';
import useUIStore from 'renderer/store/ui';
import { HirePost } from 'renderer/types/post';
import TableMetaInfo from '../TableMetaInfo';

interface Props {
  posts: HirePost[];
}

const HiringPostTable: FC<Props> = ({ posts }) => {
  const { visible } = useUIStore();
  const { applicants } = useApplicantStore();

  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full">
        <thead>
          <TableMetaInfo />
        </thead>
        <tbody>
          {posts.map((post) => (
            <PostList key={post.id} post={post} countOfApplicants={applicants[post.id]?.length} />
          ))}
        </tbody>
        <tfoot>
          <TableMetaInfo />
        </tfoot>
      </table>
      {visible.applicantForm && <RegisterApplicantForm postId={visible.applicantForm} />}
    </div>
  );
};

export default HiringPostTable;
