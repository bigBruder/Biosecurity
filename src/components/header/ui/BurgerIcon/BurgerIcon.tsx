import { FC } from 'react';

import css from './BurgerIcon.module.scss';

type TBurgerIcon = {
  setOpen: (close: boolean) => void;
};

const BurgerIcon: FC<TBurgerIcon> = ({ setOpen }) => (
  <button className={css.button} onClick={() => setOpen(true)}>
    <svg
      className={css.icon}
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='40' height='40' rx='20' fill='#D2DC3B' />
      <path d='M14 14H26' stroke='black' strokeWidth='1.5' strokeLinecap='round' />
      <path d='M14 20H26' stroke='black' strokeWidth='1.5' strokeLinecap='round' />
      <path d='M14 26H26' stroke='black' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  </button>
);

export { BurgerIcon };
