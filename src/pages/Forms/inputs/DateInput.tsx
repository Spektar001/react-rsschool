import React from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export const DateInput = (props: Props) => {
  return (
    <label>
      <input className="form__date" placeholder="2" type="date" ref={props.input} />
      <span className="invalidText" style={{ opacity: !props.isValid ? '1' : '0' }}>
        *Please enter a date!
      </span>
    </label>
  );
};
