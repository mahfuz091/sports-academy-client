import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import "./CheckoutForm.css";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useBookedClass from "../../../hooks/useBookedClass";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = ({ price, id, selectClassId, selectClass }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [, refetch] = useBookedClass();
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      refetch();
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        id,
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        status: "Successfully Enrolled",
      };

      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        fetch(
          `https://b7a12-summer-camp-server-side-mahfuz091.vercel.app/all-classes/seats/${selectClassId}`,
          {
            method: "PATCH",
          }
        )
          .then((res) => res.json())
          .then((data) => {});

        if (res.data.insertResult.insertedId) {
          // display confirm
          refetch();
          navigate("/dashboard/history");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        if (res.data.deleteResult.deletedCount > 0) {
          // display confirm
          refetch();
          navigate("/dashboard/history");
        }
      });
    }
  };
  return (
    <div className='mb-20'>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label className='label'>
            <span className='text-xl'>Course Name</span>
          </label>
          <input
            readOnly
            type='text'
            placeholder='name'
            className='input input-bordered'
            defaultValue={selectClass.name}
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='text-xl'>Price</span>
          </label>
          <input
            readOnly
            type='text'
            placeholder='name'
            className='input input-bordered'
            defaultValue={selectClass.price}
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='text-xl'>Payments Details</span>
          </label>
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
        </div>

        <button
          className='bg-[#dd5449] hover:bg-[#b31409]'
          type='submit'
          disabled={!stripe}
        >
          Pay {selectClass.price}
        </button>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
      {transactionId && (
        <p className='text-green-500'>
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
