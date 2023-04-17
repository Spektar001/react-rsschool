import React from 'react';
import './Forms.css';
import { FormItems } from './Form-item/FormItems';
import { FormItem } from './Form-item/FormItem';
import { SubmitModal } from './SubmitModal/SubmitModal';
import { useAppSelector } from '../../store/hooks';

export const Forms = () => {
  const cards = useAppSelector((state) => state.formSlice.form);

  return (
    <div className="flex">
      <FormItem />
      <SubmitModal />
      {cards.length > 0 ? (
        <FormItems />
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
