'use client';

import cn from 'classnames';
import { Form, Formik } from 'formik';

import { validateEmail, validateName } from '@/shared/lib/validateForm';
import { Button } from '@/shared/ui/Button';
import { CustomInput } from '@/shared/ui/CustomInput';

import css from './Form.module.scss';

interface IInitialFields {
  name: string;
  email: string;
}

const initialFields: IInitialFields = {
  name: '',
  email: '',
};

const FormArea = () => {
  const handleForm = () => {};

  return (
    <Formik
      initialValues={initialFields}
      onSubmit={(_, actions) => {
        handleForm();
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <h2 className={css.title}>
            Take your best <span>solution</span>
          </h2>
          <label
            className={cn(css.label, {
              [css.lableError]: errors.name && touched.name,
            })}
          >
            <CustomInput
              className={cn(css.inputField, {
                [css.fieldError]: errors.name && touched.name,
              })}
              name='name'
              type='text'
              placeholder='Name'
              validate={validateName}
            />
          </label>

          <label
            className={cn(css.label, {
              [css.lableError]: errors.email && touched.email,
            })}
          >
            <CustomInput
              className={cn(css.inputField, {
                [css.fieldError]: errors.email && touched.email,
              })}
              name='email'
              type='email'
              placeholder='Email'
              validate={validateEmail}
            />
          </label>

          <div className={css.buttonInner}>
            <Button type='submit' color='tr'>
              Sign in
            </Button>
            <span className={css.or}>Or</span>
            <Button className={css.signUp} to='/request-call' type='button' color='lightGreen'>
              Sign up
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { FormArea };
