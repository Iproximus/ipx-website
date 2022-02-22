import React from 'react';
import './../contact_us_style.css'

import CallUsDirectly from './call_us_directly';
import ChatWithTeam from './chat_with_team';
import BookaMeeting from './book_a_meeting';


export default function ContactUsCards() {
  return (
    <div className="cardsContainer">
      <CallUsDirectly />
      <ChatWithTeam />
      <BookaMeeting />
    </div>
  );
}
