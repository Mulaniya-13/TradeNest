import React from 'react';

function Hero() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center p-5 border-bottom'>
                <h1 className='fs-3'>Charges</h1>
                <h4 className='fs-5 mt-3 text-muted mb-5'>List of all charges and taxes</h4>
                </div>
                <div className='row text-center p-5'>
                <div className='col-4 p-3'>
                    <img src='media/images/pricingMF.svg' style={{width:"75%"}}></img>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='mt-3 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/images/intradayTrades.svg' style={{width:"75%"}}></img>
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='mt-3 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-3'>
                    <img src='media/images/pricingMF.svg' style={{width:"75%"}}></img>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='mt-3 text-muteds'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;