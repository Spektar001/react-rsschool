import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../Form-item/FormItem';

type Props = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export const DateInput = (props: Props) => {
  return (
    <label>
      <input
        className="form__date"
        type="date"
        {...props.register('date', {
          required: '*Please enter a date!',
        })}
      />
      {props.errors.date && <span className="invalidText">{props.errors.date.message}</span>}
    </label>
  );
};
