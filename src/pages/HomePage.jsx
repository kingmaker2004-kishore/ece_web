import React from 'react';
import ProductList from '../components/ProductList';

const products = [
  { id: 1, name: 'Product 1', price: 100, description: 'Description of Product 1', image: '/path/to/image1.jpg' },
  { id: 2, name: 'Product 2', price: 150, description: 'Description of Product 2', image: '/path/to/image2.jpg' },
  { id: 3, name: 'Product 3', price: 100, description: 'Description of Product 3', image: '/path/to/image1.jpg' },
  { id: 4, name: 'Product 4', price: 150, description: 'Description of Product 4', image: '/path/to/image2.jpg' },
  { id: 5, name: 'Product 5', price: 100, description: 'Description of Product 5', image: '/path/to/image1.jpg' },
  { id: 6, name: 'Product 6', price: 150, description: 'Description of Product 6', image: '/path/to/image2.jpg' },
  { id: 7, name: 'Product 7', price: 100, description: 'Description of Product 7', image: '/path/to/image1.jpg' },
  { id: 8, name: 'Product 8', price: 150, description: 'Description of Product 8', image: '/path/to/image2.jpg' },
  { id: 9, name: 'Product 9', price: 100, description: 'Description of Product 9', image: '/path/to/image1.jpg' },
  { id: 10, name: 'Product 10', price: 150, description: 'Description of Product 10', image: '/path/to/image2.jpg' },
];

const HomePage = ({ addToCart }) => {
  return (
    <div className="home-page">
      <h1>Welcome to Our Store</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;
