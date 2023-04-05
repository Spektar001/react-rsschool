import React, { useEffect, useState } from 'react';
import './Search.css';

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const Search = (props: Props) => {
  const [value, setValue] = useState('');

  function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      localStorage.setItem('search', value);
      props.setSearch(value);
    }
  };

  const handleFind = () => {
    localStorage.setItem('search', value);
    props.setSearch(value);
  };

  useEffect(() => {
    return () => {
      setValue(localStorage.getItem('search') || '');
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
        onKeyDown={handleEnter}
      />
      <button data-testid="find" onClick={handleFind} className="home__btn">
        find
      </button>
    </div>
  );
};
