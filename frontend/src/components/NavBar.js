import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg p-3">
      <NavLink to="/" className="navbar-brand">
        Accountable
      </NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <NavLink to="/" className="nav-link">
              Accounts
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/user" className="nav-link">
              User
            </NavLink>
          </li>

          <li>
            <NavLink to="/create" className="nav-link">
              Create Account
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
