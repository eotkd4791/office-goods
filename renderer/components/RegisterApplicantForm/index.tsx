import dayjs from 'dayjs';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useApplicantStore from 'renderer/store/applicant';
import usePostStore from 'renderer/store/post';
import useUIStore from 'renderer/store/ui';
import { Applicant as ApplicantForm, applicantStatusList } from 'renderer/types/applicant';

type ApplicantWithoutId = Omit<ApplicantForm, 'id'>;

interface Props {
  postId: string;
}

const RegisterApplicantForm: FC<Props> = ({ postId }) => {
  const { posts } = usePostStore();
  const { closeAll } = useUIStore();
  const { applicants, addApplicant } = useApplicantStore();

  const post = posts.find(({ id }) => id === postId)!;

  const { register, handleSubmit, setFocus } = useForm<ApplicantWithoutId>();

  const onSubmit = (applicant: ApplicantWithoutId) => {
    addApplicant(postId, applicant);
    closeAll();
  };

  useEffect(() => {
    setFocus('name');
  }, []);

  return (
    <aside className="fixed z-50 top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.7)]">
      <div className="bg-white absolute top-[15vh] left-[10vw] rounded-xl w-[80vw] h-[70vh] p-6">
        <header className="flex items-center justify-between w-full">
          <h1 className="text-2xl font-bold">{post.title} - 지원자 등록 양식</h1>
          <button className="btn btn-ghost" onClick={() => closeAll()}>
            __
          </button>
        </header>
        <div className="divider" />
        <article>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between w-full mb-4">
              <div className="flex flex-col w-[49%]">
                <label htmlFor="name" className="mb-2 ml-2 text-sm font-bold text-secondary">
                  이름
                </label>
                <input
                  {...register('name')}
                  id="name"
                  type="text"
                  className="input input-bordered"
                  placeholder="이름"
                />
              </div>
              <div className="flex flex-col w-[49%]">
                <label htmlFor="email" className="mb-2 ml-2 text-sm font-bold text-secondary">
                  이메일
                </label>
                <input
                  {...register('email')}
                  id="email"
                  type="email"
                  className="input input-bordered"
                  placeholder="이메일"
                />
              </div>
            </div>
            <div className="flex justify-between w-full mb-4">
              <div className="flex flex-col w-[49%]">
                <label htmlFor="phoneNum" className="mb-2 ml-2 text-sm font-bold text-secondary">
                  연락처
                </label>
                <input
                  {...register('phoneNum')}
                  id="phoneNum"
                  type="text"
                  className="input input-bordered"
                  placeholder="예) 010-1234-5678"
                />
              </div>
              <div className="flex flex-col w-[49%]">
                <label htmlFor="birthday" className="mb-2 ml-2 text-sm font-bold text-secondary">
                  생년월일
                </label>
                <input
                  {...register('birthday')}
                  id="birthday"
                  type="date"
                  className="input input-bordered"
                  defaultValue={dayjs().format('YYYY-MM-DD')}
                />
              </div>
            </div>
            <div className="flex justify-between w-full mb-4">
              <div className="flex flex-col w-[49%]">
                <label htmlFor="applyDate" className="mb-2 ml-2 text-sm font-bold text-secondary">
                  지원날짜
                </label>
                <input
                  {...register('applyDate')}
                  id="applyDate"
                  type="date"
                  className="input input-bordered"
                  placeholder="예) 2022.10.03"
                  defaultValue={dayjs().format('YYYY-MM-DD')}
                />
              </div>
              <div className="flex flex-col w-[49%]">
                <label htmlFor="status" className="mb-2 ml-2 text-sm font-bold text-secondary">
                  상태
                </label>
                <select
                  {...register('status')}
                  id="status"
                  className="select select-bordered"
                  placeholder="상태"
                >
                  {applicantStatusList.map((status, index) => (
                    <option key={status} value={status}>
                      {index + 1}. {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button type="submit" className="btn w-[49%] bg-success border-none">
                등록
              </button>
              <button type="button" className="btn w-[49%]" onClick={() => closeAll()}>
                취소
              </button>
            </div>
          </form>
        </article>
      </div>
    </aside>
  );
};

export default RegisterApplicantForm;
