import { RefObject } from 'react';

import css from '../ui/Header/Header.module.scss';

type THandleScroll = (refHeader: RefObject<HTMLDivElement> | Event) => void;

const handleScroll: THandleScroll = (refHeader) => {
  if (refHeader instanceof Event) {
    return;
  }

  const HEADER = refHeader.current;
  const HEADER_HEIGHT = 79.2;

  requestAnimationFrame(() => {
    if (window.scrollY >= HEADER_HEIGHT) {
      HEADER?.classList.add(css.scrollHeader);
    } else {
      HEADER?.classList.remove(css.scrollHeader);
    }
  });
};

export { handleScroll };
