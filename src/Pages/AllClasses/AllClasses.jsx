import React, { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import PageCover from "../Shared/PageCover/PageCover";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  console.log(classes);
  return (
    <div className='py-36 '>
      <PageCover title='All Classes' />
      <div className=' bg-[#fcc044]'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-[1140px] mx-auto p-10'>
          {classes.map((singleClass, index) => (
            <ClassCard key={index} singleClass={singleClass}></ClassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
