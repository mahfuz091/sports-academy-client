import React, { useContext } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import Lottie from "react-lottie";
import animationData from "../../assets/Lotties/login.json";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        icon: "success",
      });
      navigate(from, { replace: true });
    });
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
    <div className=' hero py-32'>
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
                value='Login Now'
              />
            </div>
          </form>
          <p className='text-center mt-8 text-[#D1A054] text-xl font-medium'>
            <small>
              New Here? <Link to='/register'>Create an account</Link>
            </small>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;