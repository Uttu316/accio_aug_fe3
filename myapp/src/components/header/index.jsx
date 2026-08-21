import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">My App</h1>
      <nav className="header__nav">
        <a href="#" className="header__link">
          About
        </a>
        <a href="#" className="header__link">
          Contact
        </a>
      </nav>
    </header>
  );
};
export default Header;
