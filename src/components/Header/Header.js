import { CartModal } from "../CartModal";
import { useRef } from "react";
import classes from "./Header.module.css";

export const Header = ({cart}) => {
  const modal = useRef(null);
  const quantity = cart.items.length;
  let modalActions = <button>Close</button>;

  if (quantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }
  const cartOpenHandler = () => {
    modal.current.open();
    console.log(modal)
  }

  return (
    <>
      <CartModal ref={modal} items={cart.items} actions={modalActions} openCart={cartOpenHandler}/>
      <header className={classes.mainHeader}>
        <div className={classes.mainTitle}>
          <img src="logo.png" alt="Logitech logo"/>
          <h1>Logitech Mouse</h1>
        </div>
        <p>
          <button onClick={cartOpenHandler}>Cart ({quantity})</button>
        </p>
      </header>
    </>
  );
};