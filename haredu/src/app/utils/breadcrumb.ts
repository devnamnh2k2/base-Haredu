interface IBreadcrumb {
  [key: string]: string | IBreadcrumb;
}

const TOP_MENU = [''];

const TOP_MENU_ONLY_USER = [''];

const commons: IBreadcrumb = {
  home: 'commons',
  demo: 'Demo',
  detail: 'Detail',
};

const BREADCRUMB: IBreadcrumb = {
  COMMONS: commons,
};

export { BREADCRUMB, TOP_MENU, TOP_MENU_ONLY_USER };
