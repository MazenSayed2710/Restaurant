import { useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";
import CartEmptyMessage from "./CartEmptyMessage";
import CartProducts from "./CartProducts";

function CartPage() {
  const data = useSelector((state) => state.cart.data);
  const totalPrice = data.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0,
  );

  if (!data.length)
    return <CartEmptyMessage>Your Cart Is Empty</CartEmptyMessage>;

  return (
    <div className="flex flex-col xl:flex-row sm:h-custom ">
      <CartProducts data={data} />
      <OrderSummary totalPrice={totalPrice} numOfItems={data.length} />
    </div>
  );
}

export default CartPage;
