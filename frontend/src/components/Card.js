import React from 'react';
import './../App.css'

const Card = ({ card, validateCard }) => {
  return (
    <div
      style={{ backgroundColor: `${card.color}` }}
      className='card'
      onClick={() => validateCard(card)}>
      {card.value}
    </div>
  );
};

export default Card;
