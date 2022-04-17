import React from 'react';
import Header from '../../Sheared/Header/Header';
import bgImg from '../../../images/loginImg/bg.svg'
import avatar from '../../../images/loginImg/avatar.svg'
import './SingIn.css'
const SingIn = () => {
    return (
        <div >
            <Header color="black" />
            <div className='login-container'>
                <form>
                    <div className='login-info-container'>
                        <div className='login-logo'>
                            <img src={bgImg} alt="" />
                        </div>
                        <div className="login-info">
                            <div className='info'>
                                <img src={avatar} alt="" />
                                <h2 className=''>Welcome</h2>
                                <input className='sing-in-input' type="email" name="" id="" placeholder='Your Email' />
                                <input className='sing-in-input' type="password" name="" id="" placeholder='Your password' />
                                <p>New Here? <strong className='first-res'>Resister first</strong></p>
                                <input className='sing-up-btn' type="submit" value="SING UP" />
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SingIn;