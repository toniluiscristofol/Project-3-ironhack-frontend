import React, { useState, useEffect } from "react";

import {
  CardElement,
  useElements,
  userElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./PaymentForm.css";
import PartyService from "../../services/parties.service";
import { PermDeviceInformation } from "@material-ui/icons";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm(props) {
  const [succes, setSucces] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [price, setPrice] = useState(50);

  const partyService = new PartyService();


  const refreshState = (id) => {

    axios.get(`http://localhost:5000/api/parties/${props.id.id}`)
    .then((response) => {
        console.log("RESPONSE:DATA:",response.data)
      setPrice(response.data.price);
    })
    .catch((err) => console.error(err));

    // partyService
    //   .getOne(id)
    //   .then((response) => {
    //       console.log("RESPONSE:DATA:",response.data)
    //     setPrice(response.data.price);
    //   })
    //   .catch((err) => console.error(err));
  };



  useEffect(() => {
      console.log("Hola que tal")
    console.log(props.id);
    refreshState(props.id);
  }, []);

 

  const handleSubmit = async (e) => {

    
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
        
      try {
        const { id } = paymentMethod;
        
        const response = await axios.post(`http://localhost:5000/payment/${props.id}`, {
        
        number: price * 100,
          amount: 100,
          id,
        });
        if (response.data.succes) {
          console.log("Succesfull payment");
          setSucces(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.mmessage);
    }
  };
  return (
    <>
      {!succes ? (
        <form onSubmit={handleSubmit}>
            <h2>Hola</h2>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>
            SUCCESFULL PAYMENT: YOU JOINED THIS PARTY!!!!!
          </h2>
        </div>
      )}
    </>
  );
}
