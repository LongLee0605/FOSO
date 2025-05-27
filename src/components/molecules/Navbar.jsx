import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";
import UserActions from "../atoms/UserActions";
import React from "react";



const Navbar = () => {
  return (
    <div className="w-full max-w-pc mx-auto 2xl:px-0 px-4">
      <div className="flex items-center justify-between py-4">
        <Logo />
        <SearchBar />
        <UserActions />
      </div>
    </div>
  );
};
export default Navbar;
