import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home_Page_card from './components/Home_Page_card';
import FoodItems from './Page/FoodItems';
import SouthIndianFoodItems from './Page/SouthIndianFoodItems';
import ChineseFoodItems from './Page/ChineseFoodItems';
import PunjabiFoodItems from './Page/PunjabiFoodItems';
import PizzaFoodItems from './Page/PizzaFoodItems';
import Cart from './Page/Cart';
import TotalBill from './components/TotalBill';
import { CartProvider } from './context/CartContext';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartProvider>
      <Router>
        <div>
          <NavBar title="PSK" />
          <Routes>
            <Route path="/" element={<Home_Page_card />} />
            <Route path="/title" element={<Home_Page_card />} />
            <Route path="/south-indian" element={<SouthIndianFoodItems />} />
            <Route path="/chinese" element={<ChineseFoodItems />} />
            <Route path="/punjabi" element={<PunjabiFoodItems />} />
            <Route path="/pizza" element={<PizzaFoodItems />} />
            <Route path="/food-items" element={<FoodItems />} />
            <Route path="/total-bill" element={<TotalBill/>} />
            <Route path="/cart" element={<Cart cart={cart} />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
