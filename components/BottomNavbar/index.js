import React, { Component } from 'react';
import Link from 'next/link';
import "bootstrap-icons/font/bootstrap-icons.css";

export default class BottomNavbar extends Component {
  render() {
    return (
      <>
        <div className="h-12 bg-accent-2 fixed bottom-0 left-0 w-full">
          <div className="w-full m-auto my-3 text-accent-1 text-center">
            <Link href="/events"><i className="bi bi-calendar2-week mx-6 text-xl"></i></Link>
            <Link href="/how-to"><i className="bi bi-magic mx-6 text-xl"></i></Link>
            <Link href="/blurbs"><i className="bi bi-book mx-6 text-xl"></i></Link>
            <Link href="/videos"><i className="bi bi-film mx-6 text-xl"></i></Link>
            <Link href="/petitions"><i className="bi bi-globe mx-6 text-xl"></i></Link>
          </div>
        </div>
      </>
    );
  }
}
