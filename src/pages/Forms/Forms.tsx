import React, { useState } from 'react';
import './Forms.css';
import { FormItems } from './Form-item/FormItems';
import { FormItem } from './Form-item/FormItem';
import { SubmitModal } from './SubmitModal/SubmitModal';

export interface FormProduct {
  date: string;
  category: string;
  image: string | false;
  title: string;
  norobot: boolean;
  sale: string;
  price: string;
}

export const Forms = () => {
  const [cards, setCards] = useState<FormProduct[]>([]);
  const [modal, setModal] = useState(false);

  return (
    <div className="flex">
      <FormItem updateCards={setCards} closeModal={setModal} />
      <SubmitModal isOpen={modal} closeModal={setModal} />
      {cards.length > 0 ? (
        <FormItems cards={cards} />
      ) : (
        <p
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: '4rem',
            color: 'rgb(193 45 45)',
          }}
        >
          NO CARDS
        </p>
      )}
    </div>
  );
};
