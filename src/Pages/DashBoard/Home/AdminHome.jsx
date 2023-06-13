import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaDollarSign, FaUserAlt, FaUserGraduate } from "react-icons/fa";
import { TbMenuOrder, TbSum } from "react-icons/tb";

const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })
    console.log(stats);
    return (
        <div className="w-full px-12">
            <h2 className="text-3xl mb-10">Hi, {user.displayName}</h2>
            <div className="grid grid-flow-col  gap-2">

                <div className="stat shadow flex items-center  text-red-500">
                    <FaDollarSign className='text-3xl' />
                    <div><div className="stat-title">Revenue</div>
                        <div className="stat-value flex gap-2"> {stats.revenue}</div></div>

                </div>

                <div className="stat shadow">

                    <div className="stat-title">Student</div>
                    <div className="stat-value flex gap-2 text-red-500"><FaUserGraduate></FaUserGraduate>{stats.student}</div>

                </div>
                <div className="stat shadow">

                    <div className="stat-title">Instructors</div>
                    <div className="stat-value flex gap-2 text-red-500"><FaUserAlt />{stats.instructor}</div>

                </div>
                <div className="stat shadow">

                    <div className="stat-title">Total Courses</div>
                    <div className="stat-value flex gap-2 text-red-500">
                        <TbSum />
                        {stats.classes}</div>

                </div>

                <div className="stat shadow">

                    <div className="stat-title">Orders</div>
                    <div className="stat-value  flex gap-2 text-red-500">
                        <TbMenuOrder />
                        {stats.orders}</div>

                </div>

            </div>
            <div className="mt-10">
                <div className="card card-side shadow gap-5 bg-base-100   p-10">
                    <figure><img className="w-64" src={user?.photoURL} alt="Movie" /></figure>
                    <div className="card-body border-l-4">
                        <h2>Admin Name : {user?.displayName}</h2>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;