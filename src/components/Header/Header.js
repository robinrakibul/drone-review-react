import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    return (
        <div className='d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center mt-4 mb-4 container gap-5'>
                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='/review'>REVIEWS</CustomLink>
                <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink to='/blogs'>BLOGS</CustomLink>
        </div>
    );
};

export default Header;