import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useLogout } from "../Pages/login/useLogout";
import MassimoButton from "./MassimoButton";

function Navbar() {
  const numOfItems = useSelector((state) => state.cart.numOfItems);
  const { mutate, isLoading } = useLogout();
  const handleLogout = () => {
    mutate();
  };
  return (
    <nav className="hidden h-14 border-b-2 border-b-red-500 p-4 md:flex justify-around text-red-500 relative">
      <ul className=" gap-5 flex">
        <li>
          <NavLink to="/">HOMEPAGE</NavLink>
        </li>
        <li>
          <NavLink to="menu">MENU</NavLink>
        </li>
        <li>
          <NavLink>CONTACT</NavLink>
        </li>
      </ul>
      <div className=" absolute">
        <MassimoButton />
      </div>
      <ul className=" gap-5 flex">
        <li>
          <NavLink to="login">LOGIN</NavLink>
        </li>
        <li>
          <NavLink to="cart" className="flex items-center gap-1">
            <p> CART({numOfItems})</p>
            <span>
              <FaCartArrowDown />
            </span>{" "}
          </NavLink>
        </li>
      </ul>
      <button
        className="absolute  right-10 text-2xl font-bold cursor-pointer"
        onClick={handleLogout}
        disabled={isLoading}
      >
        <HiArrowLeftOnRectangle />
      </button>
    </nav>
  );
}

export default Navbar;
