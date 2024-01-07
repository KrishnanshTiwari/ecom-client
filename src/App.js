import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Product from './screens/Product';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import PageNotFound from './screens/404';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Cart from './screens/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/signup',
    element: <Signup></Signup>,
  },
  {
    path: '/cart',
    element: <Cart></Cart>,
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
]);


function App() {
  return (
    <div className="App">
            <Navbar />
      <RouterProvider router={router} />
      <Footer />

    </div>
  );
}

export default App;