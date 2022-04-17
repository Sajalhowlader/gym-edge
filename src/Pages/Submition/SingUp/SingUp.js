import React, { useState } from 'react';
import Header from '../../Sheared/Header/Header';
import bgImg from '../../../images/loginImg/bg.svg'
import avatar from '../../../images/loginImg/avatar.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const SingUp = () => {
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmail = e => {
        setUserInfo({ ...userInfo, email: e.target.value })
    }
    const handlePassword = e => {
        setUserInfo({ ...userInfo, password: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    }
    if (user) {
        navigate("/login")
    }
    return (
        <div >
            <Header color="black" />
            <div className='login-container'>
                <form onSubmit={handleSubmit}>
                    <div className='login-info-container'>
                        <div className='login-logo'>
                            <img src={bgImg} alt="" />
                        </div>
                        <div className="login-info">
                            <div className='info'>
                                <img src={avatar} alt="" />
                                <h2 className=''>Welcome</h2>
                                <input className='sing-in-input' type="text" name="" id="" placeholder='Your Name' />

                                <input className='sing-in-input' type="email" name="" id="" placeholder='Your Email' onBlur={handleEmail} required />

                                <input className='sing-in-input' type="password" name="" id="" placeholder='Your password' onBlur={handlePassword} required />
                                <p className='sing-up-link'>Already Have an Account?

                                    <Link to='/login'>
                                        <strong className='first-res'> Log In</strong>
                                    </Link>
                                </p>
                                <input className='sing-up-btn' type="submit" value="SING UP" />
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SingUp;