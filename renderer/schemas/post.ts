import { Platform } from 'renderer/types/post';
import * as yup from 'yup';

const enum postValidationMessage {
  PLATFORM_REQUIRED = '채용 공고를 올린 플랫폼을 입력해주세요.',
  TITLE_REQUIRED = '채용 공고 제목을 입력해주세요.',
  FROM_REQUIRED = '채용 공고 시작 날짜를 입력해주세요.',
  TO_REQUIRED = '채용 공고 마감 날짜를 입력해주세요.',
  URL_REQUIRED = '채용 공고 URL을 입력해주세요.',
  PRICE_REQUIRED = '채용 공고 등록비를 입력해주세요.',
}

export const postSchema = yup.object({
  platform: yup
    .string()
    .oneOf([
      Platform.SARAMIN,
      Platform.JOBKOREA,
      Platform.MEDIGATE,
      Platform.MEDIJOB,
      Platform.NURSCAPE,
      Platform.NURSEJOB,
    ])
    .required(postValidationMessage.PLATFORM_REQUIRED),
  title: yup.string().required(postValidationMessage.TITLE_REQUIRED),
  from: yup.string().required(postValidationMessage.FROM_REQUIRED),
  to: yup.string().required(postValidationMessage.TO_REQUIRED),
  url: yup.string().required(postValidationMessage.URL_REQUIRED),
  price: yup.number().required(postValidationMessage.PRICE_REQUIRED),
});
