import { useRef, useContext } from "react";
import { CartModal } from "../CartModal";
import { CartContext } from "../../store/shopping-cart-context";
import classes from "./Header.module.css";

export const Header = ({ cart }) => {
  const modal = useRef(null);
  const { items } = useContext(CartContext);

  const quantity = items.reduce((acc, item) =>  acc + item.quantity, 0);
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
  }

  return (
    <>
      <CartModal
        ref={modal}
        actions={modalActions}
      />
      <header className={classes.mainHeader}>
        <div className={classes.mainTitle}>
          <img src="logo.png" alt="Logitech logo"/>
          <h1>Logitech Mouse</h1>
        </div>
        <p>
          <button onClick={cartOpenHandler}>Cart <sup className={classes.quantity}>{quantity > 0 ? quantity : ''}</sup></button>
        </p>
      </header>
    </>
  );
};