import React from 'react';
import Typewriter from "typewriter-effect";
import banner from '../../assets/images/section-side-banner.gif'

const Home = () => {
    return (
      <div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className=" grid items-center h-96">
            <div className="grid justify-items-center ">
              <div className="w-3/4">
                <h1 className=" text-2xl text-orange-500 md:text-5xl font-semibold">
                  Welcome to
                </h1>
                <span className="text-lime-600 md:text-5xl font-semibold">
                  <Typewriter
                    options={{
                      strings: ["Food Service"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
                <h1 className=" text-2xl text-orange-500 md:text-5xl font-semibold">
                  Website
                </h1>
                <p className='my-3'>
                  Chocolate, food product made from cocoa beans, consumed as
                  candy and used to make beverages and to flavour or coat
                  various confections and bakery products. Rich in
                  carbohydrates, it is an excellent source of quick energy, and
                  it also contains minute amounts of the stimulating alkaloids
                  theobromine and caffeine.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <img className="w-3/4 m-0 p-0" src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;