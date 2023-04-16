import React from 'react';
import { CardsItem } from '../Cards-item/CardsItem';
import { useAppSelector } from '../../../store/hooks';

export const FormItems = () => {
  const formCards = useAppSelector((state) => state.formSlice.form);

  const cards = formCards.map((item, key) => (
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
};
