import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="img"/>
      <div className='container'>
        <h4>{props.name}</h4>
        <p>Amount: {props.amount}</p>
        <p>Calories: {props.calories}</p>
    </div>
    </div>
   
  );
};

export default Card;
