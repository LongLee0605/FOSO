import React from "react";
import { iconCart, iconUserCircle } from "../../assets/icons";
import { lgVN } from "../../assets/images";

const UserActions = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className=" items-center gap-2 hover:bg-brand-50 rounded-full px-2 py-1 2xl:flex lg:flex hidden">
        <div className="w-9 h-9">
          <img src={lgVN} />
        </div>
        <span className="font-medium ">VI</span>
      </div>
      <div className="flex items-center hover:bg-brand-50 rounded-full px-2 py-1 mr-0">
        <div className="flex items-center gap-2 relative">
          <div className="w-9 h-9">
            {" "}
            <img src={iconCart} />
          </div>
          <div className="font-medium 2xl:block lg:block hidden whitespace-nowrap">
            Giỏ hàng
          </div>
          <span className="absolute -top-3 left-5 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            0
          </span>
        </div>
      </div>
      <div className="2xl:flex lg:flex hidden  items-center gap-2 hover:bg-brand-50 rounded-full px-2 py-1">
        <div className="w-9 h-9">
          <img src={iconUserCircle} />
        </div>
        <div className="font-medium whitespace-nowrap">Tài khoản</div>
      </div>
    </div>
  );
};
export default UserActions;
