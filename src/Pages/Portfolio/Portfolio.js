import React from 'react';
import PortHero from '../../components/PagesHero';
import PortImg1 from '../../assets/img/PagesHeroImages/gallery1.png'
import PortImg2 from '../../assets/img/PagesHeroImages/gallery.png'
import Gallery from '../../components/Portfolio/Gallery';
import Knowledge from '../../components/Portfolio/Knowledge';

const Portfolio = () => {
    return (
        <>
            <PortHero
                name="Portfolio"
                imgRight={PortImg1}
                imgLeft={PortImg2} />
            <Gallery />
            <Knowledge />
        </>
    )
}

export default Portfolio;
