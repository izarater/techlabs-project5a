import './whatis.css'
import Button from '../button/button'

function WhatIs () {
    return (
        <div className='whatIsContent'>
            <h1 id='whatIsTitle'>What is SaveFood?</h1>
            <p id='whatIsText'>
                We connect restaurants or stores which usually throw food away
                with people who may have a difficult situation so they can get a hand.
                Our goal is to prevent restaurants or other stablishments from wasting
                more food by giving it to those in need. 
            </p>
            <div className='whatIsButtons'>
                <Button variant='primary'>Read More</Button>
                <Button  variant='tertiary'>Start Using</Button>
            </div>
        </div>
    )
}

export default WhatIs