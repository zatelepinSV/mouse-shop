import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context";
import classes from "./Cart.module.css";

export const Cart = () => {
  const { items, updateItemQuantity } = useContext(CartContext);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // let price = 0;
  // cartItems.forEach(item => {
  //   const intPrice = item.price * item.quantity;
  //   return price += intPrice;
  // });
  // console.log(Number(price.toFixed(2)))
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div >
      {items.length === 0 && <p>No cartItems in cart!</p>}
      {items.length > 0 && (
        <ul className={classes.cartItems}>
          {items.map(item => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (<li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className={classes.cartItemActions}>
                <button onClick={() => updateItemQuantity(item.id, -1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateItemQuantity(item.id, 1)}>
                  +
                </button>
              </div>
            </li>
            )})
          }
        </ul>
      )}
      <p className={classes.cartTotalPrice}>Total: {formattedTotalPrice}</p>
    </div>
  );
};