import React from 'react';
import { ImInstagram, ImLinkedin, ImFacebook2, ImPhone } from 'react-icons/im';
import { FaEnvelope } from 'react-icons/fa'

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="header__contact">
                    <a className="header__a" href='tel:063/78-28-541'><ImPhone /> <p className="header__p">063/78-28-541</p> </a>
                    <a className="header__a" href='mailto:kasapinovandrej@gmail.com'><FaEnvelope /> <p className="header__p">kasapinovandrej@gmail.com</p> </a>
                </div>
                <div className="header__social">
                    <a className="header__a" href='https://www.facebook.com/andrej.kasapinov' target='_blank'><ImFacebook2 /></a>
                    <a className="header__a" href='https://www.instagram.com/andrej.kasapinov/' target='_blank'><ImInstagram /></a>
                    <a className="header__a" href='https://www.linkedin.com/in/andrej-kasapinov-19132427/' target='_blank'><ImLinkedin /></a>
                </div>

            </div>
        </header>
    )
}

export default Header
