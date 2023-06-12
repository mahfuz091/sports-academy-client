import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PopularClassesCard from './PopularClassesCard';

const PopularClasses = () => {
    const { refetch, data: popularClasses = [] } = useQuery({
        queryKey: ['popular-classes',],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/popular-classes')
            return res.json();
        },
    })
    console.log(popularClasses);
    return (
        <div>

            <div className=' '>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-[1140px] mx-auto p-10'>
                    {popularClasses.map((singleClass, index) => (
                        <PopularClassesCard key={index} singleClass={singleClass}></PopularClassesCard>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PopularClasses;