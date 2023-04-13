import React, { useState } from 'react';
import './HomePage.css';
import { Product } from '../../components/Product';
import { Search } from '../../components/Search/Search';
import { Data } from '../../components/Types/types';
import { HomeModal } from './HomeModal/HomeModal';
import { useLazySearchItemQuery, useSearchCardsQuery } from '../../store/unsplashAPI/unsplash.api';

export const ProductsPage = () => {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');
  const [pendingModal, setPendingModal] = useState(true);
  const [modalItemOpen, setModalItemOpen] = useState(false);

  const { isLoading, isError, data } = useSearchCardsQuery(search, {
    refetchOnFocus: true,
  });
  // разобраться с useEffect
  // useEffect(() => {
  //   setSearch(search);
  // }, [search]);

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
      <Search setSearch={setSearch} />
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
