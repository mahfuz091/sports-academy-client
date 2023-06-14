import React from "react";
import { Helmet } from "react-helmet-async";
import DashboardCover from "../../../DashboardCover/DashboardCover";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const EnrollClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrollClasses = [], refetch } = useQuery(
    ["enroll-classes"],
    async () => {
      const res = await axiosSecure.get(`/enroll-classes?email=${user?.email}`);
      return res.data;
    }
  );


  return (
    <div className='w-full'>
      <Helmet>
        <title>Sports Avademy | Enroll Casses</title>
      </Helmet>
      <DashboardCover title='Enroll Classes'></DashboardCover>
      <div className='overflow-x-auto'>
        <table className='table  w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>

              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {enrollClasses?.enrollClass?.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    className='w-20 rounded-xl'
                    src={singleClass.image}
                    alt=''
                  />
                </td>
                <td>{singleClass.name}</td>
                <td>{singleClass.instructor}</td>
                <td>{singleClass.email}</td>

                <td>{singleClass.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollClasses;
