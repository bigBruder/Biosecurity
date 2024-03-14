import { FC } from 'react';

import Link from 'next/link';

import css from './Navbar.module.scss';

type TNavbarProps = object;

const Navbar: FC<TNavbarProps> = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <Link className={css.link} href='/'>
            Home
          </Link>
        </li>
        <li className={css.item}>
          <Link className={css.link} href='/#producer'>
            Producer
          </Link>
        </li>
        <li className={css.item}>
          <Link className={css.link} href='/#veterinarian'>
            Veterinarian
          </Link>
        </li>
        <li className={css.item}>
          <Link className={css.link} href='/#service-providers'>
            Service providers
          </Link>
        </li>
        <li className={css.item}>
          <Link className={css.link} href='/request-call'>
            Support
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
