import React, { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Accessory from './Components/Electronics/Accessory';
import Auth from './Components/Layout/Auth';
import { useSelector } from 'react-redux';
import Header from './Components/Layout/Header';
import UserProfile from './Components/Layout/UserProfile';
import CartProvider from './store/CartProvider';
import Footer from './Components/Footer/Footer';

function App() {

  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <CartProvider>
        {cartIsShow && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        {!isAuth && <Auth/>}
        {isAuth && <UserProfile/>}
        <main margin="100px">
          <Accessory/>
        </main>
        <Footer/>        
    </CartProvider>
  );
}

export default App;
