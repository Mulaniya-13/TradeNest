import React from 'react';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Investment from './Investment';
import Steps from './Steps';
import Benefits from './Benefits';
import AccountType from './AccountType';
import FAQs from './FAQs';
import Footer from '../Footer';

function SignUpPage() {
    return ( 
        <>
        <Hero />
        <OpenAccount />
        <Investment />
        <Steps />
        <Benefits />
        <AccountType />
        <FAQs />
        <OpenAccount />
        </>
     );
}

export default SignUpPage;