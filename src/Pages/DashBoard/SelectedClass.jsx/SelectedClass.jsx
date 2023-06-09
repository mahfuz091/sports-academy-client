import React from 'react';
import useCart from '../../../hooks/useCart';
import { Helmet } from 'react-helmet';
import { FaTrashAlt, FaAmazonPay } from "react-icons/fa";
import PageCover from '../../Shared/PageCover/PageCover';
import DashboardCover from '../../../DashboardCover/DashboardCover';

const SelectedClass = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    return (
        <div className='w-full'>
            <Helmet>
                <title>Sports Avademy | Selected Classes</title>
            </Helmet>
            <DashboardCover title='Selected Class'></DashboardCover>

            <div className='overflow-x-auto w-full px-32'>
                <table className='table w-full'>
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Course Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className='avatar'>
                                        <div className='mask mask-squircle w-12 h-12'>
                                            <img
                                                src={item.image}
                                                alt='Avatar Tailwind CSS Component'
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td className='text-end'>${item.price}</td>
                                <td>
                                    <button
                                        // onClick={() => handleDelete(item)}
                                        className='btn bg-[#dd5449] hover:bg-[#b31409]  text-white'
                                    >
                                        <small>Pay</small>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        // onClick={() => handleDelete(item)}
                                        className='btn bg-[#dd5449] hover:bg-[#b31409]  text-white'
                                    >
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;