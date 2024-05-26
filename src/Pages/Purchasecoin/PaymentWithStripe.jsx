import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
//TODO - add publisable key
const stripePromise = loadStripe("");
function PaymentWithStripe() {
  return (
    <div>
      <p>payment card</p>
      <Elements stripe={stripePromise}></Elements>
    </div>
  );
}

export default PaymentWithStripe;
