import { Cart } from "../Cart";
import { forwardRef, useRef, useImperativeHandle } from "react";
import {createPortal} from "react-dom";
import classes from "./CartModal.module.css";
export const CartModal = forwardRef (({ items, actions, openCart }, ref ) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal (
    <dialog className={classes.modal} ref={dialog}>
      <h2>Your Cart</h2>
      <Cart cartItems={items} />
      <form method="dialog" >
        {actions}
      </form>
    </dialog>, document.getElementById('modal')
  );
})