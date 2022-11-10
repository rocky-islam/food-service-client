import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateReview = () => {
  const storeReview = useLoaderData();

  // const [review, setReview] = useState();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const rating = form.rating.value;
    const message = form.review.value;
    console.log(rating, message);

    const review = {
      rating: rating,
      message: message,
    };

    fetch(
      `https://food-service-server-orpin.vercel.app/reviews/${storeReview._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Update done!", "", "success");
        }
        console.log(data);
      });
  };
  return (
    <div className="text-center">
      <h1>Update now {storeReview.message}</h1>
      <div>
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="email"
                    defaultValue={storeReview.rating}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">message</span>
                  </label>
                  <input
                    type="text"
                    name="review"
                    placeholder="text"
                    defaultValue={storeReview.message}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
