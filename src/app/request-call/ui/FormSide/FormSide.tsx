'use client';

import { FC } from 'react';

import cn from 'classnames';
import { Field, Form, Formik } from 'formik';

import { validateEmail, validateName, validatePhone } from '@/shared/lib/validateForm';
import { Button } from '@/shared/ui/Button';
import { CustomInput } from '@/shared/ui/CustomInput';

import css from './FormSide.module.scss';

interface IInitialFields {
  name: string;
  email: string;
  company: string;
  business: string;
  phone: string;
  jobTitle: string;
  messege: string;
}

type TFormSideProps = object;

const initialFields: IInitialFields = {
  name: '',
  email: '',
  company: '',
  business: '',
  phone: '',
  jobTitle: '',
  messege: '',
};

const FormSide: FC<TFormSideProps> = () => {
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
          <h2 className={css.title}>Get answer and support</h2>
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
              placeholder='Your name/ Last name'
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
              type='text'
              placeholder='Email address'
              validate={validateEmail}
            />
          </label>
          <label
            className={cn(css.label, {
              [css.lableError]: errors.company && touched.company,
            })}
          >
            <CustomInput
              className={cn(css.inputField, {
                [css.fieldError]: errors.company && touched.company,
              })}
              name='company'
              type='text'
              placeholder='Company'
            />
          </label>
          <label
            className={cn(css.label, {
              [css.lableError]: errors.business && touched.business,
            })}
          >
            <CustomInput
              className={cn(css.inputField, {
                [css.fieldError]: errors.business && touched.business,
              })}
              name='business'
              type='text'
              placeholder='Type of business'
            />
          </label>
          <label
            className={cn(css.label, {
              [css.lableError]: errors.phone && touched.phone,
            })}
          >
            <CustomInput
              className={cn(css.inputField, {
                [css.fieldError]: errors.phone && touched.phone,
              })}
              name='phone'
              type='text'
              placeholder='Phone number'
              validate={validatePhone}
            />
          </label>
          <label
            className={cn(css.label, {
              [css.lableError]: errors.jobTitle && touched.jobTitle,
            })}
          >
            <CustomInput
              className={cn(css.inputField, {
                [css.fieldError]: errors.jobTitle && touched.jobTitle,
              })}
              name='jobTitle'
              type='text'
              placeholder='Job title'
            />
          </label>

          <label
            className={cn(css.label, {
              [css.lableError]: errors.messege && touched.messege,
            })}
          >
            <Field
              className={cn(css.textArea, {
                [css.fieldError]: errors.messege && touched.messege,
              })}
              name='messege'
              component='textarea'
              placeholder='Please type your message'
            ></Field>
          </label>

          <Button type='submit'>Send</Button>
        </Form>
      )}
    </Formik>
  );
};

export { FormSide };
