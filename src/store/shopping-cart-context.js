import { createContext, useState } from "react";
import { PRODUCTS_DATA } from "../products-data";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

export const CartContextProvider = ({ children }) => {

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
      };
    });
  }

  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: addItemToCartHandler,
    updateItemQuantity: updateCartItemQuantityHandler,
  }

  return <CartContext.Provider value={ctxValue}>
    {children}
  </CartContext.Provider>
};