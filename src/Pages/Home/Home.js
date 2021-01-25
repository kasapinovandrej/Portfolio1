import React from 'react';
import AboutMe from '../../components/HomePage/AboutMe';
import Hero from '../../components/HomePage/Hero';
import Experience from '../../components/HomePage/Experience';
import Testimonies from '../../components/HomePage/Testimonies';



const Home = () => {
    return (
        <>
            <Hero />
            <AboutMe />
            <Experience />
            <Testimonies />
        </>
    )
}

export default Home;
