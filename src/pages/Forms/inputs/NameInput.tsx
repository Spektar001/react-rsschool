import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../Form-item/FormItem';

type Props = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export const NameInput = (props: Props) => {
  return (
    <label>
      <input
        className="form__name-prod"
        type="text"
        {...props.register('title', {
          required: '*Please enter a product name!',
        })}
      />
      {props.errors.title && <span className="invalidText">{props.errors.title.message}</span>}
    </label>
  );
};
