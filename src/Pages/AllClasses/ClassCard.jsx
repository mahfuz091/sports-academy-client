import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const ClassCard = ({ singleClass }) => {
  const { image, instructor, name, price, seats, _id } = singleClass;
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  console.log(cart);
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleSelect = () => {
    if (user) {
      const selectClass = {
        selectClassId: _id,
        name,
        image,
        instructor,
        price,
        email: user.email,
      };
      fetch(
        "https://b7a12-summer-camp-server-side-mahfuz091.vercel.app/carts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectClass),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please Login First",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      className={`card w-full hover:bg-[#f7ae1c] ${
        seats == 0 ? "bg-red-500 hover:bg-red-700 text-white" : ""
      } `}
    >
      <figure className='px-10 pt-10'>
        <img src={image} alt='' className='rounded-xl' />
      </figure>
      <div className='card-body items-center'>
        <h2 className=' text-center text-white text-2xl font-bold'>{name}</h2>
        <h2>Instructor: {instructor}</h2>
        <p>Available Seat: {seats}</p>
        <p>Price: BDT {price}</p>
        <div className='card-actions'>
          {isAdmin || isInstructor || seats == 0 ? (
            <>
              <button
                disabled
                onClick={() => handleSelect(singleClass)}
                className='btn bg-[#dd5449] hover:bg-[#b31409] text-white border-0'
              >
                Select Classes
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleSelect(singleClass)}
                className='btn bg-[#dd5449] hover:bg-[#b31409] text-white border-0'
              >
                Select Classes
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
