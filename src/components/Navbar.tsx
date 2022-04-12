import React, { useRef } from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark shadow o-bg-primary" role="navigation">
            <div className="container d-flex justify-content-center">
                <div>
                    <span className="navbar-brand mb-0 h1">Aki Aoki 🏳️‍⚧️</span>
                </div>
                <div className="d-flex">
                    <a className="nav-item nav-link" href="/#introduction">Home</a>
                    <a className="nav-item nav-link" href="/#about">About</a>
                    <a className="nav-item nav-link" href="/#projects">Works</a>
                    <a className="nav-item nav-link" href="/#experience">Experience</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;