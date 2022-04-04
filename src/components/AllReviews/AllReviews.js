import React from 'react';
import './AllReviews.css';
const AllReviews = ({ review }) => {
    return (
        <div className='col-12 rounded-3 mb-5 p-3 border border-primary'>
        <div>
          <div>
            <div>
              <img alt='user' src={review.image} className='mx-auto rounded-circle mt-3'/>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-end'>
            <h4 className='text-warning mt-2'>{review.name}</h4>
            <span className='text-white mt-3 mb-3'>{review.comment}</span>
            <span className='text-white mt-3 mb-3 star-rating d-flex justify-content-center align-items-center'>Ratings: {review.rating} <img className='ps-2' src="star.svg" alt="" /> </span>
          </div>
        </div>
    </div>
    );
};

export default AllReviews;