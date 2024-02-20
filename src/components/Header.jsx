import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/youtube.png" alt="youtube logo" />
        <h1 className="hidden md:block text-2xl">Youtube</h1>
      </Link>

      <form className="flex item-center border border-gray-400 rounded-[20px] overflow-hidden">
        <input
          className="outline-none text-white bg-black px-3 py-1"
          type="search"
        />
        <button className="border-l px-2 text-xl">
          <IoSearchOutline />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition duration-300" />
        <IoVideocam className="hover:text-gray-400 transition duration-300" />
      </div>
    </div>
  );
};

export default Header;
