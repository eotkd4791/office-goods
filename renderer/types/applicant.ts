export const enum ApplicantStatus {
  FAIL_DOCS = '서류 탈락',
  PASS_DOCS = '서류 합격',
  FAIL_INTERVIEW = '면접 탈락',
  PASS_INTERVIEW = '면접 합격',
  SENT_FAIL_MAIL = '면접 탈락 메일 전송 완료',
  SENT_JOIN_MAIL = '입사 안내 메일 전송 완료',
  REJECT_JOIN = '입사 취소',
  WAIT_JOIN = '입사 대기',
  FINISHED_JOIN = '입사 완료',
}

export const applicantStatusList: Array<ApplicantStatus> = [
  ApplicantStatus.FAIL_DOCS,
  ApplicantStatus.PASS_DOCS,
  ApplicantStatus.FAIL_INTERVIEW,
  ApplicantStatus.PASS_INTERVIEW,
  ApplicantStatus.SENT_FAIL_MAIL,
  ApplicantStatus.SENT_JOIN_MAIL,
  ApplicantStatus.REJECT_JOIN,
  ApplicantStatus.WAIT_JOIN,
  ApplicantStatus.FINISHED_JOIN,
];

export interface Applicant {
  id: string;
  name: string;
  email: string;
  phoneNum: string;
  birthday: string;
  applyDate: string;
  status: ApplicantStatus;
}
