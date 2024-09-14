import { IUserDropDown } from '#interfaces/menu.interface';
import { USER_ROLE } from '#utils/const';

const Master: IUserDropDown[] = [
  {
    label: 'menubar.accountSetting',
    routerLink: '/auth/account-setting',
  },
];

const Admin: IUserDropDown[] = [];
const Student: IUserDropDown[] = [];
const Teacher: IUserDropDown[] = [];

export const MappingUserDropdownByRoles = {
  [USER_ROLE.master]: Master,
  [USER_ROLE.admin]: Admin,
  [USER_ROLE.student]: Student,
  [USER_ROLE.teacher]: Teacher,
};

export const MappingLinkByRoles = {
  [USER_ROLE.master]: '/master/',
  [USER_ROLE.admin]: '/admin/',
  [USER_ROLE.student]: '/student/',
  [USER_ROLE.teacher]: '/teacher/',
};
