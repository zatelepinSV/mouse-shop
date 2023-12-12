import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { useState } from "react";
import { PRODUCTS_DATA } from "./products-data";

const App = () => {

  const [shoppingCart, setShoppingCart] = useState({
    items: [],
    ttt: ['sss'],
  });

  const addItemToCartHandler = (id) => {
    setShoppingCart(prevState => {
      const updatedItems = [...prevState.items];
      const product = PRODUCTS_DATA.find(product => product.id === id);
      updatedItems.push({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        quantity: 1,
      });
      return {
        items: updatedItems
      };
    });
  }


  return (
    <>
      <Header cart={shoppingCart} />
      <Shop onAddProduct={addItemToCartHandler} />
    </>
  );
};

export default App;
