import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch("http://localhost:5000/services")
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[])

    return (
      <div>
        <div className="text-center">
          <h1 className="text-5xl my-6 font-semibold text-orange-500">
            Our Service <span className="text-lime-600">Area</span>
          </h1>
          {/* <h1> we have {services.length}</h1> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {services.slice(0,3).map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className='text-center'>
            <Link to='/services' className='btn bg-orange-500 border-none hover:bg-lime-600 px-10'>See All</Link>
        </div>
      </div>
    );
};

export default Services;