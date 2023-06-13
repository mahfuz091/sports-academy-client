import React from "react";
import PageCover from "../Shared/PageCover/PageCover";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [], refetch } = useQuery(
    ["instructors"],
    async () => {
      const res = await axiosSecure.get("/instructors");
      return res.data;
    }
  );

  return (
    <div className='py-36 '>
      <Helmet>
        <title>Sports Avademy | Instructors</title>
      </Helmet>
      <PageCover title='Instructors' />
      <div className='overflow-x-auto px-32'>
        <table className='table  w-full'>
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor, index) => (
              <tr className='hover' key={instructor._id}>
                <th>{index + 1}</th>
                <th>
                  <img className='w-12' src={instructor.image} alt='' />
                </th>
                <td>{instructor.name}</td>
                <td>{instructor.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructors;
