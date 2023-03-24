import React, { Component } from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export default class DateInput extends Component<Props> {
  render() {
    return (
      <label>
        <input className="form__date" placeholder="2" type="date" ref={this.props.input} />
        <span className="invalidText" style={{ opacity: !this.props.isValid ? '1' : '0' }}>
          *Please enter a date!
        </span>
      </label>
    );
  }
}
