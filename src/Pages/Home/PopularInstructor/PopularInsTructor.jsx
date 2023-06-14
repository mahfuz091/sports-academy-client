import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PopularInstructorCard from "./PopularInstructorCard";
import useAuth from "../../../hooks/useAuth";

const PopularInsTructor = () => {

  const { refetch, data: instructors = [] } = useQuery({
    queryKey: ["popular-instructors"],


    queryFn: async () => {
      const res = await fetch(
        "https://b7a12-summer-camp-server-side-mahfuz091.vercel.app/instructors"
      );
      return res.json();
    },
  });
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
