import React, { useEffect, useState } from 'react';
import Header from '../../Sheared/Header/Header';
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
        <div>
            <Header color="black" />
            <div className='row'>
                {
                    services.map(service => <Shoservices key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Ourservices;