import React from 'react';

const Hero = (props) => {
    return (
        <section className="port">
            <div className="port__wrap">
                {props.imgLeft ? <img className="port__image port__image--left" src={props.imgLeft} alt={`${props.imgLeft}`} /> : null}
                <h1 className="port__h1">{props.name}</h1>
                {props.imgRight ? <img className="port__image port__image--right" src={props.imgRight} alt={`${props.imgRight}`} /> : null}
            </div>
        </section>
    )
}

export default Hero
