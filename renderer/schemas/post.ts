import { Platform } from 'renderer/types/post';
import * as yup from 'yup';

const enum postValidationMessage {
  PLATFORM_REQUIRED = '채용 공고를 올린 플랫폼을 입력해주세요.',
  PLATFORM_ONE_OF = '채용 공고 올바른 플랫폼을 선택하세요.',
  TITLE_REQUIRED = '채용 공고 제목을 입력해주세요.',
  FROM_REQUIRED = '채용 공고 시작 날짜를 입력해주세요.',
  TO_REQUIRED = '채용 공고 마감 날짜를 입력해주세요.',
  URL_REQUIRED = '채용 공고 URL을 입력해주세요.',
  PRICE_REQUIRED = '채용 공고 등록비를 입력해주세요.',
  PRICE_NUMBER = '숫자만 입력이 가능합니다.',
  FIELD_ONE_OF_REQUIRED = '하나의 직군을 선택해주세요.',
  DEPARTMENT_REQUIRED = '부서를 입력해주세요.',
  TYPE_REQUIRED = '직종을 입력해주세요.',
  CONTRACT_ONE_OF_REQUIRED = '하나의 고용형태를 선택해주세요.',
}

export const postSchema = yup.object({
  platform: yup
    .string()
    .oneOf(
      [
        Platform.SARAMIN,
        Platform.JOBKOREA,
        Platform.MEDIGATE,
        Platform.MEDIJOB,
        Platform.NURSCAPE,
        Platform.NURSEJOB,
        Platform.BRIC,
      ],
      postValidationMessage.PLATFORM_ONE_OF
    )
    .required(postValidationMessage.PLATFORM_REQUIRED),
  title: yup.string().required(postValidationMessage.TITLE_REQUIRED),
  from: yup.string().required(postValidationMessage.FROM_REQUIRED),
  to: yup.string().required(postValidationMessage.TO_REQUIRED),
  url: yup.string().required(postValidationMessage.URL_REQUIRED),
  price: yup
    .number()
    .typeError(postValidationMessage.PRICE_NUMBER)
    .required(postValidationMessage.PRICE_REQUIRED),
  field: yup.string().nullable(true).required(postValidationMessage.FIELD_ONE_OF_REQUIRED),
  department: yup.string().required(postValidationMessage.DEPARTMENT_REQUIRED),
  type: yup.string().required(postValidationMessage.TYPE_REQUIRED),
  contract: yup.string().nullable(true).required(postValidationMessage.CONTRACT_ONE_OF_REQUIRED),
});
