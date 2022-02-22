import React from 'react';
import './contact_us_style.css'

import ContactUsHeaderSection from './contact_us_header_section/contact_us_header_section';
import ContactUsFrom from './contact_us_form/contact_us_form'
import ContactUsCards from './contact_us_cards/contact_us_cards'

export default function ContactUsMain() {
    return (
        <div className='contactContainer'>
            <div><ContactUsHeaderSection /> </div>
            <div> <ContactUsCards /></div>
            <div className='contactform'> <ContactUsFrom /></div>
        </div>
    );
}
