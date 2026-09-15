import React from 'react';

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore
}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mt-5 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href='learnMore'>Learn More  <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-6'>
                    <img src={imageURL} style={{width:"100%"}}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;