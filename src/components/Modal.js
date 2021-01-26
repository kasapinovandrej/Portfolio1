import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Modal = (props) => {

    const closeModalOnBackdrop = (e) => {
        const imgbox = document.querySelector('.modal__img')
        if (e.target !== imgbox) {
            props.closeModal()
        }
    }

    return (
        <motion.div className="modal"
            initial={{ opacity: 0, y: '-100vh' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, ease: 'easeInOut' }}
            exit={{ opacity: 0, x: '-100vw' }}>
            <div className="modal__backdrop" onClick={(e) => closeModalOnBackdrop(e)}>
                <div className="modal__content">
                    <motion.img className="modal__img" src={props.image} alt={`${props.image}`}
                        whileTap={{ scale: 1.8 }}
                        while />
                    <motion.button className="modal__btn" onClick={props.closeModal}
                        transition={{ duration: .2 }}
                        whileHover={{ scale: 1.1, rotate: 180 }}
                        whileTap={{ scale: 0.9 }}
                    ><RiCloseLine className="modal__btn--icon" /></motion.button>
                </div>
            </div>
        </motion.div>
    )
}

export default Modal;
