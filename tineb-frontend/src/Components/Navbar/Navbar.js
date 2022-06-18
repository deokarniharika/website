import React, { Component } from 'react';
import './Navbar.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Blurbs from '../Blurbs/Blurbs';
import Events from '../Events.tsx';
import Videos from '../../videos/Videos';
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
          <div className="home-icon"><a href='/'><i class="bi bi-house-fill"></i></a></div>
          <div className="wallet-icon"><i class="bi bi-wallet2"></i></div>
        </div>
        <Router>
          <Routes>
            <Route path="/blurbs" element={<Blurbs />} />
            <Route path="/petitions" element={<Petitions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/howTos" element={<HowToGuides />} />
          </Routes>
        </Router>
      </>
    )
  }
}
