import React, { Component } from 'react';
import './Navbar.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Blurbs from '../Blurbs/Blurbs';
import Events from '../Events/Events.tsx';
import Videos from '../videos/Videos';
import Home from "../Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Petitions from '../Petitions/Petitions';
import HowToGuides from '../HowTos/HowToGuides.tsx';

export default class Navbar extends Component {
  render() {
    return (

      <>
        <div className="navbar">
          <div className="home-icon"><a href='/home'><i class="bi bi-house-fill"></i></a></div>
          <div className="wallet-icon"><a href="https://www.buymeacoffee.com/thereisnoearthb"><i class="bi bi-wallet2"></i></a></div>
        </div>
        <Router>
          <Routes>
            <Route path="/blurbs" element={<Blurbs />} />
            <Route path="/petitions" element={<Petitions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/howTos" element={<HowToGuides />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </>
    )
  }
}
