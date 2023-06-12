import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInsTructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [], refetch } = useQuery(
    ["instructors"],
    async () => {
      const res = await axiosSecure.get("/instructors");
      return res.data;
    }
  );
  return (
    <div>
      <SectionTitle heading='Popular Instructors'></SectionTitle>
      <div className=' '>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-[1140px] mx-auto p-10'>
          {instructors.slice(0, 6).map((instructor) => (
            <PopularInstructorCard
              key={instructor._id}
              instructor={instructor}
            ></PopularInstructorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInsTructor;
