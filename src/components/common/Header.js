import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav">
          <ul className="nav-bar">
            <li><i className="fa-sharp fa-solid fa-magnifying-glass"></i>Search</li>
            <li><i className="fa-solid fa-tags"></i>Offers</li>
            <li><i className="fa-solid fa-circle-info"></i>Help</li>
            <li><i className="fa-solid fa-user"></i>Sign In</li>
            <li><i className="fa-solid fa-cart-shopping"></i>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
