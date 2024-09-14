import { IMenu } from '#interfaces/menu.interface';
import { USER_ROLE } from '#utils/const';

const Master: IMenu[] = [
  {
    label: 'menubar.dashboard',
    icon: 'home',
    routerLink: '/master/dashboard',
  },
  { label: 'menubar.analytic', icon: 'analytic', routerLink: '/master/analytics' },
  { label: 'menubar.merchant', icon: 'merchant-shop', routerLink: '/master/merchants' },
  { label: 'menubar.emails', icon: 'email', routerLink: '/master/emails' },
  {
    label: 'menubar.settings',
    icon: 'setting',
    children: [
      {
        label: 'menubar.general',
        routerLink: '/master/settings/general',
      },
      {
        label: 'menubar.payments',
        routerLink: '/master/settings/payment',
      },
      {
        label: 'menubar.apps',
        routerLink: '/master/settings/apps',
      },
      {
        label: 'menubar.storefront',
        routerLink: '/master/settings/storefront',
      },
      {
        label: 'menubar.fulfillment',
        routerLink: '/master/settings/fulfillment',
      },
    ],
  },
];

const Admin: IMenu[] = [
  { label: 'menubar.dashboard', icon: 'home', routerLink: '/admin/dashboard' },
  { label: 'menubar.analytic', icon: 'analytic', routerLink: '/admin/analytics' },
  { label: 'menubar.products', icon: 'bag', routerLink: '/admin/products' },
  { label: 'menubar.orders', icon: 'cart', routerLink: '/admin/orders' },
  { label: 'menubar.users', icon: 'users', routerLink: '/admin/users' },
  {
    label: 'menubar.settings',
    icon: 'setting',
    routerLink: '/admin/settings',
    children: [
      {
        label: 'menubar.general',
        routerLink: '/admin/general',
      },
      {
        label: 'menubar.payments',
        routerLink: '/admin/settings/payment',
      },
      {
        label: 'menubar.billing',
        routerLink: '/admin/settings/billing',
      },
      {
        label: 'menubar.userPermission',
        routerLink: '/admin/settings/user-permissions',
      },
      {
        label: 'menubar.storefront',
        routerLink: '/admin/settings/storefront',
      },
      {
        label: 'menubar.shipping',
        routerLink: '/admin/shipping',
      },
    ],
  },
];

const Student: IMenu[] = [];

const Teacher: IMenu[] = [];

export const MappingMenuByRoles = {
  [USER_ROLE.master]: Master,
  [USER_ROLE.admin]: Admin,
  [USER_ROLE.student]: Student,
  [USER_ROLE.teacher]: Teacher,
};

export const MappingNameRoleByRoles = {
  [USER_ROLE.master]: 'Master',
  [USER_ROLE.admin]: 'Admin',
  [USER_ROLE.student]: 'student',
  [USER_ROLE.teacher]: 'teacher',
};
