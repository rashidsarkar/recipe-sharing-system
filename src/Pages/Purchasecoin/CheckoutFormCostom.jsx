import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axiosInstancePublic from "../../AxiosApi/axiosInstancePublic";
import useAuth from "../../hooks/useAuth";
import useBuyCoin from "../../RecipesApi/useBuyCoin";
import { useNavigate } from "react-router-dom";

function CheckoutFormCostom({ paymentData }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { buyCoin } = useBuyCoin();
  console.log(user.email);
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionID, setTransctionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, coins } = paymentData;
  // console.log(price);
  useEffect(() => {
    axiosInstancePublic
      .post("/create-payment-intent", { price: price })
      .then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    //confar payment
    const { paymentIntent, error: confarmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confarmError) {
      setError(confarmError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        setError("");
        console.log("paymentIntent", paymentIntent);
        setTransctionId(paymentIntent.id);
        await buyCoin({ email: user.email, coinAmount: coins });
        navigate("/recipes");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          type="submit"
          className="my-4 btn btn-sm btn-primary"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-500 text-sm">{error}</p>
        {transactionID && (
          <p className="text-green-500 text-sm">
            your transaction id : {transactionID}
          </p>
        )}
      </form>
    </div>
  );
}

export default CheckoutFormCostom;
