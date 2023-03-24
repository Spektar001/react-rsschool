import React, { Component } from 'react';

type Props = {
  inputYes: React.RefObject<HTMLInputElement>;
  inputNo: React.RefObject<HTMLInputElement>;
};

export default class RadioInput extends Component<Props> {
  render() {
    return (
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
        <label
          style={{ display: 'flex', gap: '3px', justifyContent: 'center', alignItems: 'center' }}
        >
          <span>YES</span>
          <input
            defaultChecked
            ref={this.props.inputYes}
            name="sale"
            value={Math.ceil(Math.random() * 100)}
            className="form__rate"
            type="radio"
          />
        </label>
        <label
          style={{ display: 'flex', gap: '3px', justifyContent: 'center', alignItems: 'center' }}
        >
          <span>NO</span>
          <input
            value="0"
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
