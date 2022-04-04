import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = (props) => {
    const navigate = useNavigate();
    const navigateToReview = () =>{
        navigate('/review');
    }
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data.slice(0, 3)))
    }, [])
    return (
        <div className='mb-5'>
            <div className='d-flex flex-wrap flex-md-nowrap flex-lg-nowrap justify-content-center container-fluid img-fluid'>
                <div className='me-5 ps-5 ps-md-0 ps-lg-0'>
                    <h1 className='main-title text-uppercase text-center'>Capture Your Moments <span className='text-primary custom-text'>Flying</span></h1>
                    <h4>Buy The Drone And Make The Most Of Your Travel</h4>
                    {/* External link added */}
                   <a href="https://www.youtube.com/watch?v=rB3Ntbzitd0" target="_blank" rel="noreferrer">
                   <button className='btn btn-primary p-3 mt-4'>Demonstration</button>
                    </a> 
                </div>
                <div className='img-hover-zoom'>
                    <img className='rounded-3 mt-5' src="https://images.unsplash.com/photo-1512433457759-6222e69eade9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&height=420&q=100" alt="" />
                </div>
            </div>

            <h2 className='mt-5 mb-5 text-primary fw-bold'>Customer Reviews ({reviews.length})</h2>
            <div className='container d-flex flex-wrap flex-lg-nowrap flex-md-nowrap justify-content-between'>
                {
                    reviews.map(review => (
                        <div className='border border-primary ps-5 pe-5 m-2 rounded-3'>
                            <img alt='user' src={review.image} className='mx-auto rounded-circle mt-3'/>
                            <h4 className='text-warning fw-bold mt-2'>{review.name}</h4>
                            <span className='mt-3 mb-3'>{review.comment}</span>
                            <span className='mt-3 mb-3 star-rating d-flex justify-content-center align-items-center'>Ratings: {review.rating} <img className='ps-2' src="star.svg" alt="" /> </span>
                        </div>
                    ))
                }
            </div>
                <button onClick={navigateToReview} className='btn btn-primary p-2 mt-4'>See All Reviews</button>
        </div>
    );
};

export default Home;