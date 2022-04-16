import React from 'react';

const Shoservices = ({ service }) => {
    console.log(service)
    const { name } = service
    return (
        <div>
            <h1>name:{name}</h1>
        </div>
    );
};

export default Shoservices;