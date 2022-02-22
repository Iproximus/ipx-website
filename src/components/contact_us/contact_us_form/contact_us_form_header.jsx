import React from 'react';
// import ContactUsMeetFrom from './contact_us_meet_form';

import './../contact_us_style.css'

export default function ContactUsFromHeader() {
    return (
        <div >
            <div className='bookameeting'>
                <h1>Book a Meeting</h1>
            </div>
            <div className="formdetails">
                <p> To schedule time to speak with one of our sales representatives, complete the form, then click "next" to choose a date and time that works for you.</p>
            </div>
            {/* <ContactUsMeetFrom/> */}
        </div>
    );
}
