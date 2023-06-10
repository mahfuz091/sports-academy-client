import React from 'react';
import { Helmet } from 'react-helmet-async';
import DashboardCover from '../../../DashboardCover/DashboardCover';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const AddClass = () => {

    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();


    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append("image", data.image[0]);

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY
            }`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imageData) => {
                console.log(imageData);
                if (imageData.success) {
                    const imgURL = imageData.data.display_url;
                    const { name, price, instructor, seats, email } = data;
                    const newClass = { name, price: parseFloat(price), seats: parseFloat(seats), instructor, email, image: imgURL, status: 'pending' }
                    console.log(newClass)
                    axiosSecure.post('/all-classes', newClass)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

        // const formData = new FormData();
        // formData.append('image', data.image[0])
        // const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY
        //     }`;
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgResponse => {
        //         if (imgResponse.success) {
        //             const imgURL = imgResponse.data.display_url;
        //             const { name, price, instructor, seats, email } = data;
        //             const newItem = { name, price: parseFloat(price), seats: parseFloat(seats), instructor, email, image: imgURL }
        //             console.log(newItem)
        //             useAxiosSecure.post('/all-classes', newItem)
        //                 .then(data => {
        //                     console.log('after posting new menu item', data.data)
        //                     if (data.data.insertedId) {
        //                         reset();
        //                         Swal.fire({
        //                             position: 'top-end',
        //                             icon: 'success',
        //                             title: 'Class added successfully',
        //                             showConfirmButton: false,
        //                             timer: 1500
        //                         })
        //                     }
        //                 })
        //         }
        //     })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title>Sports Academy | Add A Class</title>
            </Helmet>
            <DashboardCover title='Add A Class'></DashboardCover>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true })}
                        className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name</span>
                    </label>
                    <input type="text" placeholder={user?.displayName}
                        value={user?.displayName}
                        {...register("instructor", { required: true })}
                        readOnly

                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email</span>
                    </label>
                    <input type="text" placeholder={user?.email}
                        value={user?.email}
                        {...register("email", { required: true })}
                        readOnly

                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seats*</span>
                    </label>
                    <input type="text" placeholder="available seats"
                        {...register("seats", { required: true, })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="text" placeholder="Price"
                        {...register("price", { required: true })}
                        className="input input-bordered w-full " />
                </div>



                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>

        </div>
    );
};

export default AddClass;