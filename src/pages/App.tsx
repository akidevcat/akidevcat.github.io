import React from 'react';
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from "../components/Navbar";
import NavbarRu from "../components/NavbarRu";
import Footer from '../components/sections/Footer';
import Home from './Home';
import HomeRu from './HomeRu';
import Background from '../components/Background';
import CV from './CV';
import CVRu from './CVRu';

function App() {
  return (
    <div className="App">
      {/* <Route path='/' element={<Navbar/>} /> */}
      {/* <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='/ru' element={<NavbarRu/>} />
      </Routes>
      <Navbar/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Navbar/>, <Home/>]} />
        <Route path='/ru' element={[<NavbarRu/>, <HomeRu/>]} />
        <Route path='/cv' element={<CV/>} />
        <Route path='/ru/cv' element={<CVRu/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
