import React, { Component } from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export default class CheckInput extends Component<Props> {
  render() {
    return (
      <label>
        <input className="form__not-robot" placeholder="4" type="checkbox" ref={this.props.input} />
        <span className="invalidText" style={{ opacity: !this.props.isValid ? '1' : '0' }}>
          *Please verify that you are human!
        </span>
      </label>
    );
  }
}
