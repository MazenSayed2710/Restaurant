function QuantityBox({ quantity, setQuantity, handleClick }) {
  return (
    <div className="mt-7 text-lg sm:w-[70%] w-[100%] text-red-500 border-red-500 border-2 flex ">
      <div className="py-2 px-3 flex justify-between items-center flex-1">
        <span>Quantity</span>
        <div className="flex  gap-3">
          <button
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 1}
          >
            &lt;
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            disabled={quantity === 10}
          >
            &gt;
          </button>
        </div>
      </div>

      <button
        className="p-2 bg-red-500 text-sm uppercase text-green-100"
        onClick={handleClick}
      >
        add to cart
      </button>
    </div>
  );
}

export default QuantityBox;
