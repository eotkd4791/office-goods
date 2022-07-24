import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import Breadcrumbs from 'renderer/components/Common/Breadcrumbs';
import HiringPostTable from 'renderer/components/Post/HiringTable';
import PageHead from 'renderer/components/Common/PageHead';
import { Platform, platformNames } from 'renderer/types/post';

const HiringPost: NextPage = () => {
  const { push } = useRouter();
  const { handleSubmit } = useForm();

  const onSubmit = handleSubmit(() => {});

  const goRegisterPost = () => push('/hiring/register');

  return (
    <>
      <PageHead title="채용공고 관리" />
      <div>
        <header className="flex flex-col mb-8">
          <Breadcrumbs />
          <div className="divider" />
          <div className="justify-center form-control">
            <form className="flex w-full h-full mb-4" onSubmit={onSubmit}>
              <div className="h-full mr-4 input-group">
                <select className="h-full select select-bordered" defaultValue="*">
                  <option disabled value="*">
                    플랫폼
                  </option>
                  <option value={Platform.SARAMIN}>{platformNames[Platform.SARAMIN]}</option>
                  <option value={Platform.JOBKOREA}>{platformNames[Platform.JOBKOREA]}</option>
                  <option value={Platform.MEDIGATE}>{platformNames[Platform.MEDIGATE]}</option>
                  <option value={Platform.MEDIJOB}>{platformNames[Platform.MEDIJOB]}</option>
                  <option value={Platform.NURSCAPE}>{platformNames[Platform.NURSCAPE]}</option>
                  <option value={Platform.NURSEJOB}>{platformNames[Platform.NURSEJOB]}</option>
                </select>
                <select className="select select-bordered" defaultValue="title_asc">
                  <option disabled value="title_asc">
                    정렬순서
                  </option>
                  <option value="title">가나다순</option>
                  <option value="active">활성공고</option>
                  <option value="from">시작일시</option>
                  <option value="to">종료일시</option>
                </select>
              </div>
              <div className="w-[50rem] flex mr-8">
                <ul className="flex w-full">
                  <li className="flex items-center w-full">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      id="1"
                      name="doctor"
                      className="checkbox checkbox-accent"
                    />
                    <label htmlFor="1" className="ml-4">
                      의사
                    </label>
                  </li>
                  <li className="flex items-center w-full">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      id="2"
                      name="nurse"
                      className="checkbox checkbox-accent"
                    />
                    <label htmlFor="2" className="ml-4">
                      간호사
                    </label>
                  </li>
                  <li className="flex items-center w-full">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      id="3"
                      name="office"
                      className="checkbox checkbox-accent"
                    />
                    <label htmlFor="3" className="ml-4">
                      행정직
                    </label>
                  </li>
                  <li className="flex items-center w-full">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      id="4"
                      name="temporary"
                      className="checkbox checkbox-accent"
                    />
                    <label htmlFor="4" className="ml-4">
                      계약직
                    </label>
                  </li>
                </ul>
              </div>
              <button type="submit" className="mr-2 btn btn-accent">
                검색
              </button>
              <button type="button" className="btn btn-priamry" onClick={goRegisterPost}>
                채용공고 등록
              </button>
            </form>
          </div>
        </header>
        <article>
          <HiringPostTable />
        </article>
      </div>
    </>
  );
};

export default HiringPost;
