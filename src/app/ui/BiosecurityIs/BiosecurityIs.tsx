import { DecorTitle } from '@/shared/ui/DecorTitle';

import css from './Biosecurity.module.scss';

const BiosecurityIs = () => {
  return (
    <>
      <h2 className={css.title}>
        What is <DecorTitle className={css.decorTitle}>Biosecurity?</DecorTitle>
      </h2>

      <p className={css.text}>
        <strong>Biosecurity</strong> is the safety of the living - our kids, parents, friends, our
        farm animals, our pets, our fields and our forests. It is the practice of protecting living
        organisms from harmful biological threats. The main idea of biosecurity involves regular
        proactive measures to safeguard against threats to plants, animals, and humans.
      </p>
    </>
  );
};

export { BiosecurityIs };
