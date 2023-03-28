import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../Form-item/FormItem';

type Props = {
  register: UseFormRegister<FormInputs>;
};

export const SelectInput = (props: Props) => {
  return (
    <select className="form__category" {...props.register('category')}>
      <option value="MEN'S CLOTHING">{`MEN'S CLOTHING`}</option>
      <option value="JEWELERY">JEWELERY</option>
      <option value="ELECTRONICS">ELECTRONICS</option>
      <option value="OTHER">OTHER</option>
    </select>
  );
};
