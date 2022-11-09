import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const {title, } = useLoaderData();
    return (
        <div>
            <h1 className='text-center text-5xl'>this is review page</h1>
        </div>
    );
};

export default Review;