import React, { useContext, useState } from 'react';
import stars from '../assets/rating_starts.png';
import {assets} from "../assets/assets";
import { StoreContext } from '../Context/StoreContext';
import '../styles/RentalItem.css';

function RentalItem({ id, name, price, description, image }) {

  const {cartItems, addToCart,url} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={`${url}/images/`+image} alt='' />
        {
          !cartItems[id] ?<button onClick={()=> addToCart(id)}>Enquire</button> :
       
          <button onClick={()=> addToCart(id)}>Check Cart</button> 
            
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={stars} alt='Not Avail' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>Rs.{price}</p>
      </div>
    </div>
  );
}

export default RentalItem;

