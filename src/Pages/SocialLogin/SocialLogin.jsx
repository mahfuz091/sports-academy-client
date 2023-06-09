import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // const handleGoogleSignIn = () => {
  //   signInWithGoogle()
  //     .then((result) => {
  //       const loggedInUser = result.user;
  //       console.log(loggedInUser);
  //     })
  //     .then(() => {
  //       navigate(from, { replace: true });
  //     });
  // };
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        role: "student",
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  const from = location.state?.from?.pathname || "/";
  return (
    <div>
      <div className='divider'></div>
      <div className='w-full text-center my-4'>
        <button
          onClick={handleGoogleSignIn}
          className='btn btn-circle hover:bg-[#318c3b] hover:text-white'
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
