import React, { useState } from 'react';
import './HomePage.css';
import { Product } from '../../components/Product';
import { Search } from '../../components/Search/Search';
import { Data } from '../../components/Types/types';
import { HomeModal } from './HomeModal/HomeModal';
import { useLazySearchItemQuery, useSearchCardsQuery } from '../../store/unsplashAPI/unsplash.api';
import { useAppSelector } from '../../store/hooks';

export const ProductsPage = () => {
  const value = useAppSelector((state) => state.searchSlice.value);

  const [pendingModal, setPendingModal] = useState(true);
  const [modalItemOpen, setModalItemOpen] = useState(false);

  const { isLoading, isError, data } = useSearchCardsQuery(value, {
    refetchOnFocus: true,
  });

  const [fetchRepos, { data: reposData }] = useLazySearchItemQuery();

  const openModal = (id: string) => {
    fetchRepos(id);
    setModalItemOpen(true);
    setPendingModal(true);

    setTimeout(() => {
      setPendingModal(false);
    }, 500);
  };

  const closeModal = () => {
    setModalItemOpen(false);
  };

  return (
    <div className="home">
      <Search />
      {isLoading && <p className="loader">Loading...</p>}
      {isError && <p className="error">Error!</p>}
      <div className="home__items">
        {data?.map((product: Data, key: React.Key) => (
          <Product product={product} key={key} openModal={openModal} />
        ))}
      </div>
      <HomeModal
        modalItem={reposData}
        setModalItemOpen={modalItemOpen}
        pendingModal={pendingModal}
        closeModal={closeModal}
      />
    </div>
  );
};
