import React from 'react';
import './../contact_us_style.css'
import Msg from './../../../images/contact_us/Messages.webp'


export default function ChatWithTeam() {
    return (

        <div className='cardsContainer'>
            <div className="divcard">
                <div className="cardicon">
                    <img src={Msg} alt='chat with us' />
                </div>

                <div className="cardname">
                    <h1 className='h1head'>Chat with our sales team</h1>
                </div>
                <div className="cardbutton">
                    <button className='btnstyle'>Chat with sales</button>
                </div>
            </div>
        </div>
    );
}
