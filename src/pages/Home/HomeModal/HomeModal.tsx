import React from 'react';
import { Data } from 'components/Types/types';
import './HomeModal.css';

interface ProductProps {
  product: Data;
}

export const HomeModal = () => {
  return (
    <div className="home__modal">
      <div className="home__modal_content">
        <div className="home__modal_row">
          LEFT
        </div>
        <div className="home__modal_row">RIGHT</div>
      </div>
    </div>
  )
}
