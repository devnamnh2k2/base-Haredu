import { USER_ROLE } from '#utils/const';

export const MappingLogoDefaultLinkByRole = {
  [USER_ROLE.master]: '/master/dashboard',
  [USER_ROLE.admin]: '/admin/dashboard',
  [USER_ROLE.student]: '/student/dashboard',
  [USER_ROLE.teacher]: '/teacher/dashboard',
};
