import classes from "./Cart.module.css";

export const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div >
      {cartItems.length === 0 && <p>No cartItems in cart!</p>}
      {cartItems.length > 0 && (
        <ul className={classes.cartItems}>
          {cartItems.map(item => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (<li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className="cartItemActions">
                <button>
                  -
                </button>
                <span>{item.quantity}</span>
                <button>
                  +
                </button>
              </div>
            </li>
            )})
          }
        </ul>
      )}
      <p>Total: {formattedTotalPrice}</p>
    </div>
  );
};