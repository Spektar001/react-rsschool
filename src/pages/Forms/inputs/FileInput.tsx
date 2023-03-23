import React, { Component } from 'react';

type Props = {
  input: React.RefObject<HTMLInputElement>;
};

export default class FileInput extends Component<Props> {
  render() {
    return (
      <input
        className="form__img"
        placeholder="6"
        type="file"
        accept="image/*"
        ref={this.props.input}
      />
    );
  }
}
