import React from 'react';
import { Link } from "react-router-dom";
import { BubblyLink } from "react-bubbly-transitions";
import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';

import "animate.css/animate.css";

function Navbar(props) {

    const [navbar, setNavbar] = useState(false);


    console.log("nav", props.data.length);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light animate__animated animate__fadeInUp">
            <div className="container">
                <BubblyLink to='/'>
                    <span className="navbar-brand">iCoder</span>
                </BubblyLink>
                {/* <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <button
                    className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"
                    onClick={() => setNavbar(!navbar)}
                >
                    <Hamburger
                        role='button'
                        color='#000000'
                        direction="right"
                        size={25}
                    />
                </button>
                <div className={`collapse navbar-collapse ${navbar ? "text-center" : ""}`} id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className={`nav-item ${navbar ? 'animate__animated animate__fadeInLeft first' : ''}`}>
                            <BubblyLink to='/'>
                                <span className="nav-link active">Home</span>
                            </BubblyLink>
                        </li>
                        <li className={`nav-item  position-relative ${navbar ? 'animate__animated animate__fadeInLeft sec' : ''}`}>
                            <BubblyLink to='/cart'>
                                <span className="nav-link"><i className="fa-solid fa-cart-shopping text-dark fs-5"></i></span>
                                <span className="cart-count text-white bg-danger rounded-circle px-1 py-0">{props.data.length}</span>
                            </BubblyLink>
                        </li>
                    </ul>
                    <form className={`d-flex justify-content-center my-2 my-lg-0 ${navbar ? 'animate__animated animate__fadeInLeft thir' : ''}`}>
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;