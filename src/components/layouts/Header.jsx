import CategoryMenu from "../atoms/CategoryMenu";
import TopBanner from "../atoms/TopBanner";
import Navbar from "../molecules/Navbar";
import React from "react";


const Header = () => {
  return (
    <header className="w-full">
      <TopBanner />
      <Navbar />
      <CategoryMenu />
    </header>
  );
};

export default Header;
