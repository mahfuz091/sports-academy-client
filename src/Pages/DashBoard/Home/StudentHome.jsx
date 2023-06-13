import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaDollarSign } from "react-icons/fa";

import { MdClass, MdOutlineFlightClass } from "react-icons/md";

const StudentHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['student-stats'],
        queryFn: async () => {
            const res = await axiosSecure(`/student-stat?email=${user?.email}`);
            return res.data;
        }
    })
    return (
        <div className="w-full px-12">
            <h2 className="text-3xl mb-10">Hi, {user.displayName}</h2>
            <div className="grid grid-flow-col  gap-2">

                <div className="stat shadow bg-base-100 flex items-center  text-red-500">
                    <FaDollarSign className='text-3xl' />
                    <div>
                        <h2 className="stat-title">Expense</h2>
                        <h2 className="stat-value flex gap-2"> {stats.revenue}</h2>
                    </div>

                </div>

                <div className="stat shadow bg-base-100 flex items-center  text-red-500">
                    <MdOutlineFlightClass className='text-3xl'></MdOutlineFlightClass>
                    <div>
                        <h2 className="stat-title">Total Enroll Classes</h2>
                        <h2 className="stat-value flex gap-2 text-red-500">{stats.enrollClasses}</h2>
                    </div>

                </div>

                <div className="stat shadow bg-base-100 flex items-center  text-red-500">
                    <MdClass className='text-3xl'></MdClass>
                    <div>
                        <h2 className="stat-title">Booked Classes</h2>
                        <h2 className="stat-value flex gap-2 text-red-500">

                            {stats.bookedClasses}</h2>
                    </div>

                </div>


            </div>


            <div className="mt-10">
                <div className="card card-side shadow gap-5 bg-base-100   p-10">
                    <figure><img className="" src={user?.photoURL} alt="Movie" /></figure>
                    <div className="card-body border-l-4">
                        <h2>Student Name : {user?.displayName}</h2>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default StudentHome;