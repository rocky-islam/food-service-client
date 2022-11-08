import React from 'react';
import loginLogo from '../../assets/images/sign-up.gif'

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
    }
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
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;