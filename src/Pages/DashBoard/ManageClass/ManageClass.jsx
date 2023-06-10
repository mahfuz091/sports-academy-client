import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import DashboardCover from '../../../DashboardCover/DashboardCover';
import Swal from 'sweetalert2';

const ManageClass = () => {
    // const { diasabled, setDiasabled } = useState(false)
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(["pending-classes"], async () => {
        const res = await axiosSecure.get("/pending-classes");
        return res.data;
    });

    const handleApproved = (singleClass) => {
        fetch(`http://localhost:5000/all-classes/approved/${singleClass._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    // setDiasabled(true)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Class Approve Now`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    }

    const handleDeny = (singleClass) => {
        fetch(`http://localhost:5000/all-classes/deny/${singleClass._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    // setDiasabled(true)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Class Denyed`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    }

    return (
        <div className='w-full mb-20'>
            <Helmet>
                <title>Sports Avademy | Manage Classes</title>
            </Helmet>
            <DashboardCover title='Manage Classes'></DashboardCover>
            <div className='overflow-x-auto'>
                <table className='table  w-full'>
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((singleClass, index) => (
                            <tr key={singleClass._id}>
                                <th>{index + 1}</th>
                                <td><img className='w-20 rounded-xl' src={singleClass.image} alt="" /></td>
                                <td>{singleClass.name}</td>
                                <td>{singleClass.instructor}</td>
                                <td>{singleClass.email}</td>
                                <td>{singleClass.seats}</td>
                                <td>{singleClass.price}</td>
                                <td>{singleClass.status}</td>
                                <td>
                                    <div className="flex">
                                        {
                                            singleClass.status == 'approved' || singleClass.status == 'denied' ? <>
                                                <div className="flex">
                                                    <button disabled className='btn'>Approved</button>
                                                    <button disabled className='btn'>Deny</button>
                                                </div>
                                            </> : <>
                                                <div className="flex">
                                                    <button onClick={() => handleApproved(singleClass)} className='btn'>Approved</button>
                                                    <button onClick={() => handleDeny(singleClass)} className='btn'>Deny</button>
                                                </div>
                                            </>

                                        }


                                        <button className="btn">Send Feedback</button>
                                    </div>

                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageClass;