import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../Form-item/FormItem';

type Props = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export const CheckInput = (props: Props) => {
  return (
    <label>
      <input
        className="form__not-robot"
        type="checkbox"
        {...props.register('norobot', {
          required: '*Please verify that you are human!',
        })}
      />
      {props.errors.norobot && <span className="invalidText">{props.errors.norobot.message}</span>}
    </label>
  );
};
