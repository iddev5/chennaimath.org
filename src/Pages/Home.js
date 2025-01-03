import Header from "../Components/Navbar";
import Slider from "../Components/Slider";
import Welcome from "../Components/Welcome";
import CurrentEvents from "../Components/CurrentEvents";
import Announcements from "../Components/Announcements";
import Inspiration from "../Components/Inspiration";
import Footer from "../Components/Footer";
import Quote from "../Components/Quote";
import Arti from "../Components/Arti";
import { useState } from "react";

function Home() {
 const[Sidebar,SetSidebar]=useState(true) 
  return (
    <>
      <Header Sidebar={Sidebar} SetSidebar={SetSidebar} />
      <Slider />
      <Welcome />
      <Inspiration />
      <Announcements />
      {/*<Arti />*/}
      {/*<Quote />*/}
      <Footer />
    </>
  );
}

export default Home;
