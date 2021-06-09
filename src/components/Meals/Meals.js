import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvialableMeals";
import { Fragment } from "react";
import AvialableMeals from "./AvialableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvialableMeals></AvialableMeals>
    </Fragment>
  );
};

export default Meals;
