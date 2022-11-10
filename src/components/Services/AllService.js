import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ServiceCard from './ServiceCard';

const AllService = () => {
    const {user,loading} = useContext(AuthContext)
    const [services, setServices] = useState([]);

    const handleAddService = event=>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const photoURL = form.photoURL.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        console.log(title, photoURL, price, rating, description);
        const services ={
            title: title,
            img: photoURL,
            price: price,
            rating: rating,
            description: description
        }
        // add services
        fetch("http://localhost:5000/services",{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Service Created Successful",
                  showConfirmButton: true,

                });
                form.reset();
            }
        })
        
    }

    // show service
    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, [services]);

    if (loading) {
      return (
        <div className='text-center'>
          <button className="btn btn-outline loading">loading...</button>
        </div>
      );
    }

    return (
      <div>
        <div className="text-center">
            
          <h1 className="text-5xl my-6 font-semibold text-orange-500">
            Our <span className="text-lime-600">Service</span>
          </h1>
          {/* modal */}
          <div>
            {/* The button to open modal */}
            {
              user?.uid ?
              <>
              <label htmlFor="my-modal-3" className="btn">
              Add More Services
            </label>
              </>
              :
              <>
              <h1 className='text-2xl'>Please <Link to='/login' className='text-lime-600'>Login</Link> to Add more service</h1>
              </>
            }

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-4xl relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">Please add Your service</h3>
                <div className="py-4 flex justify-center">
                  <div className="card shadow-2xl bg-base-100 w-3/4">
                    <form onSubmit={handleAddService} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Title</span>
                        </label>
                        <input
                          type="text"
                          name='title'
                          placeholder="title"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Photo URL</span>
                        </label>
                        <input
                          type="text"
                          name='photoURL'
                          placeholder="PhotoURL"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Price</span>
                        </label>
                        <input
                          type="text"
                          name='price'
                          placeholder="Price"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">rating</span>
                        </label>
                        <input
                          type="text"
                          name='rating'
                          placeholder="Rating"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Description</span>
                        </label>
                        <textarea
                          className="textarea textarea-primary"
                          name='description'
                          placeholder="Description"
                        ></textarea>
                      </div>
                      <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Added</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* modal */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center my-8">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    );
};

export default AllService;