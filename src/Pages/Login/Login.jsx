import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import "./Login.css";
import Lottie from "react-lottie";
import animationData from "../../assets/Lotties/login.json";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className=' hero my-32'>
      <div className=' lg:flex gap-14 items-center'>
        <div className=' '>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className='  w-[450px]'>
          <h1 className='text-center text-4xl font-bold mb-5'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control'>
              <label className='label'>
                <span className='text-xl'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                {...register("email", { required: true })}
                className='input input-bordered'
              />
              {errors.email && (
                <span className='text-warning'>This field is required</span>
              )}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='text-xl'>Password</span>
              </label>
              <input
                type='password'
                placeholder='password'
                className='input input-bordered'
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className='text-warning'>This field is required</span>
              )}
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>

            <div className='form-control mt-6'>
              <input
                type='submit'
                className='btn border-none btn-login'
                value='Login'
              />
            </div>
          </form>
          <p className='text-center mt-8 text-[#D1A054] text-xl font-medium'>
            <small>
              New Here? <Link to='/signup'>Create an account</Link>{" "}
            </small>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
