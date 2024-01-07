import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Product from './screens/Product';
import Navbar from './components/Navbar';
import Footer from './components/footer';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/product',
    element: <Product />,
  }
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