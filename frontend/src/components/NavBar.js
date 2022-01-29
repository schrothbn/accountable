import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/user">User</NavLink>
      <NavLink to="/create">Create Account</NavLink>
    </nav>
  );
};
