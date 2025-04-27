import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Upload from './components/Upload';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import MyCard from './components/MyCard';
import EditProduct from './components/EditProduct'; 
import Vegetables from './components/Vegetables';
import Hardware from './components/Hardware';
import Fertilizer from './components/Fertilizer';
import Crops from './components/Crops';
import Logout from './components/Logout';
import Buy from './components/Buy';
import Buy2 from './components/Buy2'; // Import Buy component
import Profile from './components/Profile'; // Import Profile component
import './App.css'; 
import DynamicForm from './components/DynamicForm';
import DisplayData from './components/DisplayData';
import Payment from './components/Payment';
import Help from './components/Help'
import UserType from './components/UserType';
import Home1 from './components/HOME1';

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <Content 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
      />
    </Router>
  );
};

const Content = ({ cartItems, setCartItems }) => {
  const location = useLocation();

  // Define the routes where the "Go to Home" button should be shown
  const showButtonRoutes = ['/cart', '/mycard', '/profile', '/buy', '/buy2', '/form'];

  // Check if the current path matches any of the defined routes
  const shouldShowButton = showButtonRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mycard" element={<MyCard />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/vegetables" element={<Vegetables cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/hardware" element={<Hardware cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/fertilizers" element={<Fertilizer cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/crops" element={<Crops cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/buy/:productId" element={<Buy />} />
        <Route path="/buy2/:productId" element={<Buy2 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/form" element={<DynamicForm />} />
        <Route path="/data" element={<DisplayData />} />
        <Route path="/buy" element={<Payment />} />
        <Route path="/help" element={<Help />} />
        <Route path="/use" element={<UserType />} />
        <Route path="/home1" element={<Home1 />} />
      </Routes>

      {/* Show "Go to Home" button only on specified routes */}
      {shouldShowButton && (
        <Link to="/home" className="home-button">
          Go to Home
        </Link>
      )}
    </>
  );
};


export default App;
