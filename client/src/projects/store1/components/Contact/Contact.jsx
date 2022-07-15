import React from "react";

import "./styles.css";

const Contact = () => {
  return (
    <div className="app__store__home__contact-wrapper section-center">
      <h3>Join our newsletter and get 20% off</h3>
      <div className="app__store__home__contact-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <form className="app__store__home__contact-form">
          <input
            type="email"
            className="app__store__home__contact-form-input"
            placeholder="enter email"
          />
          <button type="submit" className="app__store__home__contact-submit-btn">
            subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
