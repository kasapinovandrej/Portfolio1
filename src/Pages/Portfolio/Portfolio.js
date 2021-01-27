import React from 'react';
import PortHero from '../../components/PagesHero';
import PortImg1 from '../../assets/img/PagesHeroImages/gallery1.png'
import PortImg2 from '../../assets/img/PagesHeroImages/gallery.png'
import Gallery from '../../components/Portfolio/Gallery';

const Portfolio = () => {
    return (
        <>
            <PortHero
                name="Portfolio"
                imgRight={PortImg1}
                imgLeft={PortImg2} />
            <Gallery />
        </>
    )
}

export default Portfolio;
