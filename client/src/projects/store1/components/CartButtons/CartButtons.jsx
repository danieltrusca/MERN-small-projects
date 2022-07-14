import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.css";

const CartButtons = () => {
  const closeSidebar = () => {};
  const loginWithRedirect = () => {};
  const myUser = true;
  return (
    <div className="cart-btn-wrapper">
      <Link to="/store/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">2</span>
        </span>
      </Link>
      {myUser ? (
        <button type="button" className="auth-btn" onClick={() => {}}>
          Logout <FaUserMinus />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </div>
  );
};

export default CartButtons;
