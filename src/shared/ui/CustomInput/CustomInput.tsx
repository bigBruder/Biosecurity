import { FC } from 'react';

import cn from 'classnames';
import { Field } from 'formik';

import css from './CustomInput.module.scss';

type TCustomInputProps = {
  name?: string;
  type?: string;
  placeholder?: string;
  validate?: (value: string) => string | undefined;
  className?: string;
};

const CustomInput: FC<TCustomInputProps> = ({
  name = '',
  type = 'text',
  placeholder = '',
  validate = () => {},
  className = '',
}) => {
  return (
    <Field
      className={cn(css.input, className)}
      name={name}
      type={type}
      placeholder={placeholder}
      validate={validate}
    />
  );
};

export { CustomInput };
