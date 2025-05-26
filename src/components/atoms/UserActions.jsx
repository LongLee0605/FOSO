import React from "react";
import { iconCart, iconUserCircle } from "../../assets/icons";
import { lgVN } from "../../assets/images";

const UserActions = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center gap-2">
        <span className="text-red-500 text-xl">
          <img src={lgVN} />
        </span>
        <span className="font-medium">VI</span>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-2 relative">
          <img src={iconCart} />
          <div className="font-medium">Giỏ hàng</div>
          <span className="absolute -top-3 left-5 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            0
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="">
          <img src={iconUserCircle} />
        </span>
        <div className="font-medium ">Tài khoản</div>
      </div>
    </div>
  );
};
export default UserActions;
