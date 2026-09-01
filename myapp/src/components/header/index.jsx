import { Link, NavLink } from "react-router";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title text">
        <Link to="/">My App</Link>
      </h1>
      <nav className="header__nav">
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
