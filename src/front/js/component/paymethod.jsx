import React from "react";
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const initialOptions = {
//   "client-id": process.env.PAYPAL_CLIENT_ID_SANDBOX,
//   currency: "USD",
//   intent: "capture",
//   "data-client-token": "abc123xyz==",
// };

export default function CheckoutPaypal() {
  const [amount, setAmount] = useState("1.99");

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
                    value: amount,
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
        <div>
          <label
            htmlFor="amount"
            style={{
              fontSize: "20px",
              marginRight: "10px",
              fontWeight: "bold",
            }}
          >
            <span>Cantidad a donar en US$:</span>
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            style={{
              fontSize: "20px",
              margin: "0.5rem 0",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
      </PayPalScriptProvider>
    </div>
  );
}
