import { Fragment } from "react";
import reactmeals from "../../assets/reactmeals.jpeg";
import classes from "./Header.module.css";
import HeaderCartBuitton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBuitton onClick={props.onShowCart}></HeaderCartBuitton>
      </header>
      <div className={classes["main-image"]}>
        <img src={reactmeals} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
