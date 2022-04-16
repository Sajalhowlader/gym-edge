import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear()
    return (

        <div>
            <p className='text-center'>Copyright @{year} by &copy; Antu Howlader Sajal</p>
        </div>
    );
};

export default Footer;