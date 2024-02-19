import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

export const StripeCheckoutButton = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    //   fetch("/config").then(async (r) => {
    //     const { publishableKey } = await r.json();
    //     setStripePromise(loadStripe(publishableKey));
    //   });

    setStripePromise(
      loadStripe(
        "pk_test_51OiI6NKjwdm0VvDKMsk087TXSp1FL5QFBOfaFirdnthy0cDTre1bqgvFKrdTan5nBT0O32V7XPPeUjDziLRc1H4d000bXmO5cn"
      )
    );
  }, []);

  useEffect(() => {
    // fetch("/create-payment-intent", {
    //   method: "POST",
    //   body: JSON.stringify({}),
    // }).then(async (result) => {
    //   let { clientSecret } = await result.json();
    //   setClientSecret(clientSecret);
    // });

    setClientSecret(
      "pi_3OiN14Kjwdm0VvDK1Rm2q9hS_secret_ADfkXH3ZRT2X27oLoAy4E99ir"
    );
  }, []);

  return (
    <>
      <h1>Complete Your Payment</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}; 

export default StripeCheckoutButton;
