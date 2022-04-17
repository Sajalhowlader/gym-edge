import React from 'react';
import './Showservices.css'
const Shoservices = ({ service }) => {
    console.log(service)
    const { name, picture, price, description } = service
    return (
        <div class="col col-md-4">
            <div class="card h-100">
                <img className='img-fluid services-picture' src={picture} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h2>{price} TK</h2>
                    <p class="card-text">{description}</p>
                </div>
                <div class="">
                    <button className='checkout-btn'>CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default Shoservices;