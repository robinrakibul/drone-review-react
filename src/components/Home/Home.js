import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='d-flex flex-wrap justify-content-center container-fluid img-fluid'>
                <div className='me-5'>
                    <h1 className='main-title text-uppercase'>Capture Your Moments <span className='text-primary custom-text'>Flying</span></h1>
                    <h4>Buy The Drone And Make The Most Of Your Travel</h4>
                    <button className='btn btn-primary p-3 mt-4'>Demonstration</button>
                </div>
                <div className='img-hover-zoom'>
                    <img className='rounded-3 mt-5' src="https://images.unsplash.com/photo-1512433457759-6222e69eade9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&height=420&q=100" alt="" />
                </div>
            </div>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;