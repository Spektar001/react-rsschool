import { Props, State } from 'components/Types/types';
import React, { ChangeEvent, Component } from 'react';
import './Search.css';

export default class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { text: localStorage.getItem('search') || '' };
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.text);
  }

  changeHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ text: event.target.value });
    localStorage.setItem('search', event.target.value);
  }
  render() {
    return (
      <input
        value={this.state.text}
        onChange={this.changeHandler}
        className="search"
        type="text"
        placeholder="Search...."
      />
    );
  }
}
