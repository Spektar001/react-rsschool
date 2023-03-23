import React, { Component } from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
};

export default class PriceInput extends Component<Props> {
  render() {
    return <input className="form__price" type="number" ref={this.props.input} />;
  }
}
