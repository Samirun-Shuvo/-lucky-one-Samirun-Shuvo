import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const cart = props.cart

  return (
    <div className='cart'>
      {
      cart.map(item => <li> <img width='50px' src={item.imgUrl} alt=""/> {item.name}</li>)
      }
    </div>
  );
};

export default Cart;