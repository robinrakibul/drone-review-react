import React, { useEffect, useState } from 'react';

const CustomerReview = () => {
    const [review, setReview] = useState({})
    useEffect(() => {
        const url = 'review.json';
        fetch(url)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setReview(data)
          })
      }, [])
    return (
        <div>
            
        </div>
    );
};

export default CustomerReview;