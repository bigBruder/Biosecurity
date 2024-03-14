import { FC, ReactNode } from 'react';

import cn from 'classnames';

import css from './GradientSection.module.scss';

type TColor = 'gray' | 'green';

type TGradientSectionProps = {
  children: ReactNode;
  color?: TColor;
  className?: string;
  id?: string;
};

const GradientSection: FC<TGradientSectionProps> = ({
  children,
  id,
  className,
  color = 'green',
}) => {
  return (
    <section id={id} className={cn(css.section, css[color], className)}>
      {children}
    </section>
  );
};

export { GradientSection };
