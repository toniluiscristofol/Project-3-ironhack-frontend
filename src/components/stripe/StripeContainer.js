import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { Component } from "react";

import PaymentForm from "./PaymentForm";
const PUBLIC_KEY =
  "pk_test_51IsC66HdLBxJYxDSMcaUmC1iQS4oeE12XRKUv3DNzddCOkDtnt2s6NyikF4vFZa3sRjPmLy610PT1Nuf7FucTI7q006VQJIvF0";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default class StripeContainer extends Component {
  render() {
    return (
      <Elements stripe={stripeTestPromise}>
        <PaymentForm id={this.props.match.params} />
      </Elements>
    );
  }
}
