import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { OrderValues, Platform, platformNames } from 'renderer/types/post';

interface Props {
  onSubmit: () => void;
  register: UseFormRegister<OrderValues>;
}

const OrderPosts: FC<Props> = ({ onSubmit, register }) => {
  return (
    <form className="flex w-full h-full mb-4" onSubmit={onSubmit}>
      <div className="h-full mr-4 input-group">
        <select
          className="h-full select select-bordered"
          defaultValue={Platform.ALL}
          {...register('platform')}
        >
          <option disabled>플랫폼</option>
          <option value={Platform.ALL}>{platformNames[Platform.ALL]}</option>
          <option value={Platform.SARAMIN}>{platformNames[Platform.SARAMIN]}</option>
          <option value={Platform.JOBKOREA}>{platformNames[Platform.JOBKOREA]}</option>
          <option value={Platform.MEDIGATE}>{platformNames[Platform.MEDIGATE]}</option>
          <option value={Platform.MEDIJOB}>{platformNames[Platform.MEDIJOB]}</option>
          <option value={Platform.NURSCAPE}>{platformNames[Platform.NURSCAPE]}</option>
          <option value={Platform.NURSEJOB}>{platformNames[Platform.NURSEJOB]}</option>
          <option value={Platform.BRIC}>{platformNames[Platform.BRIC]}</option>
        </select>
        <select
          className="select select-bordered"
          defaultValue="active"
          {...register('orderPriority')}
        >
          <option disabled value="active">
            정렬순서
          </option>
          <option value="active">활성공고</option>
          <option value="from_asc">시작일시 빠른순</option>
          <option value="from_desc">시작일시 느린순</option>
          <option value="to_asc">종료일시 빠른순</option>
          <option value="to_desc">종료일시 느린순</option>
          <option value="price_desc">등록비 비싼순</option>
          <option value="price_asc">등록비 싼순</option>
        </select>
      </div>
      <div className="w-[50rem] flex mr-8">
        <ul className="flex w-full">
          <li className="flex items-center w-full">
            <input
              type="checkbox"
              defaultChecked={true}
              id="doctor"
              className="checkbox checkbox-accent"
              {...register('doctor')}
            />
            <label htmlFor="doctor" className="ml-4">
              의사
            </label>
          </li>
          <li className="flex items-center w-full">
            <input
              type="checkbox"
              defaultChecked={true}
              id="nurse"
              className="checkbox checkbox-accent"
              {...register('nurse')}
            />
            <label htmlFor="nurse" className="ml-4">
              간호사
            </label>
          </li>
          <li className="flex items-center w-full">
            <input
              type="checkbox"
              defaultChecked={true}
              id="office"
              className="checkbox checkbox-accent"
              {...register('office')}
            />
            <label htmlFor="office" className="ml-4">
              행정직
            </label>
          </li>
          <li className="flex items-center w-full">
            <input
              type="checkbox"
              defaultChecked={true}
              id="temporary"
              className="checkbox checkbox-accent"
              {...register('temporary')}
            />
            <label htmlFor="temporary" className="ml-4">
              계약직
            </label>
          </li>
        </ul>
      </div>
      <button type="submit" className="mr-2 btn btn-accent">
        검색
      </button>
    </form>
  );
};

export default OrderPosts;
