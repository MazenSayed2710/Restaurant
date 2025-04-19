import { Link } from "react-router-dom";

function OrderSummary({ totalPrice, numOfItems }) {
  return (
    <div className="flex-1 bg-fuchsia-50 xl:h-custom py-10">
      <div
        className="flex flex-col justify-center items-center
     text-red-500 text-base sm:text-xl  h-full"
      >
        <div className="flex flex-col gap-10 w-1/2 mb-7">
          <div className="flex justify-between items-center">
            <p>Subtotal ({numOfItems} items)</p>
            <span>${totalPrice}</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Service Cost</p>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Delivery Cost</p>
            <span className=" text-green-500">FREE!</span>
          </div>
        </div>
        <div className=" border-t-2 border-gray-200 py-7 w-1/2">
          <div className="flex justify-between items-center">
            <p>TOTAL(INCL. VAT)</p>
            <span>${totalPrice}</span>
          </div>
          <div className="flex justify-end items-center">
            <Link
              to="/checkout"
              className="py-4 px-10 bg-red-500 text-gray-100 rounded-md mt-5"
            >
              CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
