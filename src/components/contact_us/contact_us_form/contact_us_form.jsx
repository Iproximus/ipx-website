import React from 'react';
import './../contact_us_style.css'

import ContactUsFromHeader from './contact_us_form_header';
import ContactUsMeetFrom from './contact_us_meet_form';
import ContactUsFromFooter from './contact_us_form_footer';

export default function ContactUsFrom() {
  return (
    <div className="formContainer">
      <ContactUsFromHeader />
      <ContactUsMeetFrom/>
      <ContactUsFromFooter/>
   </div>
  );
}