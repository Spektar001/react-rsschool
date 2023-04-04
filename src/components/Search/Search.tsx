import React, { useEffect, useState } from 'react';
import './Search.css';

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const Search = (props: Props) => {
  const [value, setValue] = useState('');

  function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    localStorage.setItem('search', event.target.value);
  }

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter';
    props.setSearch(value);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('search', localStorage.getItem('search') || '');
    };
  }, []);

  return (
    <div className="home__search_box">
      <input
        value={value}
        onInput={inputHandler}
        className="search"
        type="search"
        placeholder="Search..."
        onKeyDown={handleEnterPress}
      />
      <button data-testid="find" onClick={() => props.setSearch(value)} className="home__btn">
        find
      </button>
    </div>
  );
};
