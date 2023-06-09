import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie";
import animationData from "../../assets/Lotties/login.json";
import { AuthContext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data.image[0]);
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
        const imageUrl = imageData.data.display_url;
        createUser(data.email, data.password)
          .then((result) => {
            updateUserProfile(data.name, imageUrl)
              .then(() => {
                const saveUser = { name: data.name, email: data.email }
                fetch('http://localhost:5000/users', {
                  method: 'POST',
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(saveUser)
                })
                  .then(res => res.json())
                  .then(data => {
                    if (data.insertedId) {
                      reset();
                      Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate(from, { replace: true });
                    }
                  })

              })
              .catch((err) => {
                setLoading(false);
                console.log(err.message);
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
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
  const password = watch("password");
  return (<>
    <Helmet>
      <title>Bistro Boss | Sign Up</title>
    </Helmet>
    <div className=' hero py-32'>
      <div className=' lg:flex gap-14 items-center'>
        <div className=' '>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className='  w-[450px]'>
          <h1 className='text-center text-4xl font-bold mb-5'>SignUp</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control'>
              <label className='label'>
                <span className='text-xl'>Name</span>
              </label>
              <input
                type='text'
                placeholder='name'
                {...register("name", { required: true })}
                className='input input-bordered'
              />
              {errors.name && (
                <span className='text-warning'>This field is required</span>
              )}
            </div>
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                })}
              />
              {errors.password?.type === "required" && (
                <span className='text-warning'>This field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className='text-warning'>
                  Password must be 6 characters.
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className='text-warning'>
                  Password must have one capital letter one number and one
                  spacial characters.
                </span>
              )}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='text-xl'>Confirm Password</span>
              </label>
              <input
                type='password'
                placeholder='confirm password'
                className='input input-bordered'
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === password || "The passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <span className='text-warning'>Password does not match</span>
              )}
            </div>
            <div>
              <label htmlFor='image' className='label'>
                <span className='text-xl'>Profile Photo:</span>
              </label>
              <input
                type='file'
                id='image'
                accept='image/*'
                {...register("image", { required: true })}
              />
            </div>

            <div className='form-control mt-6'>
              <input
                type='submit'
                className='btn border-none btn-login'
                value='Register Now'
              />
            </div>
          </form>
          <p className='text-center mt-8 text-[#D1A054] text-xl font-medium'>
            <small>
              <Link to='/login'>Already have an account Login</Link>
            </small>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div></>

  );
};

export default Register;
