import React from 'react';
import './HomePage.css';
// import { Product } from '../../components/Product';
// import products from '../../components/data/productsData';
import { Search } from '../../components/Search/Search';
import { Unsplash } from 'components/unsplash-items/Item';
import { ACCESS_KEY } from 'components/Key/key';


export const ProductsPage = () => {

  const getData = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=dog&client_id=${ACCESS_KEY}`
    );
    const json = await data.json();
    const result = json.results;
  }
  return (
    <div className="home">
      <div className="home__search_box">
        <Search />
        <button data-testid="find" className="home__btn">
          find
        </button>
      </div>
      {/* <div className="home__items">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div> */}
      <div className="home__items">
          
      </div>
    </div>
  );
};
