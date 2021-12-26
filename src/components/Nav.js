import React from "react";
import { Link } from "gatsby";
import { NavWrapper } from "../elements";

export const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <img src="/logo.svg" alt="logo" />
      </Link>
    </NavWrapper>
  );
};
