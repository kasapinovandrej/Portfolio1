import React from 'react'
import HeroImage from '../../assets/img/Hero.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__wrap">
                <div className="hero__text">
                    <motion.h2 className="hero__h2"
                        initial={{ opacity: 0, x: '-100vw' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, type: 'spring' }}>Hello,</motion.h2>
                    <motion.h3 className="hero__h3"
                        initial={{ opacity: 0, x: '-100vw' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.5, type: 'spring' }}>my name is</motion.h3>
                    <motion.h1 className="hero__h1"
                        initial={{ opacity: 0, x: '-100vw' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3, delay: 1, type: 'spring' }}>Andrej Kasapinov</motion.h1>
                    <motion.p className="hero__p"
                        initial={{ opacity: 0, x: '-100vw' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 6, delay: 2, type: 'spring' }}>By formal education I am a graduated economist, but with a great desire to pursue web development as a primary occupation.</motion.p>
                    <Link to="/portfolio"><button className="hero__button hero__button--work">My Work</button></Link>
                    <Link to="/contact"><button className="hero__button hero__button--contact">Contact Me</button></Link>
                </div>
                <div className="hero__image">
                    <img src={HeroImage} className="hero__img" alt="Hero" />
                </div>
            </div>
        </section>
    )
}

export default Hero
