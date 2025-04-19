import { useSelector } from "react-redux";
import { useLogout } from "../Pages/login/useLogout";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

function HamburgerMenuContent({ isOpen, setIsOpen }) {
  const numOfItems = useSelector((state) => state.cart.numOfItems);
  const { mutate, isLoading } = useLogout();
  const handleLogout = () => {
    mutate();
  };
  return (
    <ul
      className={`h-custom bg-red-500 flex
     justify-start flex-col items-start
     text-gray-100 font-semibold text-3xl gap-5 w-1/2 pt-4 absolute top-[44px] left-0 z-10 transition-[0.5s] ${isOpen ? "left-0" : "left-[-50%]"}`}
    >
      <li onClick={() => setIsOpen(false)}>
        <NavLink to="/" className="text-base text-right px-4 h-[30px]">
          HOMEPAGE
        </NavLink>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <NavLink to="menu" className="text-base text-right px-4 h-[30px]">
          MENU
        </NavLink>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <NavLink to="login" className="text-base text-right px-4 h-[30px]">
          LOGIN
        </NavLink>
      </li>
      <li onClick={() => setIsOpen(false)}>
        <NavLink
          to="/cart"
          className="flex items-center gap-1 text-base text-right px-4 h-[30px]"
        >
          <p> CART({numOfItems})</p>
          <span>
            <FaCartArrowDown />
          </span>{" "}
        </NavLink>
      </li>
      <li className="block" onClick={handleLogout}>
        <button
          className="right-10  cursor-pointer flex items-center justify-between gap-3 text-base text-right px-4 h-[30px]"
          disabled={isLoading}
        >
          <p>LOG OUT </p>
          <HiArrowLeftOnRectangle />
        </button>
      </li>
    </ul>
  );
}

export default HamburgerMenuContent;
