import React from 'react';
import { Helmet } from 'react-helmet-async';
import DashboardCover from '../../../DashboardCover/DashboardCover';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import moment from "moment";

const PaymentHistory = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: enrollClasses = [], refetch } = useQuery(["enroll-classes"], async () => {
        const res = await axiosSecure.get(`/enroll-classes?email=${user?.email}`);
        return res.data;
    });
    console.log(enrollClasses);
    return (
        <div className="w-full">
            <Helmet>
                <title>Sports Avademy | Payment History</title>
            </Helmet>
            <DashboardCover title='Payment History'></DashboardCover>
            <div className='overflow-x-auto'>
                <table className='table  w-full'>
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>TransactionId</th>
                            <th>Price</th>
                            <th>Enroll Date</th>



                        </tr>
                    </thead>
                    <tbody>
                        {enrollClasses?.result?.map((enrollClass, index) => (
                            <tr key={enrollClass._id}>
                                <td>{index + 1}</td>
                                <td>{enrollClass.email}</td>
                                <td>{enrollClass.transactionId}</td>
                                <td>{enrollClass.price}</td>
                                <td>{moment(enrollClass.date).format('MMMM Do YYYY, h:mm:ss a')}</td>




                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;