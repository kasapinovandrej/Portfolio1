import React from 'react';
import { SiGithub } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'
import GalleryData from '../../Data/GalleryData';

const Gallery = () => {
    return (

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
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
















        // <section className="gallery">
        //     <div className="gallery__wrap">
        //         <h2 className="about__h2">Work <span className="about__span">Gallery</span></h2>
        //         <div className="gallery__box">
        //             <div className="gallery__cardwrap">
        //                 <div className="gallery__card">
        //                     <img src={Slika} alt="redalert" className="gallery__image" />
        //                     <div className="gallery__overlay">
        //                         <div className="gallery__content">
        //                             <a target="_blank" rel="noreferrer" href="https://digitalsolution.rs/" className="gallery__a"><SiNetlify className="gallery__icon" /></a>
        //                             <a target="_blank" rel="noreferrer" href="https://github.com/kasapinovandrej/DigitSol3.1" className=" gallery__a"><SiGithub className="gallery__icon" /></a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="gallery__description">
        //                 <h3 className="gallery__h3">Digital Solution</h3>
        //                 <p className="gallery__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iure dolores esse dicta quae praesentium doloremque, quasi nulla dolor et illum possimus asperiores officia? Laboriosam sed voluptatibus reprehenderit dolores consequuntur!</p>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Gallery
