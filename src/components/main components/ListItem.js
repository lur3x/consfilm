import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React from 'react';

export default function ListItem({ image, name, rating, id }) {
  return (
    <Link to={`/singleshow/${id}`} className='list-item'>
      <img src={image} alt={name} className='list-item__image' />
      <div className='list-item__info text-center'>
        <h4 className='info__name'>{name}</h4>
        <h5 className='info__rating'>{rating}</h5>
      </div>
    </Link>
  );
}
