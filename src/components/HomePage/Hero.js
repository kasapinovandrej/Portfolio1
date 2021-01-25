import React from 'react'
import HeroImage from '../../assets/img/Hero.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__wrap">
                <div className="hero__text">
                    <h2 className="hero__h2">Hello,</h2>
                    <h3 className="hero__h3">my name is</h3>
                    <h1 className="hero__h1">Andrej Kasapinov</h1>
                    <p className="hero__p">By formal education I am a graduated economist, but with a great desire to pursue web development as a primary occupation.</p>
                    <button className="hero__button hero__button--work">My Work</button>
                    <button className="hero__button hero__button--contact">Contact Me</button>
                </div>
                <div className="hero__image">
                    <img src={HeroImage} className="hero__img" alt="Hero" />
                </div>
            </div>
        </div>
    )
}

export default Hero