import React, { useRef } from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark shadow o-bg-primary d-print-none" role="navigation">
            <div className="container d-flex justify-content-center">
                <div>
                    <span className="navbar-brand mb-0 h1">AkiDevCat</span>
                </div>
                <div className="d-flex">
                    <a className="nav-item nav-link" onClick={() => document.getElementById('introduction')?.scrollIntoView()}>Начало</a>
                    <a className="nav-item nav-link" onClick={() => document.getElementById('about')?.scrollIntoView()}>Обо мне</a>
                    <a className="nav-item nav-link" onClick={() => document.getElementById('projects')?.scrollIntoView()}>Мои Работы</a>
                    <a className="nav-item nav-link" onClick={() => document.getElementById('experience')?.scrollIntoView()}>Опыт</a>
                    <a className="nav-item nav-link" href="/">Switch to English</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;