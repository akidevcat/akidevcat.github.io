import React, { useRef } from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark shadow o-bg-primary d-print-none" role="navigation">
            <div className="container d-flex justify-content-center">
                <div>
                    <span className="navbar-brand mb-0 h1">AkiDevCat</span>
                </div>
                <div className="d-flex">
                    <a className="nav-item nav-link" onClick={() => document.getElementById('introduction')?.scrollIntoView()}>Home</a>
                    <a className="nav-item nav-link" onClick={() => document.getElementById('about')?.scrollIntoView()}>About</a>
                    <a className="nav-item nav-link" onClick={() => document.getElementById('projects')?.scrollIntoView()}>Works</a>
                    <a className="nav-item nav-link" onClick={() => document.getElementById('experience')?.scrollIntoView()}>Experience</a>
                    <a className="nav-item nav-link" href="/#/ru">Перейти на Русский</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;