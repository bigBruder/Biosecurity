import { FC, ReactNode } from 'react';

import css from './Layout.module.scss';

type TLayoutProps = {
  heading?: ReactNode;
  form?: ReactNode;
};

const Layout: FC<TLayoutProps> = (props) => (
  <div className={css.inner}>
    {props.heading}
    {props.form}
  </div>
);

export { Layout };
