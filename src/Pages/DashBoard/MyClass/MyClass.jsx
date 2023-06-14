import React, { useState } from "react";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import DashboardCover from "../../../DashboardCover/DashboardCover";

import MyClassRow from "./MyClassRow";

const MyClass = () => {

  const { user } = useAuth();

  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["my-classes"], async () => {
    const res = await axiosSecure.get(`/my-classes?email=${user.email}`);
    return res.data;
  });


  return (
    <div className='w-full'>
      <Helmet>
        <title>Sports Avademy | My Classes</title>
      </Helmet>
      <DashboardCover title='My Classes'></DashboardCover>
      <div className='overflow-x-auto'>
        <table className='table  w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Status</th>
              <th>Available Seats</th>
              <th>Enrolled Student</th>
              <th>FeedBack</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass, index) => (
              <MyClassRow
                key={singleClass._id}
                singleClass={singleClass}
                index={index}
                refetch={refetch}
              ></MyClassRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
