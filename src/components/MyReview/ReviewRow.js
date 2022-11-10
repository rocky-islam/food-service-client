import React from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({review,handleDelete}) => {
    const {_id, serviceName, price, rating, message, serviceImg} =review;

    
    return (
      <div>
        <tr>
          <th>
            <label>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error"
              >
                X
              </button>
            </label>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={serviceImg} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{serviceName}</div>
                <div className="text-sm opacity-50">Price: {price}</div>
              </div>
            </div>
          </td>
          <td>
            {message}
            <br />
            <span className="badge badge-ghost badge-sm">Rating: {rating}</span>
          </td>
          <td></td>
          <th>
            <Link to={`/update/${_id}`}>
              <button className="btn btn-info ">Update</button>
            </Link>
          </th>
        </tr>
      </div>
    );
};

export default ReviewRow;