import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import DashboardCover from "../../../DashboardCover/DashboardCover";
import Swal from "sweetalert2";
import ManageClassRow from "./ManageClassRow";

const ManageClass = () => {
  // const { diasabled, setDiasabled } = useState(false)
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(
    ["pending-classes"],
    async () => {
      const res = await axiosSecure.get("/pending-classes");
      return res.data;
    }
  );

  const handleApproved = (singleClass) => {
    fetch(
      `https://b7a12-summer-camp-server-side-mahfuz091.vercel.app/all-classes/approved/${singleClass._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          // setDiasabled(true)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Class Approve Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeny = (singleClass) => {
    fetch(
      `https://b7a12-summer-camp-server-side-mahfuz091.vercel.app/all-classes/deny/${singleClass._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          // setDiasabled(true)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Class Denyed`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className='w-full mb-20'>
      <Helmet>
        <title>Sports Avademy | Manage Classes</title>
      </Helmet>
      <DashboardCover title='Manage Classes'></DashboardCover>
      <div className='overflow-x-auto'>
        <table className='table overflow-auto  text-center w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass, index) => (
              <ManageClassRow
                key={singleClass._id}
                singleClass={singleClass}
                index={index}
                handleDeny={handleDeny}
                handleApproved={handleApproved}
                refetch={refetch}
              ></ManageClassRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
