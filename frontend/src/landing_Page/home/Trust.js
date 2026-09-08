import React from 'react';


function Trust() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6'>
                    <h1 className='mb-4 fs-2'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="/philosophy" style={{textDecoration: 'none'}}>Our philosophies</a>.</p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like <a href="/nudge" style={{textDecoration: 'none'}}>Nudge</a> and <a href="/kill-switch" style={{textDecoration: 'none'}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src="media/images/ecosystem.png" alt="ecosystem" style={{width:"100%"}}></img>
                    <div className='text-center'>
                        <a href="/products" style={{textDecoration: 'none' , margin: '10px'}}>Explore our products <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        <a href="/kite-demo" style={{textDecoration: 'none', margin: '10px'}}>Try Kite demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Trust;