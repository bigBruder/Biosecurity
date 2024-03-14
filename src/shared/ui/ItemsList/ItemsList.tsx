import { FC } from 'react';

import Link from 'next/link';

import css from './ItemsList.module.scss';

interface IList {
  name: string;
  linkTo: string;
}

type TItemsListProps = {
  title: string;
  list: IList[];
};

const ItemsList: FC<TItemsListProps> = ({ title, list }) => (
  <div>
    <h3 className={css.title}>{title}</h3>
    <ul className={css.list}>
      {list.map(({ name, linkTo }) => (
        <li key={name}>
          <Link href={linkTo}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export { ItemsList };
