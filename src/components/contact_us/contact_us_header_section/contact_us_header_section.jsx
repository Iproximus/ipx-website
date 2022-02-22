import React from 'react';
import sideimage from '../../../images/contact_us/contact_us_header_img.svg'

export default function ContactUsHeaderSection() {
  return (
    
    <div className='textcontent'>
      
      <div className='headline'>
        <div className='h1head'>
          <h1>Contact Us About Iproximu Company</h1>
        </div>
        <div className='ptag'>
          <p>We'd love to show you how you can get more traffic and leads, increase your sales productivity, provide better customer service, or all of the above! Here are a few ways to reach out to our sales team.</p>
        </div>
      </div>

      <div className="sideimage">
        <img src={sideimage} alt='Contactformimage' />
      </div>
    </div>
  );
}
