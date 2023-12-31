import { useQuery } from "@tanstack/react-query";
import React from "react";
import PopularClassesCard from "./PopularClassesCard";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const PopularClasses = () => {

  const { refetch, data: popularClasses = [] } = useQuery({
    queryKey: ["popular-classes"],


    queryFn: async () => {
      const res = await fetch(
        "https://b7a12-summer-camp-server-side-mahfuz091.vercel.app/popular-classes"
      );
      return res.json();
    },
  });

  return (
    <div>
      <SectionTitle heading='Popular Classes'></SectionTitle>
      <div className=' '>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-[1140px] mx-auto p-10'>
          {popularClasses.map((singleClass, index) => (
            <PopularClassesCard
              key={index}
              singleClass={singleClass}
            ></PopularClassesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
