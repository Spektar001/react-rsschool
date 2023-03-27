import React from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export const PriceInput = (props: Props) => {
  return (
    <label>
      <input className="form__price" type="number" ref={props.input} />$
      <span className="invalidText" style={{ opacity: !props.isValid ? '1' : '0' }}>
        *Please enter a price!
      </span>
    </label>
  );
};
