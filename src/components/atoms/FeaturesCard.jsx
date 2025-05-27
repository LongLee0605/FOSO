import React from "react";
import {
  iconMoney,
  iconSupport,
  iconDelivery,
  iconPackage,
} from "../../assets/icons";

const FeaturesCard = () => {
  const features = [
    {
      id: 1,
      icon: iconMoney,
      title: "Miễn phí vận chuyển",
      description: "Với hóa đơn từ 1 triệu",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      icon: iconSupport,
      title: "Hỗ trợ 24/7",
      description:
        "Đội ngũ CSKH tận tâm sẵn sàng lắng nghe và phục vụ bạn tận tâm",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      icon: iconDelivery,
      title: "Giao hàng nhanh 2h",
      description: "Sản phẩm được bán trong nội bộ thành phố HCM",
      bgColor: "bg-blue-50",
    },
    {
      id: 4,
      icon: iconPackage,
      title: "30 ngày đổi trả",
      description:
        "Sản phẩm lỗi được đổi mới, sản phẩm lỗi từ NSX hoặc đơn vị vận chuyển",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <div className="max-w-pc mx-auto mt-5 pb-0 pt-5 2xl:px-0 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 bg-white transition-colors duration-200 shadow-sm"
          >
            <img src={feature.icon} />

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCard;
