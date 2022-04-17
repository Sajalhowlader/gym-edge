import React, { useEffect, useState } from 'react';
import Shoservices from '../ShowServices/Shoservices';
const Ourservices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <div className='services-container'>
            <h2 className='text-center mb-5'>MY SERVICES</h2>
            <div className='row gy-4 container mx-auto'>
                {
                    services.map(service => <Shoservices key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Ourservices;