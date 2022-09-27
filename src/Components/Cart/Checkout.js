import classes from './Checkout.module.css';
import {useState, useRef} from 'react';

const isEmpty = (value) => value.trim() === '';

const Checkout = (props) => {

  const [fromInputsValid, setFromInputsValid] = useState({
      name: true,
      street: true,
      city: true,
      postalCode: true,
    })

    const nameInput = useRef();
    const streetInput = useRef();
    const cityInput = useRef();
    const postalCodeInput = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    setFromInputsValid({
      name: !isEmpty(nameInput.current.value),
      street: !isEmpty(streetInput.current.value),
      city: !isEmpty(cityInput.current.value),
      postalCode: !isEmpty(postalCodeInput.current.value),
    });

    const fromIsValid = fromInputsValid.name 
        && fromInputsValid.street 
        && fromInputsValid.city 
        && fromInputsValid.postalCode

        if(!fromIsValid) {
          return;
        };

  };

  const nameCss = `${classes.actions} ${fromInputsValid.name ? '' : classes.invalid}`;
  const streetCss = `${classes.actions} ${fromInputsValid.street ? '' : classes.invalid}`;
  const cityCss = `${classes.actions} ${fromInputsValid.city ? '' : classes.invalid}`;
  const postalCodeCss = `${classes.actions} ${fromInputsValid.postalCode ? '' : classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameCss}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInput} />
      </div>
      <div className={streetCss}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInput}/>
      </div>
      <div className={postalCodeCss}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInput}/>
      </div>
      <div className={cityCss}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInput}/>
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
