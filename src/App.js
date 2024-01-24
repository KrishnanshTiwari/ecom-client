import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Product from './screens/Product';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import PageNotFound from './screens/404';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Cart from './screens/Cart';
import Productdetail from './screens/Productdetail';
import Profile from './screens/Profile';
import BecomeSeller from './screens/BecomeSeller';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetail" element={<Productdetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/becomeSeller" element={<BecomeSeller/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
