import { useDispatch, useSelector } from "react-redux";
import { updateData, updateNumOfItems } from "./cartSlice";
import toast from "react-hot-toast";

function CartProduct({ ItemData, isDeleting, setIsDeleting }) {
  const { name, image, size, price, id, quantity } = ItemData;
  const data = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsDeleting(true);
    const newData = data.filter(
      (item) => `${item.id} ${item.size}` !== `${id} ${size}`,
    );
    dispatch(updateData(newData));
    dispatch(updateNumOfItems(newData.length));
    toast.success("successfully deleted");
    setTimeout(() => setIsDeleting(false), 1000);
  };

  return (
    <div
      className="flex justify-between items-center
     bg-fuchsia-50 rounded-lg sm:p-10 p-5 sm:gap-20 gap-5
      text-red-500 sm:h-[180px] sm:w-[650px] w-[360px] relative my-5"
    >
      <img
        src={image}
        width={100}
        height={100}
        className="object-contain w-[100px]"
      />
      <div>
        <h2 className="font-bold sm:text-xl sm:w-[50px]">{name}</h2>
        <span className="text-base">{size}</span>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <span className="text-lg font-bold">${price * quantity}</span>
        <div className=" bg-blue-500 p-2 rounded-full w-10 h-10 text-gray-100 text-center">
          {quantity}
        </div>
      </div>
      <button className="font-bold" onClick={handleClick} disabled={isDeleting}>
        X
      </button>
    </div>
  );
}

export default CartProduct;
