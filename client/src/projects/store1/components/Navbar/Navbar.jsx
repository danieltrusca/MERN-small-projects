import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../utils/constants";
import logo from "../../assets/logo_comfort.svg";
import { FaBars } from "react-icons/fa";
import CartButtons from "../CartButtons/CartButtons";
import "./styles.css";

const Navbar = ({ setOpenSidebar }) => {
  const openSidebar = () => setOpenSidebar(true);
  const myUser = true;
  return (
    <nav className="app__store__navbar-nav">
      <div className="app__store__navbar-center">
        <div className="app__store__navbar-header">
          <Link to="/store">
            <img src={logo} alt="comfy sloth" />
          </Link>
          <button
            type="button"
            className="app__store__nav-toggle"
            onClick={openSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className="app__store__nav-links">
          {links?.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/store/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <div className="cart-btn-wrapper-container">
          <CartButtons />
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
