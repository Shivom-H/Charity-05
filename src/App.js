import './App.css';
import Header from "./Components/header/index";
import Navbar from "./Components/navbar/index";
import Hero from "./Components/hero-div/index";
import Banner1 from "./Components/banners/banner1";
import DonateInfo from "./Components/donate-info/index";
import MiscHead1 from "./Components/misc_component/header1";
import Card1 from "./Components/card/card1";
import InfoBanner from "./Components/misc_component/listing_react";
import MiscHeader2 from "./Components/misc_component/header2";
import Card2 from "./Components/card/card2";
import HeroBan from "./Components/banners/hero_ban";
import ContactForm from "./Components/contactus/index";
import Teamslider from "./Components/misc_component/teamslider";
import Banend2 from "./Components/banners/banend2";
import Last_ban from "./Components/banners/last_ban";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <Banner1 />
      <DonateInfo />
      <MiscHead1 />
      <Card1 />
      <InfoBanner />
      <MiscHeader2 />
      <Card2 />
      <HeroBan />
      <ContactForm />
      <Banend2 />
      <br/>
      <Teamslider />
      <Last_ban />
      <Footer />


<br/>
<br/>
<br/>
<br/>
<br/>


    </div>
  );
}

export default App;
