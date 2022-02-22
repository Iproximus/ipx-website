import React from 'react';
import './../contact_us_style.css'
import Bookdate from './../../../images/contact_us/Date.webp'


export default function BookAMeeting() {
    return (

        <div className='cardsContainer'>
            <div className="divcard">
                <div className="cardicon">
                    <img src={Bookdate} alt='Book a meet' />
                </div>
                <div className="cardname">
                    <h1 className='h1head'>Book a meeting</h1>
                </div>
                <div className="cardbutton">
                    <button className='btnstyle'>Choose a date & time</button>
                </div>
            </div>
        </div>


    );
}
