import React from 'react';
import logo from '../resources/logo.svg';
import './App.css';
import Navbar from "../components/Navbar";
import Introduction from '../components/sections/introduction';
import About from '../components/sections/about';
import Works from '../components/sections/Works';
import Footer from '../components/sections/Footer';
import Experience from '../components/sections/experience';
import Background from '../components/Background';
import Contact from '../components/sections/Contact';
import  'bootstrap/dist/js/bootstrap';

//ToDo investigate why /client cannot be used

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <About/>
      <Works/>
      <Experience/>
      <Contact/>
      <Footer/>
      {/*<Background/>*/}
    </div>
  );
}

export default App;
