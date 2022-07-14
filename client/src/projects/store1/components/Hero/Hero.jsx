import React from "react";

import { Link } from "react-router-dom";
import heroBcg from "../../assets/hero-bcg.jpeg";
import heroBcg2 from "../../assets/hero-bcg-2.jpeg";
import "./styles.css";

const Hero = () => {
  return (
    <div className="app__store__home-hero-wrapper section-center">
      <article>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link to="/store/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="app__store__home-hero-img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </div>
  );
};

export default Hero;
