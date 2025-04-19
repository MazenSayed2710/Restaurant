import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
function HamburgerMenuIcon({ isOpen, setIsOpen }) {
  const numOfItems = useSelector((state) => state.cart.numOfItems);
  return (
    <div className="flex items-center justify-between py-2 px-6 gap-5 text-red-500">
      {isOpen ? (
        <img
          src="../../close.png"
          className="cursor-pointer"
          width={20}
          height={20}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      ) : (
        <img
          src="../../open.png"
          className="cursor-pointer"
          width={20}
          height={20}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      <h2 className="font-bold text-lg  flex-1">
        <NavLink to="/">MASSIMO</NavLink>
      </h2>
      <Link
        to="/cart"
        className="flex items-center gap-1 text-base text-right px-4 h-[30px] font-bold"
      >
        <p> CART({numOfItems})</p>
        <span>
          <FaCartArrowDown />
        </span>{" "}
      </Link>
    </div>
  );
}

export default HamburgerMenuIcon;
