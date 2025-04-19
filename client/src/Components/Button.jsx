import { NavLink } from "react-router-dom";

function Button({ children, to }) {
  return (
    <NavLink
      className="bg-red-500 py-4 px-5 text-gray-100 font-semibold mt-5 rounded-md"
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default Button;
