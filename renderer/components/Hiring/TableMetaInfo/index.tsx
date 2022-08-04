import { FC } from 'react';

const tableMetaInfo = [
  '플랫폼',
  '공고명',
  '등록 일시',
  '종료 일시',
  '등록비',
  '공고',
  '지원자 수',
  '활성 여부',
] as const;

const TableMetaInfo: FC = () => {
  return (
    <tr>
      {tableMetaInfo.map((meta) => (
        <th key={meta}>{meta}</th>
      ))}
    </tr>
  );
};

export default TableMetaInfo;
