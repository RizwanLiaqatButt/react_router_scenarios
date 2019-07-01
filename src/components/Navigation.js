import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <NavLink to="/" exact activeStyle={{ color: "green" }}>
        Home
      </NavLink>
      <NavLink to="/about" exact activeStyle={{ color: "green" }}>
        About
      </NavLink>
      <NavLink to="/contact" exact activeStyle={{ color: "green" }}>
        Contact
      </NavLink>
    </div>
  );
};
