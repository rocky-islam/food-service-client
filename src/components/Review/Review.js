import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Swal from "sweetalert2";
import ProductReviewAll from './ProductReviewAll';

const Review = () => {
    const {user, loading} = useContext(AuthContext);
    const {_id, title, price, img, rating, description} = useLoaderData();
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
      fetch(`http://localhost:5000/reviews?service=${_id}`)
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, [_id]);

    const handlePlaceReview = event =>{
        event.preventDefault();
        const form =event.target;
        const name = user?.displayName || 'N/A';
        const email = user?.email || 'N/A';
        const photo = user?.photoURL || 'N/A';
        const rating = form.rating.value;
        const message = form.review.value;

        console.log(name, photo, rating, message);

        const review = {
            service: _id,
            serviceName: title,
            serviceImg: img,
            price,
            user: name,
            email: email,
            userPhoto: photo,
            rating,
            message
        }
        
        fetch("http://localhost:5000/reviews",{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                Swal.fire("Review Placed done!", "", "success");
                form.reset();
                
            }
        })
        .catch(err => console.error(err));


    }

    if (loading) {
      return (
        <div className="text-center">
          <button className="btn btn-outline loading">loading...</button>
        </div>
      );
    }

    return (
      <div>
        <h1 className="text-center text-4xl">Details About "{title}"</h1>

        <div className="">
          <div className="flex justify-center m-4">
            <div className="drop-shadow-2xl border rounded-2xl m-12 md:w-3/6">
              <div className="flex border-2 border-lime-400 rounded-2xl justify-center">
                <img src={img} className="rounded-2xl" alt="" />
              </div>
              <div className="m-3">
                <div>
                  <div className="md:flex justify-between">
                    <h1 className="md:text-2xl font-semibold">{title}</h1>
                    <h1 className="md:text-xl font-semibold">
                      Price: ${price}
                    </h1>
                  </div>
                </div>
                <div className="my-4">
                  <h1>{description}</h1>
                </div>
              </div>
            </div>
          </div>
          {/* Review Now */}
          <div>
            <h1 className="text-center text-2xl font-medium">
              Review Now For <span className="text-orange-500"> {title}</span>
            </h1>
            <div>
              <div className="w-full">
                <div className="flex justify-center w-full">
                  {/* from */}

                  {user?.uid ? (
                    <>
                      <form onSubmit={handlePlaceReview} className=" w-1/2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Type here"
                            defaultValue={user?.displayName}
                            className="input input-bordered input-primary w-full "
                            readOnly
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Photo Url</span>
                          </label>
                          <input
                            type="text"
                            name="photoURL"
                            defaultValue={user?.photoURL}
                            readOnly
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Rating</span>
                          </label>
                          <input
                            type="text"
                            name="rating"
                            placeholder="Rating"
                            className="input input-bordered input-primary w-full "
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Your Review</span>
                          </label>
                          <textarea
                            type="text"
                            name="review"
                            placeholder="Your Review"
                            className="textarea textarea-bordered textarea-primary md:h-24 w-full"
                            required
                          />
                        </div>
                        <button type="submit" className="btn my-4 px-5">
                          SubMit
                        </button>
                      </form>
                    </>
                  ) : (
                    <>
                      <h1 className='text-3xl text-center'>Please login for Review</h1>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* show reviews */}
        <div>
          {/* <h1>this is review {reviews.length}</h1> */}
          {reviews.map((allReview) => (
            <ProductReviewAll
              key={allReview._id}
              allReview={allReview}
            ></ProductReviewAll>
          ))}
        </div>
        {/* show reviews */}
      </div>
    );
};

export default Review;