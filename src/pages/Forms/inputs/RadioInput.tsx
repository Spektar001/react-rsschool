import React, { Component } from 'react';

type Props = {
  inputYes: React.RefObject<HTMLInputElement>;
  inputNo: React.RefObject<HTMLInputElement>;
};

export default class RadioInput extends Component<Props> {
  render() {
    return (
      <div>
        <label>
          <span> YES</span>
          <input
            defaultChecked
            ref={this.props.inputYes}
            name="sale"
            value="YES"
            className="form__rate"
            type="radio"
          />
        </label>
        <label>
          <span> NO</span>
          <input
            value="NO"
            ref={this.props.inputNo}
            name="sale"
            className="form__rate"
            type="radio"
          />
        </label>
      </div>
    );
  }
}
