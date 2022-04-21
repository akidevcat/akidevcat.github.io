import React from 'react';
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from "../components/Navbar";
import Footer from '../components/sections/Footer';
import Home from './Home';
import Background from '../components/Background';
import CV from './CV';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cv' element={<CV/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
