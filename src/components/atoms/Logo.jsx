import { logoHeader } from "../../assets/images";
import React from "react";


const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logoHeader} alt="SUNFIL" className=" w-auto" />
    </div>
  );
};
export default Logo;
