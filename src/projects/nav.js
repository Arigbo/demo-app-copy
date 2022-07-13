import React from "react";
import { NavLink } from "react-router-dom";

const NavComp = () => {
  return (
    <div>
      <div className="header">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dropple">Dropple App</NavLink>
            </li>
            <li>
              <NavLink to="/driver">Become a driver</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/login">login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavComp;
