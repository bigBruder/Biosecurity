import { FC, ReactNode } from 'react';

import cn from 'classnames';

import { Button } from '@/shared/ui/Button';

import css from './MultiSection.module.scss';

type TMultiSectionProps = {
  title?: ReactNode;
  text?: string;
  list?: ReactNode;
  imageWidget?: ReactNode;
  isReverse?: boolean;
};

const MultiSection: FC<TMultiSectionProps> = (props) => {
  return (
    <div
      className={cn(css.inner, {
        [css.isReverse]: props.isReverse,
      })}
    >
      <div className={css.content}>
        {props.title}
        <p>{props.text}</p>
        {props.list}

        <Button to='/request-call' className={css.button}>
          Sign up
        </Button>
      </div>
      <div className={css.imageBlock}>{props.imageWidget}</div>
    </div>
  );
};

export { MultiSection };
