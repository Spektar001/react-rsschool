import React, { ChangeEvent, Component } from 'react';
import './HomePage.css';
import { Product } from '../components/Product';
import { products } from '../components/data/productsData';
import { State, Props } from 'components/Types/types';

export default class ProductsPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { text: '' };
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ text: event.target.value });
        localStorage.setItem('input', JSON.stringify(event.target.value));
    }

    render() {
        return (
            <div className="home">
                <div className="home__search_box">
                    <input
                        value={
                            localStorage.getItem('input') !== null
                                ? JSON.parse(localStorage.getItem('input') || '')
                                : this.state.text
                        }
                        onChange={this.changeHandler}
                        className="home__input"
                        type="text"
                        placeholder="Search..."
                    />
                    <button className="home__btn">find</button>
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
