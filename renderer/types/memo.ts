import * as dayjs from 'dayjs';

export interface Memo {
  id: string;
  memo: string;
  createdAt: dayjs.Dayjs;
  startDate: string;
  endDate: string;
  checked: boolean;
}
