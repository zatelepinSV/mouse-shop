import { Header } from "./components/Header";
import { Shop } from "./components/Shop";
import { useState } from "react";
import { PRODUCTS_DATA } from "./products-data";

const App = () => {

  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  const addItemToCartHandler = (id) => {
    setShoppingCart(prevState => {
      const updatedItems = [...prevState.items];
      const existingCartItemIndex = updatedItems.findIndex(item => item.id === id);
      const existingItem = updatedItems[existingCartItemIndex];

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        }
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = PRODUCTS_DATA.find(product => product.id === id);
        updatedItems.push({
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          quantity: 1,
        });
      }
      return {
        items: updatedItems,
      };
    });
  }

  const updateCartItemQuantityHandler = (id, amount) => {
    console.log(`id = ${id}, amount = ${amount}`);
    setShoppingCart((prevState) => {
      const updateItems = [...prevState.items];
      const updateItemIndex = updateItems.findIndex(item => item.id === id);
      const updateItem = {
        ...updateItems[updateItemIndex],
      }
      updateItem.quantity += amount;
      if (updateItem.quantity <= 0) {
        updateItems.splice(updateItemIndex, 1);
      } else {
        updateItems[updateItemIndex] = updateItem;
      }

      return {
        items: updateItems,
      }
    })
  }

  return (
    <>
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={updateCartItemQuantityHandler}
      />
      <Shop onAddProduct={addItemToCartHandler} />
    </>
  );
};

export default App;
