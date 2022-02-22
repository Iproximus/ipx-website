import React from 'react';
import './../contact_us_style.css'

export default function ContactUsFromFooter() {
    return (
        <div className='footerContainer'>
            <div className="pFooter">
                <p>We're committed to your privacy. HubSpot uses 
                    the information you provide to us to contact you
                     about our relevant content, products, and services.
                      You may unsubscribe from these communications at 
                      any time.
                     For more information, check out our <a href='#' >Privacy Policy.</a></p>
            </div>
            <div className="cardbutton">
                    <button className='btnstyle' style={{alignContent:'center', marginLeft:'290px'}} >Submit</button>
                </div>
        </div>
    );
}
