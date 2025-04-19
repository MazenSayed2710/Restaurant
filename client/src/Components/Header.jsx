import { FaPhone } from "react-icons/fa";
function Header() {
  return (
    <header className="bg-red-500 h-20 text-center relative p-4 flex items-center justify-center">
      <h2 className=" text-gray-100 text-sm sm:text-xl">
        Free delivery for all orders over $50. Order your food now!
      </h2>
      <div className=" bg-gray-400 py-2 px-2 rounded-2xl hidden text-gray-800 absolute right-2 md:flex items-center gap-2 cursor-pointer">
        <FaPhone /> <p> 123 456 78</p>
      </div>
    </header>
  );
}

export default Header;
