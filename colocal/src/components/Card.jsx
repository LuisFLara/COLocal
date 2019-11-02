import React from 'react';

const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>
      <div className="card-body">
        <img src={props.img} className="card-img-top" alt="img1"/>
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
