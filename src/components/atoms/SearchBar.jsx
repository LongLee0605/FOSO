import React,{ useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineCamera } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex-1 max-w-2xl mx-8">
      <div className="relative flex items-center border-2 rounded-full border-brand-blue-500 pl-5 pr-2 py-2">
        <input
          type="text"
          placeholder="Tìm sản phẩm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 focus:outline-none placeholder:text-gray-500 placeholder:font-normal text-base leading-none"
        />
        <button className="mr-6 flex items-center justify-center">
          <span className="text-gray-500">
            <HiOutlineCamera size={28} />
          </span>
        </button>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center">
          <CiSearch size={28} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
