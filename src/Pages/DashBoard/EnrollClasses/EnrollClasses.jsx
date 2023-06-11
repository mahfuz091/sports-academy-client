import React from 'react';
import { Helmet } from 'react-helmet-async';
import DashboardCover from '../../../DashboardCover/DashboardCover';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';

const EnrollClasses = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: enrollClasses = [], refetch } = useQuery(["enroll-classes"], async () => {
        const res = await axiosSecure.get(`/enroll-classes?email=${user?.email}`);
        return res.data;
    });

    console.log(enrollClasses);
    return (
        <div className='w-full'>
            <Helmet>
                <title>Sports Avademy | Enroll Casses</title>
            </Helmet>
            <DashboardCover title='Enroll Classes'></DashboardCover>
        </div>
    );
};

export default EnrollClasses;