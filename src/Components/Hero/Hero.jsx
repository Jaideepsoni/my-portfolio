import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Building Digital Experiences That Inspire</h2>
                <p>
                    Passionate Frontend Developer | Transform Ideas into Seamless and Visual stunning Web Solutions
                </p>
            </div>
            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img className='react-logo' src="./Assets/Images/React.png" alt="" />
                    </div>

                    <img src="./Assets/Images/main-image.png" alt="" />
                </div>
                <div className='sec-child'>
                    <div className="tech-icon">
                        <img className='logo-image' src="./Assets/Images/HTML.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img className='logo-image' src="./Assets/Images/CSS.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img className='logo-image' src="./Assets/Images/JavaScript.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img className='logo-image' src="./Assets/Images/python.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero