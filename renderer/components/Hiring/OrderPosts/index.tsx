import { FC, useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import usePost from 'renderer/hooks/usePost';
import {
  Contract,
  contractNames,
  Field,
  fieldNames,
  OrderValues,
  Platform,
  platformNames,
} from 'renderer/types/post';

interface Props {
  onSubmit: () => void;
  register: UseFormRegister<OrderValues>;
}

const OrderPosts: FC<Props> = ({ onSubmit, register }) => {
  const { posts } = usePost();
  const [departments, setDepartments] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    setDepartments(posts?.map(({ department }) => department).sort((a, b) => a.localeCompare(b)));
    setTypes(posts?.map(({ type }) => type).sort((a, b) => a.localeCompare(b)));
  }, [posts]);

  return (
    <form className="flex items-center justify-between w-full h-full mb-4" onSubmit={onSubmit}>
      <div className="w-[82%] h-full mr-4 flex justify-between items-center">
        <select
          className="w-[16%] h-full select select-bordered mr-4"
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
          className="w-[16%] h-full mr-4 select select-bordered"
          defaultValue="active"
          {...register('orderPriority')}
        >
          <option disabled value="active">
            정렬순서
          </option>
          <option value="all">전체</option>
          <option value="active">활성공고</option>
          <option value="inactive">비활성공고</option>
          <option value="from_asc">등록일시 빠른순</option>
          <option value="from_desc">등록일시 느린순</option>
          <option value="to_asc">종료일시 빠른순</option>
          <option value="to_desc">종료일시 느린순</option>
          <option value="price_desc">등록비 비싼순</option>
          <option value="price_asc">등록비 싼순</option>
        </select>
        <select
          className="w-[15%] h-full mr-2 select select-bordered flex flex-row items-center"
          defaultValue="all"
          {...register('field')}
        >
          <option value="all">직군</option>
          <option value={Field.DOCTOR}>{fieldNames[Field.DOCTOR]}</option>
          <option value={Field.NURSE}>{fieldNames[Field.NURSE]}</option>
          <option value={Field.SUPPORT}>{fieldNames[Field.SUPPORT]}</option>
          <option value={Field.OFFICE}>{fieldNames[Field.OFFICE]}</option>
        </select>
        <select
          className="w-[20%] h-full mr-4 select select-bordered flex flex-row items-center"
          defaultValue="all"
          {...register('department')}
        >
          <option value="all">부서</option>
          {departments?.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>
        <select
          className="w-[20%] h-full mr-4 select select-bordered flex flex-row items-center"
          defaultValue="all"
          {...register('type')}
        >
          <option value="all">직종</option>
          {types?.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select
          className="w-[15%] h-full mr-4 select select-bordered flex flex-row items-center"
          defaultValue="all"
          {...register('contract')}
        >
          <option value="all">고용형태</option>
          <option value={Contract.FULLTIME}>{contractNames[Contract.FULLTIME]}</option>
          <option value={Contract.SHORT_PARTTIME}>{contractNames[Contract.SHORT_PARTTIME]}</option>
          <option value={Contract.PARTTIME}>{contractNames[Contract.PARTTIME]}</option>
        </select>
      </div>

      <button type="submit" className="w-[100px] mr-2 btn btn-accent">
        검색
      </button>
    </form>
  );
};

export default OrderPosts;
