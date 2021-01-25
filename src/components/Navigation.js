import React, { useState } from 'react'
import Logo from '../assets/img/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { motion, AnimatePresence } from "framer-motion";



const Navigation = () => {

    let [toggleButton, setToggleButton] = useState(false);

    const navButtonHandler = () => {
        setToggleButton(toggleButton => !toggleButton)
    }
    const closeModal = (e) => {
        setToggleButton(toggleButton => toggleButton = false)
    }

    return (
        <nav className="nav" >
            <div className="nav__wrap">
                <div className="nav__logobox">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="nav__logo" />
                    </Link>
                </div>
                <div className="nav__buttondiv">
                    <motion.button className="nav__button" onClick={navButtonHandler}
                        transition={{ duration: .2 }}
                        whileHover={{ scale: 1.1, rotate: 180}}
                        whileTap={{ scale: 0.9 }}
                    >{toggleButton ? <RiCloseLine className="nav__buttonicon" /> : <RiMenuLine className="nav__buttonicon" />}</motion.button>
                    <AnimatePresence exitBeforeEnter>
                        {toggleButton ?
                            <motion.div className="nav__modal" onClick={closeModal}
                                initial={{ opacity: 0, y: '-100vh' }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5, ease: 'easeInOut' }}
                                exit={{ opacity: 0, y: '-100vh' }}>
                                <div className="nav__modalbackground">
                                    <ul className="nav__list">
                                        <li onClick={closeModal}><NavLink className="nav__link" exact to='/'>Home</NavLink></li>
                                        <li onClick={closeModal}><NavLink className="nav__link" to='/portfolio'>Portfolio</NavLink></li>
                                        <li onClick={closeModal}><NavLink className="nav__link" to='/contact'>Contact</NavLink></li>
                                    </ul>
                                </div>
                            </motion.div>
                            : null}
                    </AnimatePresence>
                </div>
            </div>


        </nav>
    )
}

export default Navigation
