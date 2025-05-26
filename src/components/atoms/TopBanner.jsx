import React from "react";
import { iconPhone, iconSale, iconSmartPhone } from "../../assets/icons";

const TopBanner = () => {
  return (
    <div className="bg-gradient-header text-white text-sm py-1 ">
      <div className="max-w-pc w-full mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <img src={iconSale} />
          </div>
          <div className="text-xs">
            Nhập mã{" "}
            <span className="text-brand-yellow-primary font-bold text-sm">
              NEWBIE
            </span>{" "}
            giảm ngay 10% cho lần đầu mua hàng.
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div>
              <img src={iconPhone} />
            </div>
            <div className="text-xs flex items-center gap-1">
              Hotline:
              <span className="text-brand-yellow-primary text-sm">
                0283 780 7607
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <img src={iconSmartPhone} />
            </div>
            <div className="text-xs">Tải ứng dụng</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBanner;
