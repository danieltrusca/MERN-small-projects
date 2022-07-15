import React from "react";

import { services } from "../../utils/constants";
import "./styles.css";

const Services = () => {
  return (
    <div className="app__store__home__services-wrapper section-center">
      <article className="app__store__home__services-header">
        <h3>
          custom furniture <br /> built only for you
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </article>
      <div className="app__store__home__services-services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article className="app__store__home__services-service" key={id}>
              <span className="app__store__home__services-icon">{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
