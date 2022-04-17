import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear()
    return (

        <div className='py-5'>
            <p className='text-center'>Copyright @{year} by &copy; Antu Howlader Sajal</p>
        </div>
    );
};

export default Footer;