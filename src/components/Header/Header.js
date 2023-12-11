import classes from "./Header.module.css";
export const Header = () => {

  return (
    <header className={classes.mainHeader}>
      <div className={classes.mainTitle}>
        <img src="logo.png" alt="Logitech logo"/>
        <h1>Logitech Mouse</h1>
      </div>
      <p>
        <button>Cart</button>
      </p>
    </header>
  );
};