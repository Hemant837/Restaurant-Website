import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    setCartItems([...items, item]);
    setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price);

    const updatedItemsArray = [...items];
    const existingItemIndex = updatedItemsArray.find(
      (existingItem) => existingItem.id === item.id
    );

    existingItemIndex
      ? (existingItemIndex.quantity += Number(item.quantity))
      : updatedItemsArray.push(item);

    setCartItems(updatedItemsArray);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log(cartContext)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
