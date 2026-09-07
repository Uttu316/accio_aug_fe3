import { Link, NavLink, useNavigate } from "react-router";
import "./header.css";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import {
  MdShoppingCart as CartIcon,
  MdAccountCircle as ProfileIcon,
  MdLogout as LogoutIcon,
} from "react-icons/md";

const Header = () => {
  const { cartSize, clearCart } = useContext(CartContext); // step 3: useContext to access context value
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth-user");
    setMenuOpen(false);
    navigate("/login");
    clearCart();
  };

  const isLoggedIn = localStorage.getItem("auth-user");

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
        {isLoggedIn && (
          <NavLink to="/cart" className="header__cart">
            <CartIcon className="header__cart-icon" />
            {cartSize !== 0 && (
              <span className="header__cart-badge">
                {cartSize > 99 ? "99+" : cartSize}
              </span>
            )}
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to="/login" className="header__link">
            Login
          </NavLink>
        )}
        {isLoggedIn && (
          <div className="header__profile" ref={menuRef}>
            <button
              type="button"
              className="header__profile-btn"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-label="Profile menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <ProfileIcon />
            </button>

            {menuOpen && (
              <div className="header__menu" role="menu">
                <button
                  type="button"
                  className="header__menu-item"
                  role="menuitem"
                  onClick={handleLogout}
                >
                  <LogoutIcon className="header__menu-icon" />
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;
