import React from 'react';
import Hero from './Hero';
import EquityCurrencyCommodity from './EquityCurrencyCommodity';
import ChargesAccountOpening from './ChargesAccountOpening';
import DematAMC from './DematAMC';
import ChargesForAdditional from './ChargesForAdditional';
import ChargesExplained from './ChargesExplained';
import Footer from '../Footer';

function PricingPage() {
    return ( 
        <>
        <Hero />
        <EquityCurrencyCommodity />
        <ChargesAccountOpening />
        <DematAMC />
        <ChargesForAdditional />
        <ChargesExplained />
        <Footer />
        </>
     );
}

export default PricingPage;