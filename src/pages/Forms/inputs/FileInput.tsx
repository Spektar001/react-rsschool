import React, { Component } from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
};

export default class FileInput extends Component<Props> {
  render() {
    return <input className="form__img" type="file" accept="image/*" ref={this.props.input} />;
  }
}
