import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import MiniSpinner from "../../Components/MiniSpinner";

function CheckoutForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (!elements || !stripe) return;
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });
    setMessage(error.message);
    setIsLoading(false);
  };
  const paymentElementOption = {
    layout: "tabs",
  };
  return (
    <div className="w-[100%] h-custom flex flex-col justify-center items-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <PaymentElement options={paymentElementOption} />
        <button
          className="bg-red-500 py-3 px-4 rounded-md w-[100%] text-gray-100 font-bold my-7"
          disabled={isLoading}
        >
          {isLoading ? <MiniSpinner /> : "Pay"}
        </button>
        <p className="text-red-500 font-bold text-center">{message}</p>
      </form>
    </div>
  );
}

export default CheckoutForm;
