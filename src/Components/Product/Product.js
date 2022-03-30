import React, { useState } from 'react';
import productsData from '../../Utils/FakeData/FakeData'
import ProductDetails from './../ProductDetails/ProductDetails';
import './Product.css'
import Cart from './../Cart/Cart';

const Product = () => {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);

  const handelAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  const ChoseForMe = () => {
    const randomItem = cart[Math.floor(Math.random() * cart.length)];

    setCart(randomItem)
  }

  const ClearCart = () => {
    setCart([]);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
          <div className='productContainer'>
            {
              products.map(product => <ProductDetails handelAddProduct={handelAddProduct} key={product.id} product={product}></ProductDetails>)
            }
          </div>
        </div>
        <div className='col-md-3'>
          <aside className="aside">
            <div className='cartContainer'>
              <h4>This is your cart</h4>
              <small className='mb-4'>You chose {cart.length} products</small>

              <Cart cart={cart}></Cart>
              <button className='choseBtn mt-4' onClick={ChoseForMe} type="">Chose 1 for me</button>
              <button className='clearBtn mt-4' onClick={ClearCart} type="">Chose again</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Product;