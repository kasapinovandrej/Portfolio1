import React from 'react'

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal__backdrop">
                <img src={props.image} alt={`${props.image}`} />
            </div>
        </div>
    )
}

export default Modal;
