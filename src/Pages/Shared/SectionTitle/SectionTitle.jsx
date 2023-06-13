import React from "react";

const SectionTitle = ({ heading }) => {
  return (
    <div className='lg:w-[424px] px-10 lg:px-0 mx-auto mt-20'>
      <h3 className='section-heading'>{heading}</h3>
    </div>
  );
};

export default SectionTitle;
