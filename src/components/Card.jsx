import React from 'react';

const Card = ({ imageSrc, description, price }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="card" />
      <p>{description}</p>
      <button>{price}</button>
    </div>
  );
};

export default Card;