import { FC, ReactNode } from 'react';

import cn from 'classnames';

import css from './Title.module.scss';

type TTitle2Props = {
  children: ReactNode;
  className?: string;
};

const Title2: FC<TTitle2Props> = ({ children, className }) => {
  return <h2 className={cn(css.title, className)}>{children}</h2>;
};

export { Title2 };
