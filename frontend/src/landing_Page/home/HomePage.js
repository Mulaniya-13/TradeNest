import React from 'react';
import Connect from './Connect';
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
        <OpenAccount />
        <Trust />
        <Connect />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
        </>
     );
}

export default HomePage;