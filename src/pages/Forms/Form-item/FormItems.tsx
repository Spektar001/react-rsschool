import React from 'react';
import { CardsItem } from '../Cards-item/CardsItem';
import { FormProduct } from '../Forms';

interface Props {
  cards: FormProduct[];
}

export function FormItems(props: Props) {
  const cards = props.cards.map((item, key) => (
    <CardsItem
      key={key}
      date={item.date}
      category={item.category}
      image={item.image}
      title={item.title}
      norobot={item.norobot}
      sale={item.sale}
      price={item.price}
    />
  ));

  return <div className="cards">{cards}</div>;
}
