import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../Form-item/FormItem';

type Props = {
  register: UseFormRegister<FormInputs>;
};

export const RadioInput = (props: Props) => {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
      <label
        style={{ display: 'flex', gap: '3px', justifyContent: 'center', alignItems: 'center' }}
      >
        <span>YES</span>
        <input
          defaultChecked
          {...props.register('sale')}
          name="sale"
          value={Math.ceil(Math.random() * 100)}
          className="form__rate"
          type="radio"
        />
      </label>
      <label
        style={{ display: 'flex', gap: '3px', justifyContent: 'center', alignItems: 'center' }}
      >
        <span>NO</span>
        <input
          value="0"
          {...props.register('sale')}
          name="sale"
          className="form__rate"
          type="radio"
        />
      </label>
    </div>
  );
};
