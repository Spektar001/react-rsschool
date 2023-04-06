import React, { useCallback, useEffect, useState } from 'react';
import './HomePage.css';
import { Product } from '../../components/Product';
import axios, { AxiosError } from 'axios';
import { Search } from '../../components/Search/Search';
import { ACCESS_KEY } from '../../components/Key/key';
import { Data } from '../../components/Types/types';
import { HomeModal } from './HomeModal/HomeModal';

export const ProductsPage = () => {
  const [products, setProducts] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState(localStorage.getItem('search') || '');

  const [pendingModal, setPendingModal] = useState(true);
  const [itemID, setItemID] = useState('');
  const [modalItem, setModalItem] = useState<Data>();
  const [modalItemOpen, setModalItemOpen] = useState(false);

  const fetchItems = useCallback(async () => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${search}&client_id=${ACCESS_KEY}`
      );
      setProducts(response.data.results);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }, [search]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const fetchModalItem = useCallback(async () => {
    try {
      setError('');
      const response = await axios.get(
        `https://api.unsplash.com/photos/${itemID}?client_id=${ACCESS_KEY}`
      );
      setModalItem(response.data);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }, [itemID]);

  useEffect(() => {
    fetchModalItem();
  }, [fetchModalItem]);

  const openModal = (id: string) => {
    setItemID(id);
    setModalItemOpen(true);
    setPendingModal(true);

    setTimeout(() => {
      setPendingModal(false);
    }, 1000);
  };

  const closeModal = () => {
    setModalItemOpen(false);
  };

  return (
    <div className="home">
      <Search setSearch={setSearch} />
      {loading && <p className="loader">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="home__items">
        {products.map((product, key) => (
          <Product product={product} key={key} openModal={openModal} />
        ))}
      </div>
      <HomeModal
        modalItem={modalItem}
        setModalItemOpen={modalItemOpen}
        pendingModal={pendingModal}
        closeModal={closeModal}
      />
    </div>
  );
};
