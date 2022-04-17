import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../images/header-logo.png'
const Header = ({ color }) => {

    const navigate = useNavigate()

    const handleSingUpBtn = () => {
        navigate("/login")
    }




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
                        {/* <NavLink className="nav-link active" aria-current="page" to="/Schedule">SCHEDULE</NavLink> */}
                        <NavLink className="nav-link active menu-link" aria-current="page" to="/services">SERVICES</NavLink>
                        <NavLink className="nav-link active menu-link" aria-current="page" to="/about">ABOUT</NavLink>
                        <NavLink className="nav-link active menu-link" aria-current="page" to="/contacts">CONTACTS</NavLink>
                    </ul>

                    <button onClick={handleSingUpBtn} className="btn btn-outline-success" type="submit">SING IN</button>

                </div>
            </div>
        </nav>
    );
};

export default Header;