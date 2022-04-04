import React from 'react';

const Error404 = () => {
    return (
        <div>
            <img className='w-50' src="error.png" alt="not found" />
            <p className='text-center p-2'>😭 Sorry, the page you're looking for, is not available.</p>
        </div>
    );
};

export default Error404;