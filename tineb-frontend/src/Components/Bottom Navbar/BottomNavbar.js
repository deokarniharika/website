import './BottomNavbar.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { Component } from 'react';

export default class BottomNavbar extends Component {
  render() {
    return (
      <>
        <div className="b-navbar">
          <a href="/events" className="b-navbar-link"><i className="bi bi-calendar2-week"></i></a>
          <a href="/howTos" className="b-navbar-link"><i className="bi bi-magic"></i></a>
          <a href="/blurbs" className="b-navbar-link"><i className="bi bi-book"></i></a>
          <a href="/videos" className="b-navbar-link"><i className="bi bi-film"></i></a>
          <a href="/petitions" className="b-navbar-link"><i className="bi bi-globe"></i></a>
        </div>
      </>
    );
  }
}
