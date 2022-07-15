import React from "react";

import { Link } from "react-router-dom";
import "./styles.css";

const PageHero = ({ title, product }) => {
  return (
    <div className="app__store_page-hero section-center">
      <h3>
        <Link to="/store">Home </Link>
        {product && <Link to="/store/products">/ Products</Link>}/ {title}
      </h3>
    </div>
  );
};

export default PageHero;
