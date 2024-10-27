import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

const HomePage = () => {
  return(
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Hero/>
      <Footer/>


    </div>
  )
}

export default HomePage




