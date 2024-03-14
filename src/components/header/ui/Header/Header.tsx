'use client';

import { useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import Link from 'next/link';

import { Burger } from '@/app/ui/Burger';
import { Button } from '@/shared/ui/Button';
import { Logo } from '@/shared/ui/Logo';

import { handleScroll } from '../../lib/handleScroll';
import { BurgerIcon } from '../BurgerIcon';
import { Localization } from '../Localization';
import { Navbar } from '../Navbar';
import css from './Header.module.scss';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const refHeader = useRef(null);

  useEffect(() => {
    global.addEventListener('scroll', () => handleScroll(refHeader));

    return () => {
      global.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');

    if (isOpen) {
      body?.classList.add(css.overflow);

      return;
    }

    body?.classList.remove(css.overflow);
  }, [isOpen]);

  return (
    <header ref={refHeader} className={cn('container', css.header)}>
      <div className={css.inner}>
        <div className={css.leftHeader}>
          <Logo />
          <Navbar />
        </div>
        <div className={css.rightHeader}>
          <Localization className={css.local} />
          <Link className={css.signIn} href='/request-call'>
            Sign In
          </Link>
          <Button to='/request-call' className={css.signUp} color='lightGreen' txtColor='black'>
            Sign Up
          </Button>
          <BurgerIcon setOpen={setOpen} />
        </div>
      </div>
      {isOpen && <Burger isOpen={isOpen} setClose={setOpen} />}
    </header>
  );
};

export { Header };
