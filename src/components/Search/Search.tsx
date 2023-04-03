import React, { useEffect, useState } from 'react';
import './Search.css';

export const Search = () => {
  const [value, setValue] = useState(localStorage.getItem('search') || '');

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  useEffect(() => {
    return () => {
      localStorage.setItem('search', value);
    };
  });

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
