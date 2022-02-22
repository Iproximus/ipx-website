import React from 'react';
import './../contact_us_style.css'
import Calling from '../../../images/contact_us/Calling.webp'

export default function CallUsDirectly() {
    return (
        <div className='cardsContainer'>
            <div className="divcard">
                <div className="cardicon">
                    <img src={Calling} alt='calling' />
                </div>
                <div className="cardname">
                    <h1 className='h1head'>Call us directly</h1>
                </div>
                <div className="cardbutton">
                    <p className='phnumber'>+91 11 7127 9211</p>
                    <p className='seemore'>See more local numbers</p>
                </div>
            </div>
        </div>
    );
}
