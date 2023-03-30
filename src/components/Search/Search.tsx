import React, { useEffect, useState } from 'react';
import './Search.css';

export const Search = () => {
  const [value, setValue] = useState('');

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    localStorage.setItem('search', event.target.value);
  }

  useEffect(() => {
    setValue(localStorage.getItem('search') || '');
  }, []);

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
