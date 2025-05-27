import { map } from "../../assets/images";
import React from "react";

import { GoArrowRight } from "react-icons/go";
const AddressBanner = () => {
  return (
    <div className="bg-brand-50 py-10">
      <div className="max-w-pc mx-auto w-full 2xl:px-0 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={map} />
            <p className="font-medium text-[28px]">
              Xem hệ thống 88 cửa hàng trên toàn quốc
            </p>
          </div>
          <div>
            <button className="flex items-center gap-2 rounded-full px-6 py-3 bg-white text-2xl font-semibold text-brand-blue-600">
              Xem ngay <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddressBanner;
