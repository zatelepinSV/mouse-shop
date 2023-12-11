import { PRODUCTS_DATA } from "../../products-data";
import { Product } from "../Product";
import classes from "./Shop.module.css";
export const Shop = () => {

  return (
    <section className={classes.shop}>
      <h2>Super mouse For Everyone</h2>

      <ul className={classes.products}>
        {PRODUCTS_DATA.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
};