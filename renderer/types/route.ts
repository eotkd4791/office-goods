const enum Route {
  HOME = 'home',
  HIRING = 'hiring',
  POST = 'post',
  STATUS = 'status',
  ANALYSIS = 'analysis',
  REGISTER = 'register',
}

const paths = {
  [Route.HOME]: '/',
  [Route.HIRING]: `/${Route.HIRING}`,
  [Route.POST]: `/${Route.HIRING}/${Route.POST}`,
  [Route.STATUS]: `/${Route.HIRING}/${Route.STATUS}`,
  [Route.ANALYSIS]: `/${Route.HIRING}/${Route.ANALYSIS}`,
  [Route.REGISTER]: `/${Route.HIRING}/${Route.REGISTER}`,
} as const;

const pathNames = {
  [Route.HOME]: '홈',
  [Route.HIRING]: '채용',
  [Route.POST]: '채용 공고 관리',
  [Route.STATUS]: '채용 현황',
  [Route.ANALYSIS]: '채용관련 통계',
  [Route.REGISTER]: '채용 공고 등록',
} as const;

export { Route, paths, pathNames };
