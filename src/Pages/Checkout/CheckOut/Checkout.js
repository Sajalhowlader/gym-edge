import React, { useEffect, useState } from 'react';
import Footer from '../../Sheared/Footer/Footer';
import Header from '../../Sheared/Header/Header';
import ShowCheckOut from '../ShowCheckOut/ShowCheckOut';

const Checkout = () => {
    const [checkouts, setCheckouts] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setCheckouts(data))
    }, [])
    return (
        <div>
            <Header color="black" />
            <h1 className='text-center my-5'>BUY FROM HERE</h1>
            <div className='row gy-4 container mx-auto'>
                {
                    checkouts.map(checkout => <ShowCheckOut key={checkout.id} checkout={checkout} />)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;