import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import ReviewRow from "./ReviewRow";

const MyReview = () => {
  const { user, loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("My Reviews");

  useEffect(() => {
    fetch(
      `https://food-service-server-orpin.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("You Want to delete");
    if (proceed) {
      fetch(`https://food-service-server-orpin.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Review Deleted Successful",
              showConfirmButton: true,
            });
            const remaining = reviews.filter((rvew) => rvew._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  if (loading) {
    return (
      <div className="text-center">
        <button className="btn btn-outline loading">loading...</button>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center">
        {reviews.length === 0 ? (
          <>
            <h1 className="text-3xl text-center my-2">You have No Review</h1>
          </>
        ) : (
          <>
            <h1 className="text-3xl text-center my-2">
              You have {reviews.length} review
            </h1>
          </>
        )}
      </div>

      <div>
        <div className="">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>message</th>
                  <th></th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody className="">
                {reviews.map((review) => (
                  <ReviewRow
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                  ></ReviewRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
