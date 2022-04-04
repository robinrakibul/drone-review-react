import React, { useEffect, useState } from 'react';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <h3>Total Reviews Available: {reviews.length}</h3>
            {
                reviews.map(review=><p>{review.name}</p>)
            }
        </div>
    );
};

export default CustomerReview;<h1>Review Page</h1>