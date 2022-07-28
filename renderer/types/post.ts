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

export const employeeTypeNames = {
  doctor: '의사',
  nurse: '간호사',
  office: '행정직',
  temporary: '계약직',
} as const;

export interface HirePost {
  id: number;
  platform: keyof typeof platformNames;
  title: string;
  from: dayjs.Dayjs;
  to: dayjs.Dayjs;
  url: string;
  isActive: boolean;
  categories?: string[];
  price: number;
}

export interface Category {
  name: string;
  picked: boolean;
}

export type OrderPriority =
  | 'active'
  | 'inactive'
  | 'from_asc'
  | 'from_desc'
  | 'to_asc'
  | 'to_desc'
  | 'price_asc'
  | 'price_desc';
export interface OrderValues {
  platform:
    | Platform.ALL
    | Platform.SARAMIN
    | Platform.JOBKOREA
    | Platform.MEDIGATE
    | Platform.MEDIJOB
    | Platform.NURSCAPE
    | Platform.NURSEJOB
    | Platform.BRIC;

  orderPriority: OrderPriority;
  doctor: boolean;
  nurse: boolean;
  office: boolean;
  temporary: boolean;
}
