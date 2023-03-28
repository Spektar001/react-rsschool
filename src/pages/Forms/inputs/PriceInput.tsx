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
      {/* <span className="invalidText" style={{ opacity: !props.isValid ? '1' : '0' }}>
        *Please enter a price!
      </span> */}
    </label>
  );
};
