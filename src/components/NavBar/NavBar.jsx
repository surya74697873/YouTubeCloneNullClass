import { useState } from 'react';
import './NavBar.css';
import logo from './logo.ico';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RiVideoAddLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';

const NavBar = ({ seteditcreatechanelbtn, toggledrawer }) => {
    const currentuser = null; // Replace with actual user authentication logic

    return (
        <>
            <div className="Container_Navbar">
                <div className="Burger_Logo_Navbar">
                    <div className="burger" onClick={toggledrawer}>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <Link to="/" className="Logo_div_Navbar">
                        <img src={logo} alt="Logo" />
                        <p className="logo_div_navbar">YouTube</p>
                    </Link>
                </div>
                <RiVideoAddLine size={22} className="vid_bell_Navbar" />
                <div className="apps_box">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <p key={index} className="appBox"></p>
                    ))}
                </div>
                <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
                <div className="Auth_cont_Navbar">
                    {currentuser ? (
                        <div className="Channel_logo_App" onClick={() => seteditcreatechanelbtn(true)}>
                            <p className="fstChar_logo_App">
                                {currentuser?.result?.name
                                    ? currentuser.result.name.charAt(0).toUpperCase()
                                    : currentuser?.result?.email.charAt(0).toUpperCase()}
                            </p>
                        </div>
                    ) : (
                        <>
                            <BiUserCircle size={22} />
                            <b>Sign in</b>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

NavBar.propTypes = {
    seteditcreatechanelbtn: PropTypes.func.isRequired,
    toggledrawer: PropTypes.func.isRequired,
};

export default NavBar;