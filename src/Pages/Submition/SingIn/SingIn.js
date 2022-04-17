import React, { useState } from 'react';
import Header from '../../Sheared/Header/Header';
import bgImg from '../../../images/loginImg/bg.svg'
import avatar from '../../../images/loginImg/avatar.svg'
import './SingIn.css'
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleLogo from '../../../images/loginImg/google3.png'
import auth from '../../../firebase.init';
const SingIn = () => {

    const navigate = useNavigate()

    const [signInWithGoogle,
        googleUser,
        GoogleLoading,
        googleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const handleEmail = e => {
        setUserInfo({ ...userInfo, email: e.target.value })
    }
    const handlePassword = e => {
        setUserInfo({ ...userInfo, password: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }
    const handleGoogleSingIn = () => {
        signInWithGoogle()
    }
    if (error) {
        alert('kecu akta')
    }
    if (user) {
        navigate("/home")
    }
    return (
        <div >
            <Header color="black" />
            <div className='login-container'>

                <div className='login-info-container'>
                    <div className='login-logo'>
                        <img src={bgImg} alt="" />
                    </div>
                    <div className="login-info">
                        <form onClick={handleSubmit}>
                            <div className='info'>
                                <img src={avatar} alt="" />
                                <h2 className=''>Welcome</h2>
                                <input className='sing-in-input' type="email" name="" id="" placeholder='Your Email' onBlur={handleEmail} required />

                                <input className='sing-in-input' type="password" name="" id="" placeholder='Your password' onBlur={handlePassword} required />
                                <p className='sing-up-link'>New Here?
                                    <Link to='/register'>
                                        <strong className='first-res'> Register First</strong>
                                    </Link>
                                </p>

                                <input className='sing-up-btn' type="submit" value="SING IN" />
                                <div className='or-container'>
                                    <div />
                                    <p>or</p>
                                    <div />
                                </div>
                                <button onClick={handleGoogleSingIn} className='sing-up-btn google-btn'><img src={googleLogo} alt="" /> Continue With</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SingIn;