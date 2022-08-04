import * as dayjs from 'dayjs';

export const enum Platform {
  ALL = '*',
  SARAMIN = 'saramin',
  JOBKOREA = 'jobkorea',
  MEDIGATE = 'medigate',
  MEDIJOB = 'medijob',
  NURSCAPE = 'nurscape',
  NURSEJOB = 'nursejob',
  BRIC = 'bric',
}

export const platformNames = {
  '*': '전체',
  saramin: '사람인',
  jobkorea: '잡코리아',
  medigate: '메디게이트',
  medijob: '메디잡',
  nurscape: '너스케입',
  nursejob: '널스잡',
  bric: '브릭',
} as const;

export const enum Field {
  ALL = 'all',
  DOCTOR = 'doctor',
  NURSE = 'nurse',
  SUPPORT = 'support',
  OFFICE = 'office',
}

export const enum Contract {
  ALL = 'all',
  FULLTIME = 'fulltime',
  SHORT_PARTTIME = 'shortParttime',
  PARTTIME = 'longParttime',
}

export const fieldNames = {
  [Field.ALL]: 'all',
  [Field.DOCTOR]: '진료부',
  [Field.NURSE]: '간호부',
  [Field.SUPPORT]: '진료지원부',
  [Field.OFFICE]: '행정부',
} as const;

export const contractNames = {
  [Contract.ALL]: 'all',
  [Contract.FULLTIME]: '정규직',
  [Contract.SHORT_PARTTIME]: '단기계약직',
  [Contract.PARTTIME]: '계약직',
} as const;

export interface HirePost {
  id: string;
  platform: keyof typeof platformNames;
  title: string;
  from: dayjs.Dayjs;
  to: dayjs.Dayjs;
  url: string;
  isActive: boolean;
  categories?: string[];
  price: number;
  field: Field;
  department: string;
  type: string;
  contract: Contract;
  countOfApplicants: number;
}

export interface Category {
  name: string;
  picked: boolean;
}

export type OrderPriority =
  | 'all'
  | 'active'
  | 'inactive'
  | 'from_asc'
  | 'from_desc'
  | 'to_asc'
  | 'to_desc'
  | 'price_asc'
  | 'price_desc';

export interface OrderValues {
  platform: Platform;
  orderPriority: OrderPriority;
  field: typeof fieldNames[Field] | 'all';
  department: string & 'all';
  type: string & 'all';
  contract: typeof contractNames[Contract] | 'all';
}
