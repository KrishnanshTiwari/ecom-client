import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useAuth } from './AuthContext';
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
import AddProduct from './screens/AddProduct';
import ProductDashboard from './screens/ProductDashboard';
import EditSeller from './screens/EditSeller';
import Checkout from './screens/Checkout';
import SellerOrder from './screens/SellerOrder';
import OrderPage from './screens/OrderPage' ;

function App() {
  const { isLoggedIn, isSeller } = useAuth();

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-detail/:id" element={<Productdetail />} />

          {isLoggedIn && (
            <>
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-page" element={<OrderPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/become-seller" element={<BecomeSeller />} />
            </>
          )}

          {!isLoggedIn && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}

          {isSeller && (
            <>
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/product-dashboard" element={<ProductDashboard />} />
              <Route path="/edit-seller" element={<EditSeller />} />
              <Route path="/seller-order" element={<SellerOrder />} />
            </>
          )}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
