import React from 'react';
import { ImInstagram, ImLinkedin, ImFacebook2, ImPhone } from 'react-icons/im';
import { FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__contact">
                    <a className="header__a" href='tel:063/78-28-541'><ImPhone /> <p className="header__p">063/78-28-541</p> </a>
                    <a className="header__a" href='mailto:kasapinovandrej@gmail.com'><FaEnvelope /> <p className="header__p">kasapinovandrej@gmail.com</p> </a>
                </div>
                <div className="header__social">
                    <motion.a whileHover={{ scale: 1.1 }} className="header__a" href='https://www.facebook.com/andrej.kasapinov' target='_blank' rel="noreferrer"><ImFacebook2 /></motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} className="header__a" href='https://www.instagram.com/andrej.kasapinov/' target='_blank' rel="noreferrer"><ImInstagram /></motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} className="header__a" href='https://www.linkedin.com/in/andrej-kasapinov-19132427/' target='_blank' rel="noreferrer"><ImLinkedin /></motion.a>
                </div>

            </div>
        </header>
    )
}

export default Header
