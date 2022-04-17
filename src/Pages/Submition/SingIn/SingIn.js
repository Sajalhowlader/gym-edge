import React from 'react';
import Header from '../../Sheared/Header/Header';
import bgImg from '../../../images/loginImg/bg.svg'
import avatar from '../../../images/loginImg/avatar.svg'
import './SingIn.css'
import { Link } from 'react-router-dom';
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
                                <p className='sing-up-link'>New Here?
                                    <Link to='/register'>
                                        <strong className='first-res'> Register First</strong>
                                    </Link></p>

                                <input className='sing-up-btn' type="submit" value="SING IN" />

                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SingIn;