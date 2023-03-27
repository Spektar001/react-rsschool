import React, { Component } from 'react';
import './HomePage.css';
import { Product } from '../../components/Product';
import products from '../../components/data/productsData';
import { Search } from '../../components/Search/Search';

export class ProductsPage extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__search_box">
          <Search />
          <button data-testid="find" className="home__btn">
            find
          </button>
        </div>
        <div className="home__items">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
}
