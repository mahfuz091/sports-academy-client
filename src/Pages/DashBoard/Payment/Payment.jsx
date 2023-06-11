import React from "react";
import DashboardCover from "../../../DashboardCover/DashboardCover";
import { Helmet } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import useBookedClass from "../../../hooks/useBookedClass";

const Payment = () => {
  const selectClass = useLoaderData();

  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  return (
    <div className='w-full'>
      <Helmet>
        <title>Sports Avademy | Payment</title>
      </Helmet>
      <DashboardCover title='Payment'></DashboardCover>
      <h2 className='text-3xl text-center'> Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          selectClass={selectClass}
          price={selectClass.price}
          id={selectClass._id}
          selectClassId={selectClass.selectClassId}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
