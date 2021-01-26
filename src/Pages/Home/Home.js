import React from 'react';
import AboutMe from '../../components/HomePage/AboutMe';
import Hero from '../../components/HomePage/Hero';
import Experience from '../../components/HomePage/Experience';
import Testimonies from '../../components/HomePage/Testimonies';
import LearningResources from '../../components/HomePage/LearningResources';





const Home = () => {
    return (
        <>
            <Hero />
            <AboutMe />
            <LearningResources />
            <Experience />
            <Testimonies />
        </>
    )
}

export default Home;
