import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Companies from "./Components/Companies";
import Residencies from "./Components/Residencies";
import Value from "./Components/Value";
import Contact from "./Components/Contact";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
import './App.css'
function App() {
  return (
    <div className="app">
      <div>
      <div className="white-gradient"/>
      <Header/>
      <Hero/>
    </div>
    <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
    <GetStarted/>
    <Footer/>
  </div>  
  );
}

export default App;
