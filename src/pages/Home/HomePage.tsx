import React, { ChangeEvent, Component } from 'react';
import './HomePage.css';
import { Product } from '../../components/Product';
import products from '../../components/Data/productsData';
import { State, Props } from '../../components/Types/types';

export class ProductsPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { text: '' };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ text: event.target.value });
    localStorage.setItem('inputText', JSON.stringify(event.target.value));
  }

  render() {
    return (
      <div className="home">
        <div className="home__search_box">
          <input
            value={
              localStorage.getItem('inputText') !== null
                ? JSON.parse(localStorage.getItem('inputText') || '')
                : this.state.text
            }
            onChange={this.changeHandler}
            className="home__input"
            type="text"
            placeholder="Search..."
          />
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
