import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFormCostom from "./CheckoutFormCostom";
//TODO - add publisable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMANT_KEY);
function PaymentWithStripe() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutFormCostom></CheckoutFormCostom>
      </Elements>
    </div>
  );
}

export default PaymentWithStripe;
