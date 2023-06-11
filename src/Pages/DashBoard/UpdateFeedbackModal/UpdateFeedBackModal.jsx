import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateFeedBackModal = ({ singleClass, setShowModal, handleUpdate }) => {
    console.log(singleClass);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    return (
        <>
            <>
                <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none '>
                    <div className='relative  my-6 mx-auto w-1/2 h-1/2'>
                        <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                            <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
                                <h3 className='text-3xl font=semibold'>Update Classes </h3>
                                <button
                                    className='bg-transparent border-0 text-black text-right'
                                    onClick={() => setShowModal(false)}
                                >
                                    <span>Close</span>
                                </button>
                            </div>
                            <div className='relative p-6 flex-auto mx-auto'>
                                <form onSubmit={handleSubmit(handleUpdate)}>
                                    {errors.exampleRequired && (
                                        <span>This field is required</span>
                                    )}

                                    <div className='grid grid-cols-1 gap-3 mb-3'>
                                        <label htmlFor="label">
                                            Class Name
                                        </label>
                                        <input
                                            readOnly
                                            className='input input-bordered w-full max-w-xs'
                                            {...register("name", { required: true })}
                                            placeholder='name'
                                            defaultValue={singleClass.name}
                                        />
                                        <label htmlFor="label">
                                            Price
                                        </label>

                                        <input
                                            type='text'
                                            {...register("price", { required: true })}
                                            placeholder='price'
                                            className='input input-bordered w-full max-w-xs'
                                            defaultValue={singleClass.price}
                                        />
                                        <label htmlFor="label">
                                            Available Seats
                                        </label>
                                        <input
                                            type='text'
                                            {...register("seats", { required: true })}
                                            placeholder='Available Seats'
                                            className='input input-bordered w-full max-w-xs'
                                            defaultValue={singleClass.seats}
                                        />

                                    </div>

                                    <div>
                                        <input
                                            className=' btn w-full max-w-xs cursor-pointer   font-semibold'
                                            type='submit'
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                                <button
                                    className='text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
                                    type='button'
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};

export default UpdateFeedBackModal;