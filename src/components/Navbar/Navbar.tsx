import React from "react";
import BooksList from "../BookList/BookList";
import SearchInput from "../SearchInput/SearchInput";
import { NavbarContainer } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <SearchInput />
      <BooksList />
    </NavbarContainer>
  );
};

export default Navbar;
