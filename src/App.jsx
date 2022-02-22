import './App.css';

import HeaderNavbar from './components/header_navbar/header_navbar';
import OurTeam from './components/our_team/our_team';
import Footer from './components/footer/footer';
import ContactUsMain from './components/contact_us/contact_us_main';

function App() {
  return (
    <div className="App">
      <HeaderNavbar/>
      <OurTeam/>
      <ContactUsMain/>
      <Footer/>
    </div>
  );
}

export default App;
