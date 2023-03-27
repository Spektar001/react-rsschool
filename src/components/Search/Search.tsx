import React, { useState } from 'react';
import './Search.css';

export const Search = () => {
  const [value, setValue] = useState(localStorage.getItem('search') || '');

  function componentWillUnmount(event: string) {
    localStorage.setItem('search', event);
  }

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    componentWillUnmount(event.target.value);
  }
  return (
    <input
      value={value}
      onChange={changeHandler}
      className="search"
      type="text"
      placeholder="Search..."
    />
  );
};
