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
      {/* <span className="invalidText" style={{ opacity: !props.isValid ? '1' : '0' }}>
        *Please enter a date!
      </span> */}
    </label>
  );
};
