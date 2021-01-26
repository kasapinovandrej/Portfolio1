import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo2.png'
import { ImInstagram, ImLinkedin, ImFacebook2, ImPhone, ImGithub } from 'react-icons/im';
import { FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <Link to="/"><img src={Logo} alt="Logo" className="footer__logo" /></Link>
                {/* <Link to="/contact"><button className="hero__button">Contact Me</button></Link> */}
                <div className="footer__iconbox">
                    <motion.a whileHover={{ scale: 1.1 }} className="footer__a" href='tel:063/78-28-541'><ImPhone /></motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} className="footer__a" href='mailto:kasapinovandrej@gmail.com'><FaEnvelope /></motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} className="footer__a" href='https://www.facebook.com/andrej.kasapinov' target='_blank' rel="noreferrer"><ImFacebook2 /></motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} className="footer__a" href='https://www.instagram.com/andrej.kasapinov/' target='_blank' rel="noreferrer"><ImInstagram /></motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} className="footer__a" href='https://www.linkedin.com/in/andrej-kasapinov-19132427/' target='_blank' rel="noreferrer"><ImLinkedin /></motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} className="footer__a" href='https://github.com/kasapinovandrej' target='_blank' rel="noreferrer"><ImGithub /></motion.a>
                </div>
                <div className="footer__rights"><p>Copyright &copy; 2021, Andrej Kasapinov</p></div>
            </div>
        </footer>
    )
}

export default Footer
