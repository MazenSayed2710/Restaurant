import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData, updateNumOfItems } from "../cart/cartSlice";
import { checkIfExist } from "../../helpers";
import SizeButtons from "./SizeButtons";
import QuantityBox from "./QuantityBox";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ItemDetails({ data }) {
  const [size, setSize] = useState("Small");
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataa = useSelector((state) => state.cart.data);

  const { name, description, smallPrice, mediumPrice, largePrice, image, id } =
    data;

  const price =
    size === "Small"
      ? smallPrice
      : size === "Medium"
        ? mediumPrice
        : largePrice;
  const newItem = {
    name,
    image,
    size,
    price,
    id,
    quantity,
  };

  const handleClick = () => {
    dispatch(updateData(checkIfExist(dataa, newItem)));
    dispatch(updateNumOfItems(checkIfExist(dataa, newItem).length));
    toast.success("successfully added");
    navigate(-1);
  };

  return (
    <div className=" p-10 flex flex-col sm:flex-row items-center justify-between h-custom">
      <div className="sm:w-1/2 flex justify-center">
        <img src={image} alt="" width={600} height={600} loading="lazy" />
      </div>
      <div className="sm:w-1/2 p-5 text-red-500 ">
        <h2 className=" font-bold sm:text-3xl text-2xl mb-5">{name}</h2>
        <p className="sm:text-lg text-base mb-5">{description}</p>
        <span className="font-bold sm:text-3xl text-2xl block mb-5">
          ${price * quantity}
        </span>
        <SizeButtons size={size} setSize={setSize} />
        <QuantityBox
          quantity={quantity}
          setQuantity={setQuantity}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default ItemDetails;
