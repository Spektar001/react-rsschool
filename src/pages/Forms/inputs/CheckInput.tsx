import React from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export const CheckInput = (props: Props) => {
  return (
    <label>
      <input className="form__not-robot" placeholder="4" type="checkbox" ref={props.input} />
      <span className="invalidText" style={{ opacity: !props.isValid ? '1' : '0' }}>
        *Please verify that you are human!
      </span>
    </label>
  );
};
