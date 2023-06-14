import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const loggedInUser = result.user;

      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        role: "student",
        image: loggedInUser.photoURL,
      };
      fetch(
        "https://b7a12-summer-camp-server-side-mahfuz091.vercel.app/users",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        }
      )
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
          className='btn btn-circle bg-[#dd5449] text-white hover:bg-[#b31409]'
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
