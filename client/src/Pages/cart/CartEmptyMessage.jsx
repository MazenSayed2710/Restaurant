import { useNavigate } from "react-router-dom";

function CartEmptyMessage({ children }) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-custom flex items-center justify-center text-2xl font-bold text-red-500 bg-fuchsia-100">
      <div className="bg-gray-100 p-14 rounded-3xl text-center">
        <p>{children}</p>
        <button
          onClick={() => navigate("/menu")}
          className="text-white bg-red-500 px-4 py-2 rounded-md mt-5 text-base"
        >
          Go to menu
        </button>
      </div>
    </div>
  );
}

export default CartEmptyMessage;
