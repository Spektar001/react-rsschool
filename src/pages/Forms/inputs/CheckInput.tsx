import React, { Component } from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
};

export default class CheckInput extends Component<Props> {
  render() {
    return (
      <input className="form__not-robot" placeholder="4" type="checkbox" ref={this.props.input} />
    );
  }
}
