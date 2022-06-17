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

  export default class Navbar extends Component {
    render() {
      return (
        
        <>
        <div className="navbar">
          <div className="home-icon"><a href='/'><i class="bi bi-house-fill"></i></a></div>
          {/* <Router> */}
          {/* <Link to="/blurbs">THERE IS NO EARTH B</Link> */}
        <h3><a href="/blurbs">THERE IS NO EARTH B</a></h3> 
          {/* <Link to="/blurbs"><h1>There Is No Earth B</h1></Link> */}
          {/* <Route path="/blurbs" component={Blurbs} />   */}
          {/* </Router> */}
          <div className="wallet-icon"><i class="bi bi-wallet2"></i></div>
        </div>
        <Router>
            <Routes>
            <Route path="/blurbs" element={<Blurbs />} />
                      <Route path="/petitions" element={<Petitions />} />
                      <Route path="/events" element={<Events />} />
                      <Route path="/videos" element={<Videos/>} />
          </Routes>
          </Router>
      </>
      )
    }
  }
