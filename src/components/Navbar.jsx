import React from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
} from "lucide-react";

const Navbar = () => {
  const categories = [
    "All",
    "Cakes",
    "Flowers",
    "Plants",
    "Personalised",
    "Birthday",
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <Menu className="md:hidden cursor-pointer text-gray-600" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            FNP
          </h1>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center w-[45%] bg-gray-50 border rounded-full px-4 py-2 shadow-inner">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search for cakes, flowers & gifts"
            className="w-full bg-transparent px-3 outline-none text-sm"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <User className="cursor-pointer text-gray-700 hover:text-green-600 transition" />
          <div className="relative">
            <ShoppingCart className="cursor-pointer text-gray-700 hover:text-green-600 transition" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1.5 rounded-full">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-4 pb-3 md:hidden">
        <div className="flex items-center bg-gray-50 border rounded-full px-4 py-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search gifts"
            className="w-full bg-transparent px-3 outline-none text-sm"
          />
        </div>
      </div>

      {/* Categories */}
      <nav className="flex gap-8 px-4 md:px-10 py-3 text-sm font-semibold border-t overflow-x-auto whitespace-nowrap">
        {categories.map((item, index) => (
          <span
            key={index}
            className="relative cursor-pointer text-gray-700 hover:text-green-600 transition
            after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
            after:bg-green-600 after:transition-all hover:after:w-full"
          >
            {item}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;