import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setSearch } from '../../store/searchSlice';
import './Search.css';

export const Search = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(setSearch(value));
    }
  };

  const handleFind = () => {
    dispatch(setSearch(value));
  };

  return (
    <div className="home__search_box">
      <input
        data-testid="search"
        value={value}
        onInput={inputHandler}
        className="search"
        type="search"
        placeholder="Search..."
        onKeyDown={handleEnter}
      />
      <button data-testid="find" onClick={handleFind} className="home__btn">
        find
      </button>
    </div>
  );
};
