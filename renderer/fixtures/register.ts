import { Contract, contractNames, Field, fieldNames } from 'renderer/types/post';

export const fields: { key: number; name: typeof fieldNames[Field]; value: Field }[] = [
  {
    key: 1,
    name: fieldNames[Field.DOCTOR],
    value: Field.DOCTOR,
  },
  {
    key: 2,
    name: fieldNames[Field.NURSE],
    value: Field.NURSE,
  },
  {
    key: 3,
    name: fieldNames[Field.SUPPORT],
    value: Field.SUPPORT,
  },
  {
    key: 4,
    name: fieldNames[Field.OFFICE],
    value: Field.OFFICE,
  },
];

export const contracts: { key: number; name: typeof contractNames[Contract]; value: Contract }[] = [
  {
    key: 1,
    name: contractNames[Contract.FULLTIME],
    value: Contract.FULLTIME,
  },
  {
    key: 2,
    name: contractNames[Contract.SHORT_PARTTIME],
    value: Contract.SHORT_PARTTIME,
  },
  {
    key: 3,
    name: contractNames[Contract.PARTTIME],
    value: Contract.PARTTIME,
  },
];
