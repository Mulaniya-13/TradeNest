import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-top text-center'>
                <div className='col-8 p-4'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5 mb-3'>Brokerage calculator</h3></a>
                    <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"11px"}} className='text-muted'>
                        <li>call & Trade and RMS auto-squareoff: Additionl charges of  ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contracts notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% of ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (non-PIS), 0.5% of ₹100 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;