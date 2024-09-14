import {
  endOfDay,
  endOfMonth,
  endOfWeek,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
  subWeeks,
} from 'date-fns';

export enum DIALOG {
  ERROR,
  INFO,
  INFO_WITHOUT_ICON,
  CONFIRM,
  CONFIRM_WITHOUT_ICON,
  WARNING,
}

export const LocalStorageKey = {
  currentUser: 'current_user',
  breadCrumb: 'bread_crumb',
  prevBreadcrumb: 'prev_bread_crumb',
};

export enum USER_ROLE {
  master = 0,
  admin = 1,
  teacher = 2,
  student = 3,
}

export enum SOCKET_SCREEN {
  PROGRESS_WAITING = 'PROGRESS_WAITING',
}

export enum Locales {
  VI = 'vi',
  EN = 'en',
  JA = 'ja',
  KR = 'kr',
}

export const LANGUAGES = {
  English: 'EN',
  Germany: 'DE',
  Spain: 'ES',
  Italy: 'IT',
};

export enum SOCKET_SCREEN_ACTION {}

export const REGEX = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^.{8,30}$/,
  phoneNumber: /^[0-9]{1,11}$/,
  domain: /^(?!-)[a-zA-Z0-9-]{1,63}(?<!-)(?:\.[a-zA-Z]{2,})+$/,
};

export enum VALIDATOR_ERROR {
  PASSWORD_NOT_EQUAL = 'custom_password_not_equal',
  CONFIRM_PASSWORD_NOT_EQUAL = 'custom_confirm_password_not_equal',
  OLD_PASSWORD_EQUAL = 'custom_old_password_equal',
  VALIDATION_LENGTH = 'custom_validation_length',
  VALIDATION_REQUIRE = 'custom_validation_require',
}

export const VALID_LENGTH = {
  MIN_LENGTH: 8,
  MAX_LENGTH: 30,
};

export enum STRING {
  ID = 'id',
  ASC = 'ascend',
  DESC = 'descend',
  TIME = 'time',
  DATE = 'date',
  NUMBER = 'number',
  STRING = 'string',
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  PREFIX = 'prefix',
  SUFFIX = 'suffix',
  TOKEN = 'token',
}

export const APP_LOCALES = [Locales.EN, Locales.VI];
export const Default_Lang = Locales.EN;

export const SortTypeTable = {
  ascend: 'asc',
  descend: 'desc',
};

export const PAGE_SIZE = [25, 50, 100];

export const CommonTable = {
  textSelectAll: 'table.selectAll',
  textSelectPage: 'table.selectPage',
};

export enum LOGO {
  images = 'assets/images/logo.png',
  name = 'HarEdu',
}

export enum FormType {
  FORM_2 = '2',
  FORM_14 = '14',
}

export const DATE_RANGE = {
  TODAY: [startOfDay(new Date()), endOfDay(new Date())],
  YESTERDAY: [startOfDay(subDays(new Date(), 1)), endOfDay(subDays(new Date(), 1))],
  LAST_7_DAYS: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())],
  LAST_14_DAYS: [startOfDay(subDays(new Date(), 13)), endOfDay(new Date())],
  LAST_30_DAYS: [startOfDay(subDays(new Date(), 29)), endOfDay(new Date())],
  THIS_WEEK: [startOfWeek(new Date(), { weekStartsOn: 1 }), endOfWeek(new Date(), { weekStartsOn: 1 })],
  LAST_WEEK: [
    startOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 1 }),
    endOfWeek(subWeeks(new Date(), 1), { weekStartsOn: 1 }),
  ],
  THIS_MONTH: [startOfMonth(new Date()), endOfMonth(new Date())],
  LAST_MONTH: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
};

export const LINK_LOGIN_GUARD = ['login'];

export const BREAK_POINT = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};
