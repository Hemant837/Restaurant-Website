import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  // const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    // setTotalAmount((prevTotalAmount) => prevTotalAmount + item.price);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartItems,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
