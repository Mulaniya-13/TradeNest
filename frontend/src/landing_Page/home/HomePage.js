import React from 'react';
import Awards from './Awards';
import Pricing from './Pricing';
import NavBar from '../NavBar';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Trust from './Trust';
import Education from './Education';
import Footer from '../Footer';


function HomePage() {
    return ( 
        <>
        <NavBar />
        <Hero />
        <Awards />
        <Trust />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
        </>
     );
}

export default HomePage;