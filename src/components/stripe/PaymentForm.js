import React, { useState, useEffect } from "react";
import Profile from '../../pages/Profile/Profile';
import Button from "@material-ui/core/Button";
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
      iconColor: "white",
      color: "white",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "white" },
      "::placeholder": { color: "white" },
    },
    invalid: {
      iconColor: "grey",
      color: "grey",
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

    axios
      .get(`${process.env.REACT_APP_API_URL}/parties/${props.id.id}`)
      .then((response) => {
        console.log("RESPONSE:DATA:", response.data);
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
          <div>
        
        <form class="payForm" onSubmit={handleSubmit}>
        <img id="logopayment"src="/PILLOWTALK (3) (2).png"></img>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
      <button id="paybutton" >Pay {price}€</button>
        </form>
        </div>
      ) : (
        // <div class="succesfullpayment">
        // <Link style={{ textDecoration: "none" }} to="/profile"></Link>
        //      <img id="logopayment"src="/PILLOWTALK (3) (2).png"></img>
        //   <h2>
        //     SUCCESFULL PAYMENT: YOU JOINED THIS PARTY!!!!!
        //   </h2>
        // 
        // </div>
        <Profile></Profile>
      )}
    </>
  );
}
