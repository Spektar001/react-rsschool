import React from 'react';
import './HomePage.css';
import { Product } from '../../components/Product';
import { Search } from '../../components/Search/Search';
import { Data } from '../../components/Types/types';
import { HomeModal } from './HomeModal/HomeModal';
import { useSearchCardsQuery } from '../../store/unsplashAPI/unsplash.api';
import { useAppSelector } from '../../store/hooks';

export const ProductsPage = () => {
  const value = useAppSelector((state) => state.searchSlice.value);

  const { isFetching, isError, data } = useSearchCardsQuery(value, {
    refetchOnFocus: true,
  });

  return (
    <div className="home">
      {isError && <p className="error">Error!</p>}
      <Search />
      {isFetching ? (
        <p className="loader">Loading...</p>
      ) : (
        <div className="home__items">
          {data?.map((data: Data, key: React.Key) => (
            <Product product={data} key={key} />
          ))}
        </div>
      )}
      <HomeModal />
    </div>
  );
};
