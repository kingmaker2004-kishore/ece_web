import React from 'react';
import ProductDetails from '../components/ProductDetails';

const ProductPage = ({ products, addToCart }) => {
  return (
    <div>
      <ProductDetails products={products} addToCart={addToCart} />
    </div>
  );
};

export default ProductPage;
