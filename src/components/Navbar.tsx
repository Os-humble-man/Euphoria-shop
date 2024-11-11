import logo from "@/assets/logo.png";
import SearchBar from "@/components/SearchBar";
import NavbarIcon from "@/components/NavbarIcon";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-1/4 lg:w-[15%]">
          <img src={logo} alt="logo" className="h-10 object-cover" />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex md:w-1/2 lg:w-[50%] justify-center">
          <ul className="flex items-center space-x-6 lg:space-x-8 text-gray-500 text-[16px] lg:text-[18px]">
            <li className="font-bold text-gray-800 cursor-pointer">Shop</li>
            <li className="cursor-pointer">Men</li>
            <li className="cursor-pointer">Woman</li>
            <li className="cursor-pointer">Combos</li>
            <li className="cursor-pointer">Joggers</li>
          </ul>
        </div>

        {/* Search Bar and Icons */}
        <div className="flex items-center gap-4 w-2/3 justify-end">
          <div className="flex-grow gap-x-4">
            <SearchBar />
          </div>
          <NavbarIcon />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="hidden px-4 pb-3 space-y-2 text-gray-600 text-[16px]">
        <a href="#" className="block font-bold text-gray-800">
          Shop
        </a>
        <a href="#" className="block">
          Men
        </a>
        <a href="#" className="block">
          Woman
        </a>
        <a href="#" className="block">
          Combos
        </a>
        <a href="#" className="block">
          Joggers
        </a>
      </div>
    </nav>
  );
}
