import React from 'react';
import './header.css';
import NavBar from './NavBar';
import Modal from './Modal';
import image1 from './assets/images/header.jpg';


function Header({setPage}){
    return(
        <header className = "header">
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <img src = {image1} className="header_logo" alt="The robot and human hand are close to clasping."/>
            <h1 className="header_title">Connect with ViVi Robot: Your AI Companions</h1>
            <NavBar setPage={setPage} className="header_nav"/>
            <Modal/>
        </header>
    );
}

export default Header;