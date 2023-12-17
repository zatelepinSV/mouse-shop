import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-context";
import classes from "./Product.module.css";

export const Product = (
  {
    id,
    image,
    title,
    price,
    description,
  }
) => {

  const { addItemToCart } = useContext(CartContext);

  return (
    <article className={classes.product}>
      <img src={image} alt={title}/>
      <div className={classes.productContent}>
        <div>
          <h3>{title}</h3>
          <p className={classes.productPrice}>${price}</p>
          <p>{description}</p>
        </div>
        <p className={classes.productActions}>
          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
};