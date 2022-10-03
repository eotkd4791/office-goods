import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Breadcrumbs from 'renderer/components/Common/Breadcrumbs';
import PageHead from 'renderer/components/Common/PageHead';
import { contracts, fields } from 'renderer/fixtures/register';
import { postSchema } from 'renderer/schemas/post';
import usePostStore from 'renderer/store/post';
import useUIStore from 'renderer/store/ui';
import { HirePost, Platform, platformNames } from 'renderer/types/post';
import { pathNames, Route } from 'renderer/types/route';

type FormValues = Omit<HirePost, 'id'>;

const HiringRegister: NextPage = () => {
  const { back } = useRouter();
  const { createPost } = usePostStore();
  const { toggleAlert, setAlert } = useUIStore();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
    resolver: yupResolver(postSchema),
  });

  const onSubmit = (post: FormValues) => {
    createPost({ ...post, isActive: checkIfActive(post.from, post.to) });
    back();
    setAlert('success', '채용공고 등록 성공');
    toggleAlert();
  };

  const onError = () => {
    setAlert('error', '채용공고 등록 실패');
    toggleAlert();
  };

  const checkIfActive = (from: string | dayjs.Dayjs, to: string | dayjs.Dayjs) => {
    const current = dayjs();
    const start = dayjs(from).format('YYYY-MM-DD');
    const end = dayjs(to).format('YYYY-MM-DD');
    return current.isSameOrAfter(start) && current.isSameOrBefore(end);
  };

  return (
    <>
      <PageHead title={pathNames[Route.REGISTER]} />
      <header className="w-full">
        <Breadcrumbs />
      </header>
      <div className="divider" />
      <div className="overflow-visible shadow-xl card">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="grid grid-cols-2 gap-5 card-body"
        >
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
            {errors.platform && <span className="text-error">{errors.platform.message}</span>}
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
            {errors.title && <span className="text-error">{errors.title.message}</span>}
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
            {errors.url && <span className="text-error">{errors.url.message}</span>}
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
            {errors.price && <span className="text-error">{errors.price.message}</span>}
          </div>
          <div className="mb-8">
            <label className="mb-2 card-title" htmlFor="from">
              등록 일시
            </label>
            <input type="date" className="w-full input outline" {...register('from')} />
            {errors.from && <span className="text-error">{errors.from.message}</span>}
          </div>
          <div className="mb-8">
            <label className="mb-2 card-title" htmlFor="to">
              종료 일시
            </label>
            <input className="w-full outline input" type="date" {...register('to')} />
            {errors.to && <span className="text-error">{errors.to.message}</span>}
          </div>
          <fieldset>
            <legend className="mb-2 card-title">직군</legend>
            <ul className="flex flex-row justify-between w-full p-2 rounded-lg outline bg-base-100 top-35">
              {fields.map(({ key, name, value }) => (
                <li key={key} className="flex flex-row items-center w-[20%]">
                  <input
                    type="radio"
                    id={name}
                    className="mr-2 radio radio-secondary"
                    value={value}
                    {...register('field')}
                  />
                  <label htmlFor={name}>{name}</label>
                </li>
              ))}
            </ul>
            {errors.field && <span className="text-error">{errors.field.message}</span>}
          </fieldset>
          <fieldset>
            <legend className="mb-2 card-title">고용형태</legend>
            <ul className="flex flex-row justify-between w-full p-2 rounded-lg outline bg-base-100 top-35">
              {contracts.map(({ key, name, value }) => (
                <li key={key} className="flex flex-row items-center w-[20%]">
                  <input
                    type="radio"
                    id={name}
                    className="mr-2 radio radio-secondary"
                    value={value}
                    {...register('contract')}
                  />
                  <label htmlFor={name}>{name}</label>
                </li>
              ))}
            </ul>
            {errors.contract && <span className="text-error">{errors.contract.message}</span>}
          </fieldset>
          <div>
            <label htmlFor="department" className="mb-2 card-title">
              부서
            </label>
            <input
              type="text"
              id="department"
              className="w-full input outline h-[40px]"
              placeholder="부서"
              {...register('department')}
            />
            {errors.department && <span className="text-error">{errors.department.message}</span>}
          </div>
          <div>
            <label htmlFor="type" className="mb-2 card-title">
              직종
            </label>
            <input
              type="text"
              id="type"
              className="w-full input outline h-[40px]"
              placeholder="직종"
              {...register('type')}
            />
            {errors.type && <span className="text-error">{errors.type.message}</span>}
          </div>
          <div className="flex items-center justify-between card-action mt-[20px]">
            <button type="submit" className="w-full mr-5 btn btn-primary">
              등록
            </button>
            <button
              type="button"
              className="w-full btn btn-ghost btn-outline"
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
