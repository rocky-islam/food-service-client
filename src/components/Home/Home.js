import React from 'react';
import Typewriter from "typewriter-effect";
import banner from '../../assets/images/section-side-banner.gif'
import chicken from '../../assets/images/chicken.jpg'
import { Fade } from "react-reveal";
import Wobble from "react-reveal/Wobble";
import Jello from "react-reveal/Jello";
import Services from '../Services/Services';


const Home = () => {
    return (
      <div>
        {/* home header top section */}
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
                <p className="my-3">
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
        {/* services load */}
        <Services></Services>
        {/* services load */}
        {/* carousel */}
        <div className="hero md:my-12">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-1/2">
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    alt=""
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    alt=""
                    src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    alt=""
                    src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <img
                    alt=""
                    src="https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide5" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                  <img
                    alt=""
                    src="https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <Wobble>
                <h1 className="text-5xl font-bold">Rate Our Food!</h1>
              </Wobble>
              <Jello>
                <p className="py-6">
                  Rate our food. your feedback is most important for us cause
                  when you rate our food service then we know about our service
                  or food quality. and we make more special food for you.
                </p>
              </Jello>
              <button className="btn bg-orange-500 border-none hover:bg-lime-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* carousel */}

        {/* middle section of chicken */}
        <div>
          <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className="w-1/2">
                <Fade left>
                  <img
                    alt=""
                    src={chicken}
                    className=" rounded-lg shadow-2xl"
                  />
                </Fade>
              </div>
              <div className="w-1/2">
                <Fade right>
                  <h1 className="text-3xl font-bold">
                    Feel the Sound of Taste
                  </h1>
                  <p className="py-6">
                    Curabitur ullamcorper ultricies unless. Even CNN. Maecenas
                    time, the earth needs the sauce of the rhoncus, let it be as
                    free as ever.
                  </p>
                  <div className="flex md:justify-between">
                    <div>
                      <p>
                        <img
                          src="https://cdn.shopify.com/s/files/1/0016/3387/8116/files/img5_100x100.png?v=1613505344"
                          alt="tandoori"
                        />
                      </p>
                      <p className="md:text-4xl font-serif">170</p>
                      <p className="md:text-xl font-serif">Tandoori</p>
                    </div>
                    <div>
                      <p>
                        <img
                          src="https://cdn.shopify.com/s/files/1/0016/3387/8116/files/chi-2-png_100x100.png?v=1613504101"
                          alt="Lollipop"
                        />
                      </p>
                      <p className="md:text-4xl font-serif">524</p>
                      <p className="md:text-xl font-serif">Lollipop</p>
                    </div>
                    <div>
                      <p>
                        <img
                          src="https://cdn.shopify.com/s/files/1/0016/3387/8116/files/img5_100x100--1_100x100.png?v=1613506578"
                          alt="Breast"
                        />
                      </p>
                      <p className="md:text-4xl font-serif">175</p>
                      <p className="md:text-xl font-serif">Breast</p>
                    </div>
                    <div>
                      <p>
                        <img
                          src="https://cdn.shopify.com/s/files/1/0016/3387/8116/files/chi-4-png_100x100.png?v=1613504102"
                          alt="Strips"
                        />
                      </p>
                      <p className="md:text-4xl font-serif">300</p>
                      <p className="md:text-xl font-serif">Strips</p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        {/* test fade */}

        {/* test fade */}
      </div>
    );
};

export default Home;