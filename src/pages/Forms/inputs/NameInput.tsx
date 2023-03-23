import React, { Component } from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
};

export default class NameInput extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return <input className="form__name-prod" type="text" ref={this.props.input} />;
  }
}
