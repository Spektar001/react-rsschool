import React, { Component } from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
  isValid: boolean;
};

export default class NameInput extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <label>
        <input className="form__name-prod" type="text" ref={this.props.input} />
        <span className="invalidText" style={{ opacity: !this.props.isValid ? '1' : '0' }}>
          *Please enter a product name!
        </span>
      </label>
    );
  }
}
