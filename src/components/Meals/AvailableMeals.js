import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Vegetable Biryani",
    description: "Fragrant rice with mixed veggies & spices",
    price: 120,
  },
  {
    id: "m2",
    name: "Paneer Tikka Masala",
    description: "Paneer in creamy tomato gravy",
    price: 120,
  },
  {
    id: "m3",
    name: "Aloo Gobi",
    description: "Potato & cauliflower curry with spices",
    price: 100,
  },
  {
    id: "m4",
    name: "Palak Paneer",
    description: "Creamy spinach curry with paneer",
    price: 130,
  },
  {
    id: "m5",
    name: "Chana Masala",
    description: "Spicy chickpea curry with tomatoes",
    price: 80,
  },
  {
    id: "m6",
    name: "Dal Tadka",
    description: "Yellow lentils with spices & herbs",
    price: 70,
  },
];


const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
