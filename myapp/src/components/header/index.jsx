import { Link, NavLink } from "react-router";
import "./header.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { MdShoppingCart as CartIcon } from "react-icons/md";
const Header = () => {
  const { cartSize } = useContext(CartContext); // step 3: useContext to access context value
  return (
    <header className="header">
      <h1 className="header__title text">
        <Link to="/">My App</Link>
      </h1>
      <nav className="header__nav">
        <NavLink to="/cart" className="header__cart">
          <CartIcon className="header__cart-icon" />
          {cartSize !== 0 && (
            <span className="header__cart-badge">
              {cartSize > 99 ? "99+" : cartSize}
            </span>
          )}
        </NavLink>
        <NavLink to="/about" className="header__link">
          About
        </NavLink>
        <NavLink to="/contact" className="header__link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
