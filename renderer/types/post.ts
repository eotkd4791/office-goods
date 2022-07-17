import dayjs from 'dayjs';

const enum Platform {
  SARAMIN = 'saramin',
  JOBKOREA = 'jobkorea',
  MEDIGATE = 'medigate',
  MEDIJOB = 'medijob',
  NURSCAPE = 'nurscape',
  NURSEJOB = 'nursejob',
}

const platformNames = {
  saramin: '사람인',
  jobkorea: '잡코리아',
  medigate: '메디게이트',
  medijob: '메디잡',
  nurscape: '너스케입',
  nursejob: '널스잡',
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
}

export { Platform, platformNames };
