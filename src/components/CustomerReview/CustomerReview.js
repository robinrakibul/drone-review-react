import React, { useEffect, useState } from 'react';
import AllReviews from '../AllReviews.js/AllReviews';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='px-5 pb-5'>
            <h2 className='text-primary fw-bold mb-5'>Available Reviews: {reviews.length}</h2>
            <div className='d-grid row'>
                {
                    reviews.map(review=> (
                        <AllReviews key={review.id} review={review}></AllReviews>
                        ))
                }
            </div>
        </div>
    );
};

export default CustomerReview;