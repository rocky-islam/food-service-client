import React from 'react';

const ServiceCard = ({service}) => {
    const {img, price, title, description} = service;
    return (
      <div>
        <div className="card card-compact md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt={title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Price: ${price}</p>
            <p>{description.slice(0,100)}...</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">More Details</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;