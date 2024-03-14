import { FC, ReactNode } from 'react';

import css from './Layout.module.scss';

type TLayoutProps = {
  topFooter?: ReactNode;
  bottomFooter?: ReactNode;
};

const Layout: FC<TLayoutProps> = (props) => {
  return (
    <footer className={css.footer}>
      <div className='container'>
        {props.topFooter}
        {props.bottomFooter}
      </div>
    </footer>
  );
};

export { Layout };
