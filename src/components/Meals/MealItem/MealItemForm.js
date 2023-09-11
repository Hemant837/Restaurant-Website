import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (event) => {
    event.preventDefault();

    cartCtx.items.push(props.item)
    console.log(cartCtx.items)
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addToCartHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
