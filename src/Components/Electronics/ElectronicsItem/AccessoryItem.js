import classes from './ElectronicsItem.module.css';
import { useContext } from 'react';
import AccessoryItemForm from './AccessoryItemForm';
import CartContext from '../../../store/cart-context';


const AccessoryItem = (props) => {

    const cartCtx = useContext(CartContext);

    const price = `${props.price.toFixed(0)} HUF`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
        });
  };

    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <AccessoryItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default AccessoryItem;