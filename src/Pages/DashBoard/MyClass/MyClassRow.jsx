import React, { useState } from "react";

import { FaEdit } from "react-icons/fa";
import axios from "axios";
import UpdateClass from "../UpdateClass/UpdateClass";
import Swal from "sweetalert2";

const MyClassRow = ({ singleClass, index, refetch }) => {
  const [showModal, setShowModal] = useState(false);
  const handleUpdate = (data) => {
    console.log(data);
    const url = `https://b7a12-summer-camp-server-side-mahfuz091.vercel.app/update-classes/${singleClass._id}`; // URL to send the PATCH request
    // const updateData = { data }; // Data to be sent in the request body

    axios
      .patch(url, data)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Your Class Update Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setShowModal(false);
        }
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className='w-20 rounded-xl' src={singleClass?.image} alt='' />
      </td>
      <td>{singleClass.name}</td>
      <td>{singleClass.status}</td>
      <td>{singleClass.seats}</td>
      <td>{singleClass.student}</td>
      <td>{singleClass?.feedback}</td>

      <td>
        <button
          onClick={() => setShowModal(true)}
          className='btn bg-[#dd5449] text-white hover:bg-[#b31409]'
        >
          <FaEdit></FaEdit> Update
        </button>
        {showModal ? (
          <UpdateClass
            key={singleClass._id}
            setShowModal={setShowModal}
            singleClass={singleClass}
            handleUpdate={handleUpdate}
          ></UpdateClass>
        ) : null}
      </td>
    </tr>
  );
};

export default MyClassRow;
