import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginLogo from '../../assets/images/sign-up.gif'
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signIn, providerLogin } = useContext(AuthContext);
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();   
        })
        .catch(error => console.error(error));   
    }

    // google login
     const googleProvider = new GoogleAuthProvider();

     const handleGoogleSignIn = () => {
       providerLogin(googleProvider)
         .then((result) => {
           const user = result.user;
           console.log(user);
         })
         .catch((error) => console.error(error));
     };

    return (
      <div>
        <h1 className="text-4xl text-center font-semibold text-orange-500">
          Welcome to <span className='text-lime-600'>Login Page</span>
        </h1>
        <div className="hero w-full">
          <div className="hero-content gap-8 md:grid-cols-2 flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <p className="py-6">
                <img src={loginLogo} alt="logo" />
              </p>
            </div>
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-5xl text-center font-bold">Login now!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name='email'
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
                    name='password'
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="/" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Login" className="btn btn-primary" />
                </div>
              </form>
              <p className='text-center mb-4'>New to Food-Service Please <Link to='/signup' className='text-orange-500'>Sign Up</Link></p>
              <div className='flex justify-center my-4'>
                <p onClick={handleGoogleSignIn} className='btn btn-outline btn-error w-1/2'><FaGoogle className='mx-2 text-primary'></FaGoogle> LogIn With Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;