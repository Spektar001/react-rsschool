import React, { Component } from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export default class FileInput extends Component<Props> {
  render() {
    return (
      <label>
        <input className="form__img" type="file" accept="image/*" ref={this.props.input} />
        <span className="invalidText" style={{ opacity: !this.props.isValid ? '1' : '0' }}>
          *Please upload a photo!
        </span>
      </label>
    );
  }
}
