import { FC, ReactNode } from 'react';

import cn from 'classnames';

import css from './DecorTitle.module.scss';

type TColor = 'default' | 'green';

type TDecorTitleProps = {
  children: ReactNode;
  color?: TColor;
  className?: string;
};

const DecorTitle: FC<TDecorTitleProps> = ({ children, className = '', color = 'default' }) => {
  return <span className={cn(css.title, css[color], className)}>{children}</span>;
};

export { DecorTitle };
