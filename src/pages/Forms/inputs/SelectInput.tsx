import React from 'react';

type Props = {
  input: React.RefObject<HTMLSelectElement>;
};

export const SelectInput = (props: Props) => {
  return (
    <select className="form__category" ref={props.input}>
      <option value="MEN'S CLOTHING">{`MEN'S CLOTHING`}</option>
      <option value="JEWELERY">JEWELERY</option>
      <option value="ELECTRONICS">ELECTRONICS</option>
      <option value="OTHER">OTHER</option>
    </select>
  );
};
