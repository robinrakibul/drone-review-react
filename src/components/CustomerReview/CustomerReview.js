import React, { useEffect, useState } from 'react';
import AllReviews from '../AllReviews/AllReviews';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='px-5 pb-5'>
            <p className='text-warning mb-5'>Available Reviews: {reviews.length}</p>
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

export default CustomerReview;<h1>Review Page</h1>