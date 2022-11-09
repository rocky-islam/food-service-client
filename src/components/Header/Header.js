import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/foodServiceLogo.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // logout
     const handleLogOut = () => {
       logOut()
         .then(() => {})
         .catch((error) => console.error(error));
     };

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        
        
        {
            user?.uid ?
            <li onClick={handleLogOut}><Link>Log Out</Link></li>
            :
            <>
            <li><Link to='/login'>Log In</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
            </>
        }
        
    </>
    return (
      <div className="mx-4 mb-8">
        <div className="navbar bg-base-100 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>

            <Link className=" btn btn-ghost normal-case md:text-xl">
              <img className="w-12 md:w-28" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          <div className="navbar-end">
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2">
                {
                    user?.photoURL ?
                    <img src={user?.photoURL} alt='' />
                    :
                    <FaUser size={40}></FaUser>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;