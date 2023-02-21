import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const initialOptions = {
//   "client-id": process.env.PAYPAL_CLIENT_ID_SANDBOX,
//   currency: "USD",
//   intent: "capture",
//   "data-client-token": "abc123xyz==",
// };

export default function CheckoutPaypal() {
  return (
    <div>
      <PayPalScriptProvider
        options={{ "client-id": process.env.PAYPAL_CLIENT_ID_SANDBOX }}
      >
        <PayPalButtons
          style={{ layout: "horizontal" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "1.99",
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              const name = details.payer.name.given_name;
              alert(`Transaction completed by ${name}`);
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
