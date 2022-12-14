import React from 'react';
import { Link } from 'react-router-dom';
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({service}) => {
    const {_id, img, price, title, description} = service;
    return (
      <div>
        <div className="card card-compact md:w-96 bg-base-100 shadow-xl">
          <figure>
            <PhotoProvider>
              <PhotoView src={img}>
                <img src={img} alt={title} />
              </PhotoView>
            </PhotoProvider>
            {/* <img src={img} alt={title} /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Price: ${price}</p>
            <p>{description.slice(0, 100)}...</p>
            <div className="card-actions justify-center">
              <Link to={`/services/${_id}`}>
                <button className="btn btn-primary">More Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;