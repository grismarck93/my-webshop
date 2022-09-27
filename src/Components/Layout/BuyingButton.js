import {  Button, } from '@mui/material';
import classes from "./BuyingButton.module.css"
import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';



const BuyingButton = (props) => {

  const [ButtonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((cartNumber, item) => {
    return cartNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Button sx={{marginLeft: 'auto'}}variant="contained" onClick={props.onClick}>
        <span>My Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </Button>
  )
}

export default BuyingButton;