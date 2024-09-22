import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10000,
      description: 'Description of Product 1',
      image: '/images/image1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 50,
      description: 'Description of Product 2',
      image: '/images/image2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 500,
      description: 'Description of Product 3',
      image: '/images/image3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 5000,
      description: 'Description of Product 4',
      image: '/images/image4.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 10,
      description: 'Description of Product 5',
      image: '/images/image5.jpg',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 100,
      description: 'Description of Product 6',
      image: '/images/image6.jpg',
    },
    {
      id: 7,
      name: 'Product 7',
      price: 10000,
      description: 'Description of Product 7',
      image: '/images/image7.jpg',
    },
    {
      id: 8,
      name: 'Product 8',
      price: 0,
      description: 'Description of Product 8',
      image: '/images/image8.jpg',
    },
    {
      id: 9,
      name: 'Product 9',
      price: 1000,
      description: 'Description of Product 9',
      image: '/images/image9.jpg',
    },
    {
      id: 10,
      name: 'Product 10',
      price: 1,
      description: 'Description of Product 10',
      image: '/images/image10.jpg',
    },
    
  ];

  // Add a product to the cart
  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exists, quantity: exists.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove a product completely from the cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Decrease the quantity of a product in the cart
  const decreaseQuantity = (id) => {
    const exists = cartItems.find((item) => item.id === id);
    if (exists.quantity === 1) {
      removeFromCart(id); // If quantity is 1, remove the item
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...exists, quantity: exists.quantity - 1 } : item
        )
      );
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage products={products} addToCart={addToCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductPage products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
