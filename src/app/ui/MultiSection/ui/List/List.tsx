import { FC } from 'react';

import css from './List.module.scss';

type TListProps = {
  items: string[];
};

const List: FC<TListProps> = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item} className={css.item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export { List };
