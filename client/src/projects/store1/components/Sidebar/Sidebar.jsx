import React from "react";

import { Link } from "react-router-dom";
import { links } from "../../utils/constants";
import logo from "../../assets/logo_comfort.svg";

import { FaTimes } from "react-icons/fa";
import CartButtons from "../CartButtons/CartButtons";

import "./styles.css";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const myUser = true;
  const closeSidebar = () => {
    setOpenSidebar(false);
  };
  return (
    <div className="sidebar__container">
      <aside className={`${openSidebar ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="coding addict" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>

        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/store/checkout" onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons  />
      </aside>
    </div>
  );
};

export default Sidebar;
