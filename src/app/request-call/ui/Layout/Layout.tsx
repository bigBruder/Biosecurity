import { FC, ReactNode } from 'react';

import cn from 'classnames';

import css from './Layout.module.scss';

type TLayoutProps = {
  heading?: ReactNode;
  form?: ReactNode;
};

const Layout: FC<TLayoutProps> = (props) => (
  <section className={cn('container', css.sectionContainer)}>
    <div className={cn(css.inner, css.layout)}>
      <button type='button' className={css.close}>
        <svg
          width='25'
          height='24'
          viewBox='0 0 25 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.5 22C18 22 22.5 17.5 22.5 12C22.5 6.5 18 2 12.5 2C7 2 2.5 6.5 2.5 12C2.5 17.5 7 22 12.5 22Z'
            stroke='black'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M9.67004 14.8299L15.33 9.16992'
            stroke='black'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.33 14.8299L9.67004 9.16992'
            stroke='black'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      {props.heading}
      {props.form}
    </div>
  </section>
);

export { Layout };
