import React, { useState } from "react";
import UpdateFeedBackModal from "../UpdateFeedbackModal/UpdateFeedBackModal";
import axios from "axios";
import Swal from "sweetalert2";

const ManageClassRow = ({
  index,
  singleClass,
  handleApproved,
  handleDeny,
  refetch,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleSendFeedback = (data) => {
    console.log(data);
    const url = `https://b7a12-summer-camp-server-side-mahfuz091.vercel.app/update-feedback/${singleClass._id}`;
    console.log(url);
    axios
      .patch(url, data)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        if (response.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Send feedback to instructor Successfully",
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
    <tr key={singleClass._id}>
      <th>{index + 1}</th>
      <td>
        <img className='w-20 rounded-xl' src={singleClass.image} alt='' />
      </td>
      <td>{singleClass.name}</td>
      <td>{singleClass.instructor}</td>
      <td>{singleClass.email}</td>
      <td>{singleClass.seats}</td>
      <td>{singleClass.price}</td>
      <td>{singleClass.status}</td>
      <td>
        <div className='flex'>
          {singleClass.status == "approved" ||
            singleClass.status == "denied" ? (
            <>
              <div className='flex gap-2'>
                <button disabled className='btn bg-[#dd5449] text-white hover:bg-[#b31409]'>
                  Approved
                </button>
                <button disabled className='btn bg-[#dd5449] text-white hover:bg-[#b31409]'>
                  Deny
                </button>
              </div>
            </>
          ) : (
            <>
              <div className='flex gap-2'>
                <button
                  onClick={() => handleApproved(singleClass)}
                  className='btn bg-[#dd5449] text-white hover:bg-[#b31409]'
                >
                  Approved
                </button>
                <button
                  onClick={() => handleDeny(singleClass)}
                  className='btn bg-[#dd5449] text-white hover:bg-[#b31409]'
                >
                  Deny
                </button>
              </div>
            </>
          )}

          {singleClass.status == "approved" ||
            singleClass.status == "pending" ? (
            <>
              <button
                disabled
                onClick={() => setShowModal(true)}
                className='btn ml-2 bg-[#dd5449] text-white hover:bg-[#b31409]'
              >
                Send Feedback
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowModal(true)}
                className='btn ml-2 bg-[#dd5449] text-white hover:bg-[#b31409]'
              >
                Send Feedback
              </button>
            </>
          )}
          {showModal ? (
            <UpdateFeedBackModal
              key={singleClass._id}
              setShowModal={setShowModal}
              singleClass={singleClass}
              handleSendFeedback={handleSendFeedback}
            ></UpdateFeedBackModal>
          ) : null}
        </div>
      </td>
    </tr>
  );
};

export default ManageClassRow;
