import React from 'react';

const ProductReviewAll = ({allReview}) => {
    console.log(allReview);
    const {user, userPhoto, rating, message} = allReview;
    
    return (
        <div>
            <div className='flex m-6 border-2 items-center '>
                <div className='m-4'>
                    <img src={userPhoto} alt="" className='mask mask-circle w-20' />
                    <p>Name: {user}</p>
                </div>
                <div>
                    
                    <p className='text-lg font-normal'>Rating: {rating}</p>
                    <p className='text-xl font-medium font-mono'>User Review: {message}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductReviewAll;