import React from 'react';
import './Showservices.css'
const Shoservices = ({ service }) => {
    console.log(service)
    const { name, picture, price, description } = service
    return (
        <div className="col-12 col-md-4">
            <div className="card h-100 services-info-container">
                <img src={picture} className="img-fluid " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h2>{price} TK</h2>
                    <p className="card-text">{description}</p>
                </div>
                <div className="">
                    <button className='checkout-btn'>CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default Shoservices;