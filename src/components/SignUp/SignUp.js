import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import loginLogo from "../../assets/images/sign-up.gif";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        handleUpdateUserProfile(name, photoURL);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Sign Up Successful",
          showConfirmButton: true,
          
        });
        form.reset();
    })
    .catch(err => console.error(err))

  };

    //   update userName password
    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };

      updateUserProfile(profile)
        .then(() => {})
        .catch((error) => console.error(error));
    };

  return (
    <div>
      <h1 className="text-4xl text-center font-semibold text-orange-500">
        Welcome to <span className="text-lime-600">SignUp Page</span>
      </h1>
      <div className="hero w-full">
        <div className="hero-content gap-8 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="py-6">
              <img src={loginLogo} alt="logo" />
            </p>
          </div>
          <div className="card w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-5xl text-center font-bold">Signup now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="SignUp"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center mb-4">
              Already have account Please{" "}
              <Link to="/login" className="text-orange-500">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
