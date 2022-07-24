import * as dayjs from 'dayjs';

export const enum Platform {
  SARAMIN = 'saramin',
  JOBKOREA = 'jobkorea',
  MEDIGATE = 'medigate',
  MEDIJOB = 'medijob',
  NURSCAPE = 'nurscape',
  NURSEJOB = 'nursejob',
}

export const platformNames = {
  saramin: '사람인',
  jobkorea: '잡코리아',
  medigate: '메디게이트',
  medijob: '메디잡',
  nurscape: '너스케입',
  nursejob: '널스잡',
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

export interface OrderValues {
  platform:
    | Platform.SARAMIN
    | Platform.JOBKOREA
    | Platform.MEDIGATE
    | Platform.MEDIJOB
    | Platform.NURSCAPE
    | Platform.NURSEJOB;

  orderPriority: 'title' | 'active' | 'from_asc' | 'from_desc' | 'to_asc' | 'to_desc';
  doctor: boolean;
  nurse: boolean;
  office: boolean;
  temporary: boolean;
}
