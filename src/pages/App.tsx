import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from "../components/Navbar";
import Footer from '../components/sections/Footer';
import Home from './Home';
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
      {/*<Background/>*/}
    </div>
  );
}

export default App;
