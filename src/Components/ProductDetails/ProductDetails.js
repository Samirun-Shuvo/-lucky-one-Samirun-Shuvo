import React, { useState } from 'react';
import './ProductDetails.css'


const ProductDetails = (props) => {
  const {id, name, Price, imgUrl} = props.product
  const addToCartHandler = props.handelAddProduct;

  return (
    <div className='product-content'>
      <div className='content'>
        <div className='img'>
        <img src={imgUrl} alt=""/>
        </div>
        <h5>{name}</h5>
        <p>TK.{Price}</p>
      </div>

      <button onClick={()=> addToCartHandler(props.product)} type="">Add To Cart</button>
    </div>
  );
};

export default ProductDetails;