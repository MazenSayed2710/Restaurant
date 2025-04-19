import { useState } from "react";
import CartProduct from "./CartProduct";
import { clearItem } from "./cartSlice";
import { useDispatch } from "react-redux";

function CartProducts({ data }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const handleClearData = () => {
    dispatch(clearItem());
  };
  return (
    <div
      className="xl:w-1/2 flex flex-col 
       items-center xl:overflow-y-scroll py-10 "
    >
      <div>
        {data.map((item) => (
          <CartProduct
            key={`${item.id} ${item.size}`}
            ItemData={item}
            isDeleting={isDeleting}
            setIsDeleting={setIsDeleting}
          />
        ))}
        <div className="flex items-center justify-end mt-5">
          <button
            className="px-4 rounded-md py-3 bg-red-500 text-gray-100"
            onClick={handleClearData}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
