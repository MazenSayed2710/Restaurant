import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Spinner from "../../Components/Spinner";
const stripePromise = loadStripe(
  "pk_test_51Opu7jCAyJWiN8hF6Ns9yJ5A0UY2UwgizLhrV3DbC5IPEhjBnHxhYtrI27zHXx3SGFh7XHsI6Y5XNxd2YaljKa9g005if0ArEc",
);

function Checkout() {
  const [clientSecret, setClientSecret] = useState("");
  const data = useSelector((state) => state.cart.data);

  useEffect(() => {
    const requestData = {
      items: data,
    };
    fetch("https://restaurant-gt6k.onrender.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [data]);

  const options = {
    clientSecret,
  };
  if (!clientSecret) return <Spinner />;

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}

export default Checkout;
