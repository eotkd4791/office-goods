import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { HirePost, Platform, platformNames } from 'renderer/types/post';

const HiringRegister: NextPage = () => {
  const { back } = useRouter();
  const { handleSubmit, register } = useForm<Omit<HirePost, 'id'>>();

  const onSubmit = handleSubmit((post) => {
    console.log(post);
    back();
  });

  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <label htmlFor="platform">채용 플랫폼</label>
        <select id="platform" {...register('platform')}>
          <option value="*" selected disabled>
            채용 플랫폼 선택
          </option>
          <option value={Platform.SARAMIN}>{platformNames[Platform.SARAMIN]}</option>
          <option value={Platform.JOBKOREA}>{platformNames[Platform.JOBKOREA]}</option>
          <option value={Platform.MEDIGATE}>{platformNames[Platform.MEDIGATE]}</option>
          <option value={Platform.MEDIJOB}>{platformNames[Platform.MEDIJOB]}</option>
          <option value={Platform.NURSCAPE}>{platformNames[Platform.NURSCAPE]}</option>
          <option value={Platform.NURSEJOB}>{platformNames[Platform.NURSEJOB]}</option>
        </select>
        <label htmlFor="title">공고명</label>
        <input type="text" id="title" {...register('title')} />
        <label htmlFor="from">등록 일시</label>
        <input type="datetime-local" {...register('from')} />
        <label htmlFor="to">종료 일시</label>
        <input type="datetime-local" {...register('to')} />
        <label htmlFor="url">공고 URL</label>
        <input type="text" {...register('url')} />
        <button type="submit" className="btn btn-primary">
          등록
        </button>
        <button type="button" className="btn btn-ghost btn-outline" onClick={() => back()}>
          취소
        </button>
      </form>
    </div>
  );
};

export default HiringRegister;
