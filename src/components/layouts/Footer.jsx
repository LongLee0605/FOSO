import React from "react";
import { bct, footer, lgVN } from "../../assets/images";

const HoverAnimatedLink = ({ children, isActive = false, className = "" }) => {
  return (
    <div className={`relative inline-block group cursor-pointer ${className}`}>
      <span
        className={`relative z-20 block transition-all duration-300 ease-in-out group-hover:translate-x-4 ${
          isActive
            ? "text-text-primary font-medium"
            : "text-secondary group-hover:text-text-primary group-hover:font-semibold"
        }`}
      >
        {children}
      </span>
      <div
        className={`absolute left-0 top-1/2 h-0.5 transform -translate-y-1/2 transition-all duration-400 ease-out ${
          isActive ? "w-6 bg-black" : "w-0 bg-gray-600 group-hover:w-3"
        }`}
      />
    </div>
  );
};

const Footer = () => {
  const sitemapItems = [
    { id: "about", label: "About" },
    { id: "article", label: "Article" },
    { id: "cart", label: "Cart" },
    { id: "contact", label: "Contact" },
  ];

  const legalItems = [
    { id: "privacy", label: "Privacy Policy" },
    { id: "cookie", label: "Cookie policy" },
    { id: "delivery", label: "Delivery policy" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <footer className="relative overflow-hidden">
      <img src={footer} className="absolute inset-0 bg-cover bg-top-right bg-no-repeat"/>
      <div className="absolute inset-0 bg-white opacity-35"></div>
      <div className="relative max-w-pc w-full mx-auto lg:py-20 py-10 2xl:px-0 px-4">
        <div className="flex justify-between flex-wrap flex-col lg:flex-row gap-8">
          <div className="">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-brand-blue-800 uppercase tracking-wide">
                VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
              </h3>

              <div className="space-y-2 text-sm">
                <p className="font-bold text-secondary">
                  <span className="font-normal">Tax code:</span> 0305094228
                </p>
                <p className="font-bold text-secondary">
                  <span className="font-normal">Address:</span> 13 Nghia Thuc,
                  Ward 05, District 5, Ho Chi Minh City, Viet Nam
                </p>
                <p className="font-bold text-secondary">
                  <span className="font-normal">Phone number:</span> 0283 760
                  7607
                </p>
                <p className="font-bold text-secondary">
                  <span className="font-normal">Opening hour:</span> 09:00 -
                  22:00 from Mon - Fri
                </p>
              </div>
              <div>
                <img src={bct} alt="BCT" />
              </div>
            </div>
          </div>
          <div className="">
            <h4 className="text-2xl font-semibold text-brand-blue-800 mb-6">
              Sitemap
            </h4>
            <ul className="space-y-3">
              {sitemapItems.map((item) => (
                <li key={item.id}>
                  <a href="#" className="block">
                    <HoverAnimatedLink>{item.label}</HoverAnimatedLink>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-32">
            <h4 className="text-2xl font-semibold text-brand-blue-800 mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalItems.map((item) => (
                <li key={item.id}>
                  <a href="#" className="block">
                    <HoverAnimatedLink isActive={item.isActive}>
                      {item.label}
                    </HoverAnimatedLink>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h4 className="text-2xl font-semibold text-brand-blue-800 mb-6">
              Download App
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="inline-block  bg-black text-white rounded-lg px-5 py-4 w-60 hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="flex items-center justify-center space-x-3">
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
              <a
                href="#"
                className="inline-block  bg-brand-blue-500 text-white rounded-lg px-5 py-4 w-60 hover:bg-brand-blue-800 transition-colors duration-200"
              >
                <div className="flex items-center justify-center space-x-3">
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
            <div className="mt-8">
              <div className="flex items-center justify-start lg:justify-end space-x-2">
                <div>
                  <img src={lgVN} />
                </div>
                <span className="text-xl font-medium ">VI</span>
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
      </div>
      <div className="fixed bottom-10 right-10 ">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer w-10 h-10 bg-transparent border-brand-blue-800 hover:bg-brand-50 border-2 rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <svg
            className="w-5 h-5 text-brand-blue-800"
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
    </footer>
  );
};

export default Footer;
