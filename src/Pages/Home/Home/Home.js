import React from 'react';
import Header from '../../Sheared/Header/Header';
import instructorLogo from '../../../images/trainer.png'
import './Home.css'
import Choose from '../Choose/Choose';
const Home = () => {
    return (
        <div className='home-container'>
            <Header />
            <div className="instructor">
                <div className="instructor-logo">
                    <img className='img-fluid' src={instructorLogo} alt="" />
                </div>
                <div className='instructor-info'>
                    <h2>Hi</h2>
                    <h1>I'm <span>Antu Howlader</span></h1>
                    <p>Body Building and Yoga Instructor </p>
                    <button>About me</button>
                </div>
            </div>
            <Choose />
        </div>

    );
};

export default Home;