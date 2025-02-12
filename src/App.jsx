import React from "react";
import bgVideo from"./assets/earth-bg.mp4";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner/Banner2";
import Footer from "./Components/Footer/Footer";
import AOS from"aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(()=>{
    AOS.init(
      {
        duration:1200,
        easing:'ease-in-out',

      }
    )
  })
  return (
   <div>
    <div className="h-[600px] relative">
      <video 
      autoPlay loop muted
      className="fixed right-0 top-0 h-[700[px] w-full object-cover z[-1]"
      
      >
        <source src={bgVideo} type="video/mp4"/>
      </video>
      <NavBar/>
      <Hero/>

    </div>
    {/* Services Card section */}
    <Services/>
    <Banner/>
    <Banner2/>
    <Footer/>
   </div>
  )
}

export default App