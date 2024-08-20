import React from 'react';
import styles from './home_screen.css'; // Importing the CSS file for styling

const HomeScreen = () => {
    return (
        <div className="home-screen">
            <header className="navbar">
                <div className="logo">VConnect</div>
                <nav className="menu">
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact Us</a>
                </nav>
                <div className="login-signup">
                    <button>Log In / Sign Up</button>
                </div>
            </header>

            <section className="banner"  style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg2.jpg)`,
        backgroundSize: 'cover', // Adjust the image size
        backgroundPosition: 'center', // Position the image
        height: '43vh', // Set the height of the section
            }}>
                <h1>VCONNECT</h1>
                <p className="brief">AN ONLINE PLATFORM WHERE BRILLENT MINDS<br/>  CAN WORK ON A PROJECT FROM DIFFERENT<br/> CORNERS OF THE GLOBE</p>
                <p className="completed-projects">COMPLETED OVER 3000+ PROJECTS</p>
            </section>

            <div className="domains">
                <h2>STUDENTS FROM MORE THAN 10+ DOMAINS</h2>
                <div className="domain-list">
                    <div className="domain">
                        <img className="img" src={`${process.env.PUBLIC_URL}/research_icon.png`} alt="Research"/>
                        <p>RESEARCH</p>
                    </div>
                    <div className="domain">
                        <img className="img" src={`${process.env.PUBLIC_URL}/it_icon.png`} alt="IT"/>
                        <p>IT</p>
                    </div>
                    <div className="domain">
                        <img className="img" src={`${process.env.PUBLIC_URL}/medical_icon.png`} alt="Medical"/>
                        <p>MEDICAL</p>
                    </div>
                    <div className="domain">
                        <img className="img" src={`${process.env.PUBLIC_URL}/law_icon.png`} alt="Law"/>
                        <p>LAW</p>
                    </div>
                    <div className="domain">
                        <img className="img" src={`${process.env.PUBLIC_URL}/managment_icon.png`} alt="Management"/>
                        <p>MANAGEMENT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
