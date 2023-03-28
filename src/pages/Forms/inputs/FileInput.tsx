import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../Form-item/FormItem';

type Props = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

export const FileInput = (props: Props) => {
  return (
    <label>
      <input
        className="form__img"
        type="file"
        accept="image/*"
        {...props.register('image', {
          required: '*Please upload a photo!',
        })}
      />
      {props.errors.image && <span className="invalidText">{props.errors.image.message}</span>}
      {/* <span className="invalidText" style={{ opacity: !props.isValid ? '1' : '0' }}>
        *Please upload a photo!
      </span> */}
    </label>
  );
};
