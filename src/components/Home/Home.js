import React from 'react';
import Typewriter from "typewriter-effect";
import banner from '../../assets/images/section-side-banner.gif'
import chicken from '../../assets/images/chicken.jpg'


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
        {/* middle section of chicken */}
        <div>
          <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className="w-1/2">
                <img alt="" src={chicken} className=" rounded-lg shadow-2xl" />
              </div>
              <div className="w-1/2">
                <h1 className="text-3xl font-bold">Feel the Sound of Taste</h1>
                <p className="py-6">
                  Curabitur ullamcorper ultricies unless. Even CNN. Maecenas
                  time, the earth needs the sauce of the rhoncus, let it be as
                  free as ever.
                </p>
                <div className="flex justify-between">
                  <div>
                    <p>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0016/3387/8116/files/img5_100x100.png?v=1613505344"
                        alt="tandoori"
                      />
                    </p>
                    <p className="text-4xl font-serif">170</p>
                    <p className="text-xl font-serif">Tandoori</p>
                  </div>
                  <div>
                    <p>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0016/3387/8116/files/chi-2-png_100x100.png?v=1613504101"
                        alt="Lollipop"
                      />
                    </p>
                    <p className="text-4xl font-serif">524</p>
                    <p className="text-xl font-serif">Lollipop</p>
                  </div>
                  <div>
                    <p>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0016/3387/8116/files/img5_100x100--1_100x100.png?v=1613506578"
                        alt="Breast"
                      />
                    </p>
                    <p className="text-4xl font-serif">175</p>
                    <p className="text-xl font-serif">Breast</p>
                  </div>
                  <div>
                    <p>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0016/3387/8116/files/chi-4-png_100x100.png?v=1613504102"
                        alt="Strips"
                      />
                    </p>
                    <p className="text-4xl font-serif">300</p>
                    <p className="text-xl font-serif">Strips</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;