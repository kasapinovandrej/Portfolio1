import React from 'react';
import { SiGithub } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'
import GalleryData from '../../Data/GalleryData';

const Gallery = () => {
    return (<>
        <section className="gallery">
            <div className="gallery__wrap">
                <h2 className="about__h2">Work <span className="about__span">Gallery</span></h2>
                <div className="gallery__boxwrap">
                    {GalleryData.map(element => {
                        return (
                            <div className="gallery__box" key={`${element.link}`}>
                                <div className="gallery__cardwrap" >
                                    <img src={element.image} alt={element.title} className="gallery__image" />
                                    <div className="gallery__overlay">
                                        <div className="gallery__content">
                                            <a href={element.link} className="gallery__a" target="_blank" rel="noreferrer" ><FiExternalLink className="gallery__icon" /></a>
                                            <a target="_blank" rel="noreferrer" href={element.git} className=" gallery__a"><SiGithub className="gallery__icon" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__description">
                                    <h3 className="gallery__h3">{element.title}</h3>
                                    <p className="gallery__p">{element.desc}</p>
                                    <p className="gallery__p2">Design: {element.design}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    </>
    )
}

export default Gallery
