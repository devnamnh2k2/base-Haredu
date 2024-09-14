import { ITableConfig } from '#interfaces/table.interface';

export const tableUser: ITableConfig[] = [
  {
    title: 'common.table.header.email',
    key: 'email',
    width: '140px',
    sort: true,
  },
  {
    title: 'common.table.header.name',
    key: 'name',
    width: '140px',
    sort: true,
  },
  {
    title: 'common.table.header.phone',
    key: 'phone',
    width: '100px',
    sort: false,
  },
  {
    title: 'common.table.header.role',
    key: 'role',
    width: '100px',
    sort: false,
  },
  {
    title: 'common.table.header.status',
    key: 'isActive',
    width: '100px',
    sort: false,
  },
  {
    title: 'common.table.header.action',
    key: 'action',
    width: '100px',
    sort: false,
  },
];

export const TABLE_CONFIG = {
  TABLE_USER: tableUser,
};
