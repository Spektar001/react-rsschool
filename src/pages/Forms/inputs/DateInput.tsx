import React, { Component } from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
};

export default class DateInput extends Component<Props> {
  render() {
    return <input className="form__date" placeholder="2" type="date" ref={this.props.input} />;
  }
}
