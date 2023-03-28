import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../Form-item/FormItem';

type Props = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export const PriceInput = (props: Props) => {
  return (
    <label>
      <input
        className="form__price"
        type="number"
        {...props.register('price', {
          required: '*Please enter a price!',
        })}
      />
      ${props.errors.price && <span className="invalidText">{props.errors.price.message}</span>}
    </label>
  );
};
