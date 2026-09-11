import React from 'react';

function Hero() {
    return ( 
        <div className='container mb-5'>
            <div className='row text-center'>
                <img src="media/images/homeHero.png" alt="hero Image" className='mb-5'></img>
                <h1>Invest in everything</h1>
                <p className="mb-4">Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-2 btn btn-primary fs-5 mb-5" style={{width: "20%", margin: "0 auto"}}>SignUp</button>
            </div>

        </div>
     );
}

export default Hero;