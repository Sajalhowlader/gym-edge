import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/header-logo.png'
const Header = ({ color }) => {

    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const handleSingUpBtn = () => {
        navigate("/login")
    }

    const handleSingOutBtn = () => {
        signOut(auth);
    };




    return (
        <nav style={{ background: color }} className="navbar navbar-expand-lg ">
            <div className="container nav-items-container">
                <div>
                    <img className='img-fluid' src={logo} alt="" />
                </div>
                <button className="navbar-toggler bg-light text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavLink className="nav-link active menu-link" aria-current="page" to="/home">HOME</NavLink>
                        <NavLink className="nav-link active menu-link" aria-current="page" to="/checkout">CHECKOUT</NavLink>
                        <NavLink className="nav-link active menu-link" aria-current="page" to="/about">ABOUT</NavLink>
                        <NavLink className="nav-link active menu-link" aria-current="page" to="/contacts">CONTACTS</NavLink>
                    </ul>

                    {
                        user ?
                            <button onClick={handleSingOutBtn} className="btn btn-outline-success" type="submit">SING OUT</button>
                            :
                            <button onClick={handleSingUpBtn} className="btn btn-outline-success" type="submit">SING IN</button>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Header;