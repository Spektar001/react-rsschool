import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { value, inputChange } from '../../store/slice/searchSlice';
import './Search.css';

export const Search = () => {
  const searchInputValue = useAppSelector((state) => state.searchSlice.searchInputvalue);
  const dispatch = useAppDispatch();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputChange(event.target.value));
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(value(searchInputValue));
    }
  };

  const handleFind = () => {
    dispatch(value(searchInputValue));
  };

  return (
    <div className="home__search_box">
      <input
        data-testid="search"
        value={searchInputValue}
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
