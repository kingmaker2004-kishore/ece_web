import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, addToCart, removeFromCart, decreaseQuantity }) => {
  return (
    <div className="cart-page">
      <Cart
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  );
};

export default CartPage;
