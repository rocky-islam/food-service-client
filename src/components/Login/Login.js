import React from 'react';
import loginLogo from '../../assets/images/sign-up.gif'

const Login = () => {
    return (
      <div>
        <div className="hero w-full">
          <div className="hero-content gap-8 md:grid-cols-2 flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <p className="py-6">
                <img src={loginLogo} alt="logo" />
              </p>
            </div>
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-5xl text-center font-bold">Login now!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
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
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;