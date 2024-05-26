import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFormCostom from "./CheckoutFormCostom";
//TODO - add publisable key
const stripePromise = loadStripe(
  "pk_test_51OEDVUGQxs6oPApkKULo641AZePA3TtPQPhUHO5anICK5oaVEGDFDglyUt5zcPftAVjuAWKAXstiGt8DeZxPQNbM00M28OGaPL"
);
function PaymentWithStripe({ paymentData }) {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutFormCostom paymentData={paymentData}></CheckoutFormCostom>
      </Elements>
    </div>
  );
}

export default PaymentWithStripe;
