import React, { Component } from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export default class PriceInput extends Component<Props> {
  render() {
    return (
      <label>
        <input className="form__price" type="number" ref={this.props.input} />$
        <span className="invalidText" style={{ opacity: !this.props.isValid ? '1' : '0' }}>
          *Please enter a price!
        </span>
      </label>
    );
  }
}
