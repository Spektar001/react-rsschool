import React from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export const NameInput = (props: Props) => {
  return (
    <label>
      <input className="form__name-prod" type="text" ref={props.input} />
      <span className="invalidText" style={{ opacity: !props.isValid ? '1' : '0' }}>
        *Please enter a product name!
      </span>
    </label>
  );
};
