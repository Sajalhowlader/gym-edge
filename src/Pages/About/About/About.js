import React from 'react';
import Header from '../../Sheared/Header/Header';
import me from '../../../images/me.jpg'
import './About.css'
import Footer from '../../Sheared/Footer/Footer';
const About = () => {
    return (
        <div>
            <Header color="black" />
            <h1 className='text-center my-5'>ABOUT ME</h1>
            <div className="about-me container">
                <div className="logo">
                    <img src={me} alt="" />
                </div>
                <div className="about-info">
                    <h2>Hi !</h2>
                    <h1>I'm <span>Sajal Howlader</span></h1>
                    <p>It is very possible that a new goal will necessitate learning a new skill or will require some form of personal growth.My future goal is to become a full stack web developer.I want to see myself as a creative web developer.After compleat my learning journey, I will try to get a gob in a reputed  company.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;