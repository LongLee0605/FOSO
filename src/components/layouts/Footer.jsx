import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
              </h3>

              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-medium">Tax code:</span> 0305094228
                </p>
                <p>
                  <span className="font-medium">Address:</span> 13 Nghia Thuc,
                  Ward 05, District 5, Ho Chi Minh City, Viet Nam
                </p>
                <p>
                  <span className="font-medium">Phone number:</span> 0283 760
                  7607
                </p>
                <p>
                  <span className="font-medium">Opening hour:</span> 09:00 -
                  22:00 from Mon - Fri
                </p>
              </div>

              {/* Certification Badge */}
              <div className="mt-6">
                <div className="inline-flex items-center bg-blue-600 text-white px-3 py-2 rounded-lg">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-xs">
                    <div className="font-bold">ĐÃ THÔNG BÁO</div>
                    <div>BỘ CÔNG THƯƠNG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sitemap */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Sitemap
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Article
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Cookie policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Delivery policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Download App
            </h4>
            <div className="space-y-3">
              {/* Google Play Store */}
              <a
                href="#"
                className="inline-block w-full max-w-[200px] bg-black text-white rounded-lg p-3 hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full text-white"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">
                      Google Play Store
                    </div>
                  </div>
                </div>
              </a>

              {/* Apple App Store */}
              <a
                href="#"
                className="inline-block w-full max-w-[200px] bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-full h-full text-white"
                      fill="currentColor"
                    >
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs">Download from</div>
                    <div className="text-sm font-semibold">Apple App Store</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Language Selector */}
            <div className="mt-6">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">★</span>
                </div>
                <span className="text-sm font-medium text-gray-700">VI</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
