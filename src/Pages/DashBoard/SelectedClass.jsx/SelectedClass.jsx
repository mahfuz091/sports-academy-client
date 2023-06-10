import React from "react";
import useCart from "../../../hooks/useCart";
import { Helmet } from "react-helmet";
import { FaTrashAlt } from "react-icons/fa";

import DashboardCover from "../../../DashboardCover/DashboardCover";
import Swal from "sweetalert2";
import useAdmin from "../../../hooks/useAdmin";

const SelectedClass = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const [isAdmin] = useAdmin();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your Selected Class has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className='w-full'>
      <Helmet>
        <title>Sports Avademy | Selected Classes</title>
      </Helmet>
      <DashboardCover title='Selected Class'></DashboardCover>

      <div className='overflow-x-auto w-full px-32'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Course Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img
                        src={item.image}
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.instructor}</td>
                <td className='text-end'>${item.price}</td>
                <td>
                  <button
                    // onClick={() => handleDelete(item)}
                    className='btn bg-[#dd5449] hover:bg-[#b31409]  text-white'
                  >
                    <small>Pay</small>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className='btn bg-[#dd5449] hover:bg-[#b31409]  text-white'
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
