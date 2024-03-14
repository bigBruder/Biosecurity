import { FC, ReactNode } from 'react';

import cn from 'classnames';

import { GradientSection } from '@/shared/ui/GradientSection';

import css from './HomeLayout.module.scss';

type THomeLayoutProps = {
  hero?: ReactNode;
  biosecurityIs?: ReactNode;
  slider?: ReactNode;
  producer?: ReactNode;
  veterinarian?: ReactNode;
  serviceProvider?: ReactNode;
  aboutUs?: ReactNode;
};

const HomeLayout: FC<THomeLayoutProps> = (props) => (
  <main>
    <section className={cn('container', css.hero)}>{props.hero}</section>
    <section className={cn('container', css.biosecurityIs)}>{props.biosecurityIs}</section>
    <GradientSection color='gray'>
      <div className={cn('container', css.slider)}>{props.slider}</div>
    </GradientSection>
    <GradientSection id='producer'>
      <div className={cn('container', css.multiSection)}>{props.producer}</div>
    </GradientSection>
    <section id='veterinarian' className={cn('container', css.multiSection)}>
      {props.veterinarian}
    </section>
    <GradientSection id='service-providers'>
      <div className={cn('container', css.multiSection)}>{props.serviceProvider}</div>
    </GradientSection>
    <section className={cn('container', css.about)}>{props.aboutUs}</section>
  </main>
);

export { HomeLayout };
