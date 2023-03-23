import React, { Component } from 'react';

type Props = {
  input: React.RefObject<HTMLSelectElement>;
};

export default class SelectInput extends Component<Props> {
  render() {
    return (
      <select className="form__category" ref={this.props.input}>
        <option value="MEN'S CLOTHING">MEN'S CLOTHING</option>
        <option value="JEWELERY">JEWELERY</option>
        <option value="ELECTRONICS">ELECTRONICS</option>
        <option value="OTHER">OTHER</option>
      </select>
    );
  }
}
