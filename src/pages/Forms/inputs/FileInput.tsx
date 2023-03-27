import React from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export const FileInput = (props: Props) => {
  return (
    <label>
      <input className="form__img" type="file" accept="image/*" ref={props.input} />
      <span className="invalidText" style={{ opacity: !props.isValid ? '1' : '0' }}>
        *Please upload a photo!
      </span>
    </label>
  );
};
