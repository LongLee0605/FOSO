import { logoHeader } from "../../assets/images";
import React from "react";


const Logo = () => {
  return (
    <div className="flex items-center 2xl:justify-start lg:justify-start justify-center">
      <img src={logoHeader} alt="SUNFIL" className=" 2xl:w-full lg:w-full w-2/3" />
    </div>
  );
};
export default Logo;
