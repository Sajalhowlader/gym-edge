import React, { useEffect, useState } from 'react';
import Header from '../../Sheared/Header/Header';
import bgImg from '../../../images/loginImg/bg.svg'
import avatar from '../../../images/loginImg/avatar.svg'
import './SingIn.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleLogo from '../../../images/loginImg/google3.png'
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingIn = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const [signInWithGoogle,
        googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })


    useEffect(() => {
        if (error || googleError) {
            if (error?.code === "auth/invalid-email") {
                toast("please provide a email")
            }
        } else {
            toast(error?.message)
            toast(googleError?.message)
        }
    }, [error, googleError])

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
    let from = location.state?.from?.pathname || "/";
    if (user || googleUser) {
        navigate(from, { replace: true })
    }
    const resetPassword = async () => {
        const email = userInfo.email
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('enter your email address')
        }

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
                        <div className='info'>
                            <form onClick={handleSubmit}>
                                <img src={avatar} alt="" />
                                <h2 className=''>Welcome</h2>
                                <input className='sing-in-input' type="email" name="" id="" placeholder='Your Email' onChange={handleEmail} required />

                                <input className='sing-in-input' type="password" name="" id="" placeholder='Your password' onBlur={handlePassword} required />

                                <p className='sing-up-link'>New Here?
                                    <Link to='/register'>
                                        <strong className='first-res'> Register First</strong>
                                    </Link>
                                </p>
                                <p >
                                    Forget Password? <strong onClick={resetPassword} className='forget-link'>Reset Password?</strong></p>
                                <input className='sing-up-btn' type="submit" value="SING IN" />
                                <div className='or-container'>
                                    <div />
                                    <p>or</p>
                                    <div />
                                </div>

                            </form>
                        </div>
                        <button onClick={handleGoogleSingIn} className='sing-up-btn google-btn'><img src={googleLogo} alt="" /> Continue With</button>
                    </div>
                </div>
                <ToastContainer />


            </div>
        </div>
    );
};

export default SingIn;