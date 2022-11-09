import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const {title, price, img, rating, description} = useLoaderData();
    return (
      <div>
        <h1 className="text-center text-5xl">this is review page</h1>

            <div className=''>
                <div className='flex justify-center m-4'>
                    <div className='drop-shadow-2xl border rounded-2xl m-12 md:w-3/6'>
                        <div className='flex border-2 border-lime-400 rounded-2xl justify-center'>
                            <img src={img} className='rounded-2xl' alt="" />
                        </div>
                        <div className='m-3'>
                            <div>
                                <div className='md:flex justify-between'>
                                    <h1 className='md:text-2xl font-semibold'>{title}</h1>
                                    <h1 className='md:text-xl font-semibold'>Price: ${price}</h1>
                                </div>
                            </div>
                            <div className='my-4'>
                                <h1>{description}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default Review;